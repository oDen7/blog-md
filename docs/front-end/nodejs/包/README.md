# 概述
## 包

> 在模块之外，包和 NPM 则是将模块联系起来的一种机制
> 模块 <- require() <- 包:出口模块 <- require() <- 模块

### 包结构

  1. package.json：包描述文件
     - 包规范
       - 必填
         - name
           > 包名
         - description
           > 包简介
         - version
           > 版本号
         - keywords
           > 关键字
         - maintainers
           > 包维护者列表
         - contributors
           > 贡献者列表
         - bugs
           > 一个可以反馈 bug 的网页地址或邮件地址
         - licenses
           > 许可证列表
         - repositories
           > 托管源代码的位置列表
         - dependencies
           > 使用当前包所需要依赖的包列表
         - author
           > 包作者
         - bin
           > 一些包作者希望包可以作为命令行工具使用
           > 配置好 bin 字段后，通过 npm install package_name -g 命令可以将脚本添加到执行路径中，之后可以在命令行中直接执行。前面的 node-gyp 即是这样安装的。通过-g 命令安装的模块包称为全局模式
         - main
           > 模块引入方法 require()在引入包时，会优先检查这个字段，并将其作为包中其余模块的入口。
           > 如果不存在这个字段，require()方法会查找包目录下的 index.js、index.node、index.json 文件作为默认入口。
         - devDependencies
           > 一些模块只在开发时需要依赖。
       - 非必填
         - homepage
           > 当前包的网站地址
         - os
           > 操作系统支持列表
         - cpu
           > CPU 架构的支持列表
         - engine
           > 支持的 JavaScript 引擎列表
         - builtin
           > 当前包是否是内建在底层系统的标准组件
         - directories
           > 包目录描述
         - implements
           > 实现规范的列表
         - scripts
           > 脚本说明对象.用来安装、编译、测试和卸载包
  2. bin：用于存放可执行二进制文件的目录。
  3. lib：用于存放 JavaScript 代码的目录。
  4. doc：用于存放文档的目录。
  5. test：用于存放单元测试用例的代码。

## 前后端共用模块

  - 模块侧重点

    1. 客户端
       > 瓶颈在于带宽
       > 需要通过网络加载代码
    2. 服务器
       > 瓶颈则在于 CPU 和内存等资源
       > 从磁盘中加载

  - 兼容多种模块规范

        > 它能够兼容 Node,AMD,CMD 以及常见的浏览器环境

```javascript
(function (name, definition) {
  // 检测上下文环境是否为AMD或CMD
  var hasDefine = typeof define === "function",
    // 检查上下文环境是否为Node
    hasExports = typeof module !== "undefined" && module.exports;
  if (hasDefine) {
    // AMD环境或CMD环境
    define(definition);
  } else if (hasExports) {
    // 定义为普通Node模块
    module.exports = definition();
  } else {
    // 将模块的执行结果挂在window变量中，在浏览器中this指向window对象
    this[name] = definition();
  }
})("hello", function () {
  var hello = function () {};
  return hello;
});
```
