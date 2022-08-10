# 概述
## 异步编程

### 难点

  1.  异常处理

      - try/catch/final 在异步编程中不一定适用
      - 解决方案

      > 将异常作为回调函数的第一个实参传回，如果为空值，则表明异步调用没有异常抛出

      ```javascript
      async(function (err, results) {
        // TODO
      });
      ```

      - 在自行编写的异步方法上的一些原则

        1. 必须执行调用者传入的回调函数
        2. 正确传递回异常供调用者判断

        ```javascript
        var async = function (callback) {
          process.nextTick(function () {
            var results = something;
            if (error) {
              return callback(error);
            }
            callback(null, results);
          });
        };
        ```

  2.  函数嵌套过深

      > 在网页渲染的过程中，通常需要数据、模板、资源文件，这三者互相之间并不依赖，但最终渲染结果中三者缺一不可。

      ```javascript
      fs.readFile(template_path, "utf8", function (err, template) {
        db.query(sql, function (err, data) {
          l10n.get(function (err, resources) {
            // TODO
          });
        });
      });
      ```

  3.  阻塞代码

      > 没有 sleep()这样的线程沉睡功能,只有 setInterval()和 setTimeout()这两个函数

      ```javascript
      //有多半的开发者会写出下述这样的代码来实现sleep(1000)的效果
      // TODO
      var start = new Date();
      while (new Date() - start < 1000) {
        // TODO
      }
      // 需要阻塞的代码
      ```

      > 但是事实是糟糕的，这段代码会持续占用 CPU 进行判断，与真正的线程沉睡相去甚远，完全破坏了事件循环的调度。
      > 由于 Node 单线程的原因，CPU 资源全都会用于为这段代码服务，导致其余任何请求都会得不到响应
      > 使用 setTimeout() 效果会好一些

  4.  多线程编程

  - web workers

    > 通过将 JavaScript 执行与 UI 渲染分离，可以很好地利用多核 CPU 为大量计算
    > 同时前端 Web Workers 也是一个利用消息机制合理使用多核 CPU 的理想模型

    - Node 的解决方案:

      1. child_process 是其基础 API
      2. cluster 模块是更深层次的应用

      > 借助 Web Workers 的模式，开发人员要更多地去面临跨线程的编程

  5. 异步转同步
     > Node 提供了绝大部分的异步 API 和少量的同步 API，偶尔出现的同步需求将会因为没有同步 API 让开发者突然无所适从
     > Node 中试图同步式编程，但并不能得到原生支持，需要借助库或者编译等手段来实现
     > 异步调用，通过良好的流程控制，还是能够将逻辑梳理成顺序式的形式

- 异步编程解决方案

  1. 事件发布/订阅模式
  2. Promise/Deferred 模式
  3. 流程控制库

  - 事件发布/订阅模式

    - 高阶函数应用
    - 可以实现一个事件与多个回调函数的关联，这些回调函数又称为事件侦听器通过 emit()发布事件后，消息会立即传递给当前事件的所有侦听器执行。侦听器可以很灵活地添加和删除，使得事件和具体处理逻辑之间可以很轻松地关联和解耦
    - emit()调用多半是伴随事件循环而异步触发的
    - 一种钩子（hook）机制，利用钩子导出内部数据或状态给外部的调用者
    - 不用关注组件是如何启动和执行的，只需关注在需要的事件点上即可

    ```javascript
    // 订阅
    emitter.on("event1", function (message) {
      console.log(message);
    });
    // 发布s
    emitter.emit("event1", "I am message!");
    ```

    - 注意点

      - 对一个事件添加了超过 10 个侦听器，将会得到一条警告
        > 避免内存泄漏
      - 为了处理异常，EventEmitter 对象对 error 事件进行了特殊对待。

        1.  继承 events 模块
            ```javascript
            var events = require("events");
            function Stream() {
              events.EventEmitter.call(this);
            }
            util.inherits(Stream, events.EventEmitter);
            // 通过继承EventEmitter类，利用事件机制解决业务问题
            ```
        2.  利用事件队列解决雪崩问题

            > 使用 once()方法，通过它添加的侦听器只能执行一次，在执行之后就会将它与事件的关联移除。

            ```javascript
            var proxy = new events.EventEmitter();
            var status = "ready";
            var select = function (callback) {
              proxy.once("selected", callback);
              if (status === "ready") {
                status = "pending";
                db.select("SQL", function (results) {
                  proxy.emit("selected", results);
                  status = "ready";
                });
              }
            };
            // 利用了once(),将所有请求的回调都压入事件队列中，
            // 利用其执行一次就会将监视器移除的特点，保证每一个回调只会被执行一次。

            // 此处可能因为存在侦听器过多引发的警告，需要调用setMaxListeners(0)移除掉警告，或者设更大的警告阈值。
            ```

        3.  多异步之间的协作方案

            > 一般而言，事件与侦听器的关系是一对多，但在异步编程中，也会出现事件与侦听器的关系是多对一的情况

            ```javascript
            var count = 0;
            var results = {};
            var done = function (key, value) {
              results[key] = value;
              count++;
              if (count === 3) {
                // 渲染页面
                render(results);
              }
            };
            fs.readFile(template_path, "utf8", function (err, template) {
              done("template", template);
            });
            db.query(sql, function (err, data) {
              done("data", data);
            });
            l10n.get(function (err, resources) {
              done("resources", resources);
            });

            // 多个异步场景中回调函数的执行并不能保证顺序，且回调函数之间互相没有任何交集，所以需要借助一个第三方函数和第三方变量来处理异步协作的结果。
            var after = function (times, callback) {
              var count = 0,
                results = {};
              return function (key, value) {
                results[key] = value;
                count++;
                if (count === times) {
                  callback(results);
                }
              };
            };
            var done = after(times, render);

            // 实际应用
            var emitter = new events.Emitter();
            var done = after(times, render);
            emitter.on("done", done);
            emitter.on("done", other);
            fs.readFile(template_path, "utf8", function (err, template) {
              emitter.emit("done", "template");
            });
            db.query(sql, function (err, data) {
              emitter.emit("done", "data", data);
            });
            l10n.get(function (err, resources) {
              emitter.emit("done", "resources", resources);
            });
            ```

        4.  EventProxy

            > 对事件订阅/发布模式的扩充，可以自由订阅组合事件。

            ```javascript
            var proxy = new EventProxy();
            proxy.all("template", "data", "resources", function (template, data, resource
             // TODO
            });
            fs.readFile(template_path, "utf8", function (err, template) {
             proxy.emit("template", template);
            });
            db.query(sql, function (err, data) {
             proxy.emit("data", data);
            });
            l10n.get(function (err, resources) {
             proxy.emit("resources", resources);
            });
            ```

            - all() 订阅多个事件当,每个事件都被触发之后，侦听器才会执行
            - tail()方法的侦听器则在满足条件时执行一次之后，如果组合事件中的某个事件被再次触发，侦听器会用最新的数据继续执行
            - after()方法来实现事件在执行多少次后执行侦听器的单一事件组合订阅方式

            - EventProxy 原理

              > 来自于 Backbone 的事件模块
              > EventProxy 则是将 all 当做一个事件流的拦截层，在其中注入一些业务来处理单一事件无法解决的异步处理问题。

              ```javascript
              // Trigger an event, firing all bound callbacks. Callbacks are passed the
              // same arguments as `trigger` is, apart from the event name.
              // Listening for `"all"` passes the true event name as the first argument
              const trigger = function (eventName) {
                var list, calls, ev, callback, args;
                var both = 2;
                if (!(calls = this._callbacks)) return this;
                while (both--) {
                  ev = both ? eventName : "all";
                  if ((list = calls[ev])) {
                    for (var i = 0, l = list.length; i < l; i++) {
                      if (!(callback = list[i])) {
                        list.splice(i, 1);
                        i--;
                        l--;
                      } else {
                        args = both
                          ? Array.prototype.slice.call(arguments, 1)
                          : arguments;
                        callback[0].apply(callback[1] || this, args);
                      }
                    }
                  }
                }
                return this;
              };
              ```

            - 异常处理

              ```javascript
              exports.getContent = function (callback) {
                  var ep = new EventProxy();
                  ep.all("tpl", "data", function (tpl, data) {
                  // 成功回调
                  callback(null, {
                      template: tpl,
                      data: data,
                  });
                  });
                  //绑定错误处理函数
                  ep.fail(callback);
                  fs.readFile("template.tpl", "utf-8", ep.done("tpl"));
                  db.get("some sql", ep.done("data"));
              };

              // fail() 实现
              ep.fail(callback);

              ep.fail(function (err) {
                  callback(err);
              });

              ep.bind("error", function (err) {
                  // 卸载掉所有处理函数
                  ep.unbind();
                  // 异常回调
                  callback(err);
              });

              // done()
              ep.done('tpl');

              function (err, content) {
                  if (err) {
                  // 一旦发生异常，一律交给error事件处理函数处理
                  return ep.emit('error', err);
                  }
                  ep.emit('tpl', content);
              }

              ep.done(function (content) {
                  // TODO
                  // 这里无须考虑异常
                  ep.emit('tpl', content);
              });

              function (err, content) {
                  if (err) {
                  // 一旦发生异常，一律交给error事件的处理函数处理
                      return ep.emit('error', err);
                  }
                  (function (content) {
                  // TODO
                  // 这里无须考虑异常
                  ep.emit('tpl', content);
                  }(content));
              }

              ep.done('tpl', function (content) {
                  // content.replace('s', 'S');
                  // TODO
                  // 无须关注异常
                  return content;
              });
              ```

  - Promise/Deferred 模式

        > 使用事件的方式时，执行流程需要被预先设定。
        > 即便是分支，也需要预先设定，这是由发布/订阅模式的运行机制所决定的。

        - Promise

            ```javascript
            var Promise = function () {
                EventEmitter.call(this);
            };
            util.inherits(Promise, EventEmitter);
            Promise.prototype.then = function (
                fulfilledHandler,
                errorHandler,
                progressHandler
            ) {
                if (typeof fulfilledHandler === "function") {
                // 利用once()方法，保证成功回调只执行一次
                this.once("success", fulfilledHandler);
                }
                if (typeof errorHandler === "function") {
                // 利用once()方法，保证异常回调只执行一次
                this.once("error", errorHandler);
                }
                if (typeof progressHandler === "function") {
                this.on("progress", progressHandler);
                }
                return this;
            };
            ```

            - 多异步协同
                ```javascript
                    Deferred.prototype.all = function (promises) {
                        var count = promises.length;
                        var that = this;
                        var results = [];
                        promises.forEach(function (promise, i) {
                            promise.then(function (data) {
                                count--;
                                results[i] = data;
                                if (count === 0) {
                                    that.resolve(results);
                                }
                            }, function (err) {
                                that.reject(err);
                            });
                        });
                        return this.promise;
                    };

                    var promise1 = readFile("foo.txt", "utf-8");
                    var promise2 = readFile("bar.txt", "utf-8");
                    var deferred = new Deferred();
                    deferred.all([promise1, promise2]).then(function (results) {
                    // TODO
                    }, function (err) {
                    // TODO
                    });
                ```

        - Deferred
            ```javascript
            var promisify = function (res) {
                var deferred = new Deferred();
                var result = "";
                res.on("data", function (chunk) {
                result += chunk;
                deferred.progress(chunk);
                });
                res.on("end", function () {
                deferred.resolve(result);
                });
                res.on("error", function (err) {
                deferred.reject(err);
                });
                return deferred.promise;
            };

            promisify(res).then(function () {
                // Done
                }, function (err) {
                // Error
                }, function (chunk) {
                // progress
                console.log('BODY: ' + chunk);
                });
            ```

        - promise 和 Deferred 差异
          1. Deferred 主要是用于内部，用于维护异步模型的状态；
          2. Promise 则作用于外部，通过 then()方法暴露给外部以添加自定义逻辑

  - 流程控制库

    > 非模块化应用

    1. 尾触发 与 Next

       > 应用场景:Connect 的中间件

       ```javascript
       var app = connect();
       // Middleware
       app.use(connect.staticCache());
       app.use(connect.static(__dirname + "/public"));
       app.use(connect.cookieParser());
       app.use(connect.session());
       app.use(connect.query());
       app.use(connect.bodyParser());
       app.use(connect.csrf());
       app.listen(3001);

       //中间件利用了尾触发的机制，最简单的中间件如下
       function (req, res, next) {
        // 中间件
       }
       ```

       - 每个中间件传递请求对象、响应对象和尾触发函数(next)，通过队列形成一个处理流

         > 中间件: request,response,next -> 中间件: request,response,next -> 中间件: request,response,next

       - Connect 的核心实现

         ```javascript
         function createServer() {
           function app(req, res) {
             app.handle(req, res);
           }
           utils.merge(app, proto);
           utils.merge(app, EventEmitter.prototype);
           app.route = "/";
           app.stack = [];
           for (var i = 0; i < arguments.length; ++i) {
             app.use(arguments[i]);
           }
           return app;
         }
         // 核心代码是app.stack = [];
         // stack属性是这个服务器内部维护的中间件队列。
         // 通过调用use()方法我们可以将中间件放进队列中。

         // use() 核心代码
         app.use = function (route, fn) {
           // some code
           this.stack.push({ route: route, handle: fn });
           return this;
         };

         // 最后回到 app.handle()方法,每一个监听到的网络请求都将从这里开始处理
         app.handle = function (req, res, out) {
           // some code
           next();
         };

         // next()
         function next(err) {
           // some code
           // next callback
           layer = stack[index++];
           layer.handle(req, res, next);
         }
         ```

    2. async

    3. step
    4. wind
    5. streamline

- 异步并发控制

  > 在 Node 中，我们可以十分方便地利用异步发起并行调用。

  ```javascript
    for (var i = 0, i < 100; i++) {
        async();
    }
  ```

  > 如果并发量过大，我们的下层服务器将会吃不消

  - 同步 I/O :

    > 同步 I/O 因为每个 I/O 都是彼此阻塞的，在循环体中，总是一个接着一个调用，不会出现耗用文件描述符太多的情况，同时性能也是低下的

  - 异步 I/O:

    > 虽然并发容易实现，但是由于太容易实现，依然需要进行过载处理

  - 解决方案:bagpipe

    - 解决思路:

      1. 通过一个队列来控制并发量
      2. 如果当前活跃（指调用发起但未执行回调）的异步调用量小于限定值，从队列中取出执行
      3. 如果活跃调用达到限定值，调用暂时存放在队列中
      4. 每个异步调用结束时，从队列中取出新的异步调用执行

      ```javascript
      var Bagpipe = require("bagpipe");
      // 设定最大并发数为10
      var bagpipe = new Bagpipe(10);
      for (var i = 0; i < 100; i++) {
        bagpipe.push(async, function () {
          // 异步回调执行
        });
      }
      bagpipe.on("full", function (length) {
        console.warn(
          "底层系统处理不能及时完成，队列拥堵，目前队列长度为:" + length
        );
      });

      // push
      Bagpipe.prototype.push = function (method) {
        var args = [].slice.call(arguments, 1);
        var callback = args[args.length - 1];
        if (typeof callback !== "function") {
          args.push(function () {});
        }
        if (this.options.disabled || this.limit < 1) {
          method.apply(null, args);
          return this;
        }
        // 队列长度也超过限制值时
        if (this.queue.length < this.queueLength || !this.options.refuse) {
          this.queue.push({
            method: method,
            args: args,
          });
        } else {
          var err = new Error("Too much async call in queue");
          err.name = "TooMuchAsyncCallError";
          callback(err);
        }
        if (this.queue.length > 1) {
          this.emit("full", this.queue.length);
        }
        this.next();
        return this;
      };

      // next
      Bagpipe.prototype.next = function () {
        var that = this;
        if (that.active < that.limit && that.queue.length) {
          var req = that.queue.shift();
          that.run(req.method, req.args);
        }
      };

      // run
      Bagpipe.prototype.run = function (method, args) {
        var that = this;
        that.active++;
        var callback = args[args.length - 1];
        var timer = null;
        var called = false;
        // inject logic
        args[args.length - 1] = function (err) {
          // anyway, clear the timer
          if (timer) {
            clearTimeout(timer);
            timer = null;
          }
          // if timeout, don't execute
          if (!called) {
            that._;
            next();
            callback.apply(null, arguments);
          } else {
            // pass the outdated error
            if (err) {
              that.emit("outdated", err);
            }
          }
        };
        var timeout = that.options.timeout;
        if (timeout) {
          timer = setTimeout(function () {
            // set called as true
            called = true;
            that._;
            next();
            // pass the exception
            var err = new Error(timeout + "ms timeout");
            err.name = "BagpipeTimeoutError";
            err.data = {
              name: method.name,
              method: method.toString(),
              args: args.slice(0, -1),
            };
            callback(err);
          }, timeout);
        }
        method.apply(null, args);
      };
      ```
