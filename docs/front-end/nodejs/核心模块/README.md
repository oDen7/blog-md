# 概述
## 核心模块

> node 核心模块编译成可执行文件的过程中被编译进二进制文件

### node 核心分为两部分

  - c/c++
    > 放在 node 项目的 src 目录下
  - JavaScript 文件
    > 放在 lib 目录下

### JavaScript 核心模块编译过程

  1. 转存 c/c++代码

     > 通过 v8 内置的 js2c.py 工具,将所有内置 JavaScript 代码（src/node.js 和 lib/\*.js）转换成 C++里的数组,生成 node_natives.h 头文件

     - 此过程 JavaScript 的代码以字符串形式存储在 node 命名空间,不可直接执行
     - 启动 node 时,JavaScript 代码直接加载进内存
     - 加载过程中,JavaScript 核心模块通过标识符分析后直接定位到内存中,比从磁盘中查询要快

  2. 编译 JavaScript 核心模块

     > lib 目录下的所有模块文件也没有定义 require、module、exports 变量

     - 引入 JavaScript 核心模块
     - 通过 头尾包装
     - 执行和导出 exports 对象
     - 与文件模块的区别:获取源代码的方式（核心模块是从内存中加载的）以及缓存执行结果的位置

### C/C++核心模块编译过程

  > C++模块主内完成核心,JavaScript 主外实现封装的模式是 Node 能够提高性能的常见方式
  > 脚本语言的开发速度优于静态语言，但是其性能则弱于静态语言
  > Node 的这种复合模式可以在开发速度和性能之间找到平衡点

  - 内建模块
    > 通常不能被用户直接调用
    > Node 的 buffer、crypto、evals、fs、os 等

  1.  内建模块的组织形式

      - 内建模块定义之后
      - 通过 NODE_MODULE 宏将模块定义到 node 命名空间中
      - 模块的具体初始化方法挂载为结构的 register_func 成员

      - node_extensions.h 文件将内建模块统一放进入 node_module_list 的数组中
        > 通过 get_builtin_module()方法从 node_module_list 数组取出
        - 优点
          - 它们本身由 C/C++编写，性能上优于脚本语言
          - 在进行文件编译时，它们被编译进二进制文件。
          - 一旦 Node 开始执行，它们被直接加载进内存中，无须再次做标识符定位、文件定位、编译等过程，直接就可执行
        - 模块
          - node_buffer
          - node_crypto
          - node_evals
          - node_fs
          - node_http_server
          - node_os
          - node_zlib
          - node_timer_wrap
          - node_tcp_wrap
          - node_udp_wrap
          - node_pipe_wrap
          - node_cares_wrap
          - node_tty_wrap
          - node_process_wrap
          - node_fs_event_wrap
          - node_signal_watcher

  2.  内建模块导出

      > 在 node 的所有模块类型中的依赖关系
      > 文件模块 -> 核心模块 -> 内建模块
      > 通常不推荐文件模块直接调用内建模块

      - 如何通过 JavaScript 核心模块调用内建模块的内部变量或方法

        1. node 启动时,会生成一个全局变量 process
        2. 通过 Binding()方法来协助加载内建模块

        - 执行过程
          1. 加载内建模块时,先创建一个 exports 空对象
          2. 调用 get_builtin_module() 取出内建模块对象
          3. 执行 register_func()填充 exports 对象
          4. exports 对象按模块名缓存，并返回给调用方完成导出

  3.  核心模块引入流程

      > 为了符合 commonjs 规范,从 JavaScript 到 C/C++的过程相当复杂
      > NODE_MODULE(node_os,reg_func) -> get_builtin_module("node_os") -> process.binding("os") -> NativeModule.require("os") -> require("os")

      - 流程
        - C/C++层面的内建模块定义
        - （JavaScript）核心模块的定义和引入
        - （JavaScript）文件模块层面的引入

  4.  模块调用栈

      - C/C++内建模块
        > 属于最底层的模块，它属于核心模块，主要提供 API 给 JavaScript 核心模块和第三方 JavaScript 文件模块调用
        > 如果你不是非常了解要调用的 C/C++内建模块，请尽量避免通过 process.binding()方法直接调用
      - JavaScript 核心模块

        - 作为 C/C++内建模块的封装层和桥接层，供文件模块调用
        - 功能模块，它不需要跟底层打交道

      - 依赖关系
        > 文件模块通常由第三方编写，包括普通 JavaScript 模块和 C/C++扩展模块，主要调用方向为普通 JavaScript 模块调用扩展模块
        - 文件模块: c/c++扩展模块 -> JavaScript 模块
        - 核心模块: c/c++内建模块 -> JavaScript 模块
        - 核心模块 -> JavaScript 模块 <- c/c++扩展模块
