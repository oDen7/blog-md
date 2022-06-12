# 概述

### 同步模块定义 commonjs

1. 主要用于服务端,也可用于客户端
2. 不能在浏览器中直接运行。
3. 使用 require()加载，使用 exports 导出
4. 无论 require 多少次,模块永远是单例
5. 同步加载
6. 使用绝对或相对路径，或 node_modules 目录中依赖的模块标识符
7. 会缓存模块

```javascript
var moduleB = require('./moduleB');
module.exports = {
 stuff: moduleB.doStuff();
};
```

### 异步模块定义 （AMD，Asynchronous Module Definition）

1. 主要用于客户端,考虑网络延迟
2. 模块声明自己的依赖，浏览器中的模块系统会按需获取依赖，并在依赖加载完成后立即执行依赖它们的模块
3. 用函数包装模块定义。防止声明全局变量，并允许加载器库控制何时加载模块。
4. 包装函数也便于模块代码的移植，使用的都是原生 JavaScript 结构。
5. 使用 define 定义模块,使用 require 加载,使用 exports 导出
6. 异步加载
7. 使用字符串标识符指定自己的依赖，加载后立即调用模块工厂函数
8. 可选指定字符串标识符
9. 加载过程
   > AMD 的一般策略是让模块声明自己的依赖，而运行在浏览器中的模块系统会按需获取依赖，并在依赖加载完成后立即执行依赖它们的模块立即调用模块工厂函数

```javascript
define('moduleA', ['moduleB'], function(moduleB) {
 return {
 stuff: moduleB.doStuff();
 };
});

define('moduleA', ['require', 'exports'], function(require, exports) {
 var moduleB = require('moduleB');
 exports.stuff = moduleB.doStuff();
});
动态依赖也是通过这种方式支持的：
define('moduleA', ['require'], function(require) {
 if (condition) {
 var moduleB = require('moduleB');
 }
});
```

### 通用模块定义（UMD，Universal Module Definition）

1. 可同时使用 amd 和 commonjs 模块
2. 启动时检测使用那个模块系统,进行配置,通过立即执行函数包装

```javascript
(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD。注册为匿名模块
    define(["moduleB"], factory);
  } else if (typeof module === "object" && module.exports) {
    // Node。不支持严格 CommonJS
    // 但可以在 Node 这样支持 module.exports 的
    // 类 CommonJS 环境下使用
    module.exports = factory(require(" moduleB "));
  } else {
    // 浏览器全局上下文（root 是 window）
    root.returnExports = factory(root.moduleB);
  }
})(this, function (moduleB) {
  // 以某种方式使用 moduleB
  // 将返回值作为模块的导出
  // 这个例子返回了一个对象
  // 但是模块也可以返回函数作为导出值
  return {};
});
```

### es6 模块

1. 作为一整块 JavaScript 代码而存在的
2. 可以嵌入网页中,也可以外部引用
3. `<script type="module">`声明顺序就是执行顺序
4. import 只能用在外部文件加载,不能用于嵌入代码
5. 以通过浏览器原生加载，也可以与第三方加载器和构建工具一起加载。
6. es6 在浏览器中,异步加载
7. 浏览器加载:

   > 浏览器会解析入口模块，确定依赖，并发送对依赖模块的请求。这些文件通过网络返回后，浏览器就会解析它们的内容，确定它们的依赖，如果这些二级依赖还没有加载，则会发送更多请求。这个异步递归加载过程会持续到整个应用程序的依赖图都解析完成。解析完依赖图，应用程序就可以正式加载模块了。

8. 优点

- 加载后执行
- 只加载一次
- 单例
- 定义公共接口
- 请求加载其他模块
- 支持循环依赖
- 默认在严格模式下执行
- 不共享全局命名空间
- this 的值是 undefined（常规脚本中是 window）
- var 声明不会添加到 window 对象
- 异步加载和执行的

9. 导出

- 命名导出

```javascript
export const foo = "foo";
const foo = "foo";
export { foo };
```

- 默认导出

```javascript
const foo = "foo";
export default foo;
// 等同于 export default foo;
export { foo as default };
```

10. 导入

- 模块标识符可以是相对于当前模块的相对路径，也可以是指向模块文件的绝对路径。
- 导入对模块而言是只读的
- 默认导出就好像整个模块就是导出的值一样。可以使用 default 关键字并提供别名来导入。

```javascript
import { foo } from "./fooModule.js";
console.log(foo); // 'foo'

import foo from "./foo.js";
// 等效
import { default as foo } from "./foo.js";
```

11. 模块转移导出

- 模块导入的值可以直接通过管道转移到导出。

```javascript
export { foo, bar as myBar } from "./foo.js";
```
