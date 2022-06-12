# 概述
## Node 的异步 I/O

- node 事件循环

  1. 在进程启动时，Node 便会创建一个类似于 while(true)的循环
  2. 每执行一次循环体的过程我们称为 Tick
  3. 每个 Tick 的过程就是查看是否有事件待处理，如果有，就取出事件及其相关的回调函数。
  4. 如果存在关联的回调函数，就执行它们
  5. 然后进入下个循环，如果不再有事件处理，就退出进程

- 事件循环

  - 典型的生产者/消费者模型
  - 异步 I/O、网络请求等则是事件的生产者，源源不断为 Node 提供不同类型的事件，这些事件被传递到对应的观察者那里，事件循环则从观察者那里取出事件并处理
  - Windows 下,基于 IOCP 创建,linux/unix 基于多线程创建

- 请求对象

  > JavaScript 发起调用到内核执行完 I/O 操作的过渡过程中，存在一种中间产物，它叫做请求对象
  > 请求对象是异步 I/O 过程中的重要中间产物，所有的状态都保存在这个对象中，包括送入线程池等待执行以及 I/O 操作完毕后的回调处理

  - fs.open()方法来作为例子，探索 Node 与底层之间是如何执行异步 I/O 调用以及回调函数究竟是如何被调用执行的？

        ```javascript
        fs.open = function (path, flags, mode, callback) {
          // ...
          binding.open(
            pathModule._makeLong(path),
            stringToFlags(flags),
            mode,
            callback
          );
        };
        ```

        1. 从 JavaScript 调用 Node 的核心模块
        2. 核心模块调用 C++内建模块
        3. 内建模块通过 libuv 进行系统调用
           1. 这里 libuv 作为封装层,有两个平台的实现，实质上是调用了 uv_fs_open()方法
           2. 在uv_fs_open()的调用过程中，我们创建了一个FSReqWrap请求对象
           3. 从 JavaScript 层传入的参数和当前方法都被封装在这个请求对象中，其中我们最为关注的回调函数则被设置在这个对象的 oncomplete_sym 属性
               - req_wrap->object_->Set(oncomplete_sym, callback);
           4. 对象包装完毕后，在Windows下，则调用 QueueUserWorkItem() 方法将这个FSReqWrap对象推入线程池中等待执行
               - QueueUserWorkItem(&uv_fs_thread_proc,req,WT_EXECUTEDEFAULT)
                  - 参数
                    1. 将要执行的方法的引用，这里引用的是uv_fs_thread_proc
                    2. uv_fs_thread_proc运行时所需要的参数
                    3. 执行的标志

              > uv_fs_thread_proc()方法会根据传入参数的类型调用相应的底层函数。以uv_fs_open()为例，实际上调用fs_open()方法。

        4. 至此，JavaScript调用立即返回，由JavaScript层面发起的异步调用的第一阶段就此结束
        5. JavaScript线程可以继续执行当前任务的后续操作
          > 当前的I/O操作在线程池中等待执行，不管它是否阻塞I/O，都不会影响到JavaScript线程的后续执行，如此就达到了异步的目的

- 执行回调

  > 组装好请求对象、送入 I/O 线程池等待执行，实际上完成了异步 I/O 的第一部分，回调通知是第二部分

  - 线程池中的 I/O 操作调用完毕之后，会将获取的结果储存在 req-result 属性上，然后调用 PostQueuedCompletionStatus()通知 IOCP，告知当前对象操作已经完成

    - PostQueuedCompletionStatus((loop)->iocp, 0, 0, &((req)->overlapped))
      > 向 IOCP 提交执行状态，并将线程归还线程池
      > 通过 PostQueuedCompletionStatus()方法提交的状态，可以通过 GetQueuedCompletionStatus()提取

    1. 在每次 Tick 的执行中，它会调用 IOCP 相关的 GetQueuedCompletionStatus()方法检查线程池中是否有执行完的请求
    2. 如果存在,会将请求对象加入到 I/O 观察者的队列中，然后将其当做事件处理

    > I/O 观察者回调函数的行为就是取出请求对象的 result 属性作为参数，取出 oncomplete_sym 属性作为方法，然后调用执行，以此达到调用 JavaScript 中传入的回调函数的目的

- 异步 I/O 模型

  1. 异步调用: 开始 -> 发起异步调用 -> 封装请求对象 -> 设置参数和回调函数 -> 将请求对象放入线程池等待执行 -> 结束
  2. 线程池: 开始 -> 线程可用 -> 执行请求对象中的 I/O 对象 -> 将执行完成的结果放在请求对象中 -> 通知 IOCP 调用完成 -> 归还线程 -> 结束
  3. 事件循环: 开始 -> 创建主循环 -> 从 I/O 观察者取到可用的请求对象 -> 取出回调函数和结果调用执行 -> 获取完成的 I/O 交给 I/O 观察者 -> 从 I/O 观察者取到可用的请求对象

  - windows 与 linux 执行差异
    1. Windows 下主要通过 IOCP 来向系统内核发送 I/O 调用和从内核获取已完成的 I/O 操作，配以事件循环，以此完成异步 I/O 的过程
    2. Linux 下通过 epoll 实现这个过程，FreeBSD 下通过 kqueue 实现，Solaris 下通过 Eventports 实现
    3. Windows 下线程池在由内核（IOCP）直接提供，\*nix 系列下由 libuv 自行实现

- 非 I/O 的异步 API

  1. setTimeout()/setInterval()
     > 它们的实现原理与异步 I/O 比较类似，只是不需要 I/O 线程池的参与
     > 时间复杂度为 O(lg(n))
     - 执行流程
       1. setTimeout(): 开始 -> setTimeout() -> 生成定时器 -> 放进主循环中的 handles -> 结束
       2. 事件循环
  2. process.nextTick()
     > 将回调函数放入队列中，在下一轮 Tick 时取出执行
     > 时间复杂度为 O(1)
  3. setImmediate()

     > Node v0.9.1 之前没有实现
     > process.nextTick,setImmediate 输出结果相同
     > process.nextTick 优先级更高,process.nextTick()属于 idle 观察者,setImmediate()属于 check 观察者,
     > idle > I/O > check

     ```javascript
     // 加入两个nextTick()的回调函数
     process.nextTick(function () {
       console.log("nextTick 延迟执行 1");
     });
     process.nextTick(function () {
       console.log("nextTick 延迟执行 2");
     });
     // 加入两个 setImmediate()的回调函数
     setImmediate(function () {
       console.log("setImmediate 延迟执行 1");
       // 进入下次循环
       process.nextTick(function () {
         console.log("强势插入");
       });
     });
     setImmediate(function () {
       console.log("setImmediate 延迟执行 2");
     });
     console.log("正常执行");

     /*
        正常执行
        nextTick延迟执行1
        nextTick延迟执行2
        setImmediate延迟执行1
        强势插入
        setImmediate延迟执行2
     */
     ```

- 利用 Node 构建 Web 服务器

  1. 网络请求(内核):开始 -> 监听端口 -> 接收网络请求 -> 发送给 I/O 观察者形成事件 -> 结束
  2. 事件循环: 开始 -> 创建主循环 -> 进入循环 -> 执行 I/O 观察者中事件的回调函数 -> 有业务层回调 -> (是:执行回调函数,否:-> 退出循环)
  3. 执行回调(js): 开始 -> 绑定请求事件 -> 执行回调函数 -> 结束

- 服务器模型
  - 同步式
    > 对于同步式的服务，一次只能处理一个请求，并且其余请求都处于等待状态。
  - 每进程/每请求
    > 为每个请求启动一个进程，这样可以处理多个请求，但是它不具备扩展性，因为系统资源只有那么多。
  - 每线程/每请求
    > 为每个请求启动一个线程来处理。尽管线程比进程要轻量，但是由于每个线程都占用一定内存，当大并发请求到来时，内存将会很快用光，导致服务器缓慢。
    > 每线程/每请求的扩展性比每进程/每请求的方式要好，但对于大型站点而言依然不够
