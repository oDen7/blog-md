# 概述
## 模块机制

### JavaScript 发展

  > 工具(浏览器兼容) -> 组件(功能模块) -> 框架(功能模块组织) -> 应用(业务模块组织)

### commonjs 模块规范

  1.  模块引用

      ```javascript
      var math = require("math");
      ```

  2.  模块定义

      ```javascript
      // math.js
      exports.add = function () {
        var sum = 0,
          i = 0,
          args = arguments,
          l = args.length;
        while (i < l) {
          sum += args[i++];
        }
        return sum;
      };
      // program.js
      var math = require("math");
      exports.increment = function (val) {
        return math.add(val, 1);
      };
      ```

  3.  模块标识
      > 传递给 require()方法的参数，

### node 模块实现

  1. 路径分析
  2. 文件定位
  3. 编译执行
     - node 提供的模块,核心模块
       1. 核心模块在 node 源代码编译过程中,已经编入进二进制文件
       2. node 进程启动时,直接加载进内存
       3. 没有文件定位 和 编译执行
       4. 读取速度最快
     - 用户编写的模块,文件模块
       1. 运行时动态加载
       2. 需要完整的 路径分析,文件定位,编译执行
       3. 速度比核心模块慢

### 优先从缓存读取

  1. require 对于相同模块二次加载优先从缓存读取,优先级最高

### 路径分析和文件定位

  1. 模块标识符分析

     - node 中的分类

       1. 核心模块

          - 优先级仅次于 缓存加载
          - 已经编译成二进制代码
          - 不能与核心模块标识符命名相同

       2. 相对路径文件模块
       3. 绝对路径文件模块

          - 以.、..和/开始的标识符，被当做文件模块
          - require()方法会将路径转为真实路径,并以真实路径作为索引,讲编译结果放到缓存,是第二次引用更快
          - 指明文件位置,速度仅次于核心模块

       4. 非路径形式的文件模块(自定义模块),如自定义的 connect 模块
          - 特殊的文件模块，可能是一个文件或者包的形式

### 模块路径

  > 定位文件模块的具体文件时制定的查找策略，具体表现为一个路径组成的数组

  ```javascript
  // module_path.js
  console.log(module.paths);

  // linux
  /*
    [ '/home/jackson/research/node_modules',
    '/home/jackson/node_modules',
    '/home/node_modules',
    '/node_modules']
  */
  // windows
  // [ 'c:\\nodejs\\node_modules', 'c:\\node_modules' ]
  ```

  - 路径生成的规则
    1. 当前文件目录下的 node_module 目录
    2. 父目录下的 node_module 目录
    3. 父目录的父目录下的 node_module 目录
    4. 沿路径向上逐级递归，直到根目录下的 node_modules 目录

### 文件分析

  1. 文件拓展名分析
     - 当模块不包含文件拓展名时,node 会按.js,.json,.node 的次序补足扩展名进行尝试
       > 尝试过程中,调用 fs 模块同步阻塞式的判断文件是否存在
       > 优化策略:如果是.node 或.json 文件,加上拓展名会加快策略
       > 同步配合缓存,缓解 Node 单线程中阻塞式调用的缺陷
  2. 目录分析和包
     > 没找到文件但得到文件夹时,在引入自定义模块和逐个模块路径进行查找时经常会出现,该目录会当作包使用
     - node 对包的的查找策略:
       1. 在当前目录下查找 package.json
       2. 通过 JSON.parse()解析出包描述对象，获取 main 属性指定的文件名(index)进行定位
       3. 如果缺少文件拓展名,讲进行文件拓展名分析 [index.js,index.node,index.json]

### 模块编译

  > 编译和执行是引入文件模块的最后一个阶段
  > 定位到具体的文件后，Node 会新建一个模块对象，然后根据路径载入并编译。

  1. .js 文件,通过 fs 模块同步读取文件后编译执行
  2. .node 文件,C/C++编写的扩展文件，通过 dlopen()方法加载最后编译生成的文件
  3. json 文件,通过 fs 模块同步读取文件后，用 JSON.parse()解析返回结果
  4. 其余扩展名文件,当做.js 文件载入

  - Module.\_cache

    > 编译成功的模块都会将其文件路径作为索引缓存
    > 提高二次引用的性能

    ```javascript
    // Native extension for .json
    Module._extensions[".json"] = function (module, filename) {
      var content = NativeModule.require("fs").readFileSync(filename, "utf8");
      try {
        module.exports = JSON.parse(stripBOM(content));
      } catch (err) {
        err.message = filename + ": " + err.message;
        throw err;
      }
    };
    ```

  - Module.\_extensions

    > 系统中已有的扩展加载方式

    - 自定义拓展名
      > require.extensions['.ext']
      - 自 node v0.10.6, 官方不鼓励通过这种方式来进行自定义扩展名的加载，而是期望先将其他语言或文件编译成 JavaScript 文件后再加载
        > 这样做的好处在于不将烦琐的编译加载等过程引入 Node 的执行过程中。

  - javascript 模块编译

    > Node 对 CommonJS 模块规范的实现

    - 直接定义模块的过程放诸在浏览器端，会存在污染全局变量的情况

    1. 模块中包含 require、exports、module、\_filename、\_dirname 变量 进行包装

       ```javascript
       // 模板
       (function (exports, require, module, __filename, __dirname) {});
       // 实例
       (function (exports, require, module, __filename, __dirname) {
         var math = require("math");
         exports.area = function (radius) {
           return Math.PI * radius * radius;
         };
       });
       ```

    2. 通过 vm 核心模块,runInThisContext()方法执行(类似于 eval,具有明确上下文，不污染全局),返回一个具体的 function 对象

    3. 将当前模块对象的 exports 属性、require()方法、module（模块对象自身,以及在文件定位中得到的完整文件路径和文件目录作为参数传递给这个 function()执行

    4. 执行之后，模块的 exports 属性被返回给了调用方,只能访问 exports 所导出的属性或方法,不能访问内部变量

  - c/c++ 编译

    1. Node 调用 process.dlopen()方法进行加载和执行 dlopen() 在 linux,unix 和 Windows 有不同的实现方式,通过底层 libuv 进行封装
    2. .node 的模块文件并不需要编译，因为它是编写 C/C++模块之后编译生成的，所以这里只有加载和执行的过程。
    3. 在执行的过程中，模块的 exports 对象与.node 模块产生联系，然后返回给调用者

  - json 文件
    1. Node 利用 fs 模块同步读取 JSON 文件的内容
    2. 调用 JSON.parse()方法得到对象
    3. 将它赋给模块对象的 exports


