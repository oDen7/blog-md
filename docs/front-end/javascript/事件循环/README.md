<!--
 * @File Name: 
 * @Description: 
 * @Author: oDen7
 * @LastEditors: oDen7
 * @LastEditTime: 2022-06-12 13:53:24
-->
# 概述

- 基本原则

  1. 一次处理一个任务
  2. 一个任务开始后直到运行完成，不会被其他任务中断

- 执行规则:
  1. 在一次迭代中，事件循环将首先检查宏任务队列，如果宏任务等待，则立即开始执行宏任务。
  2. 直到该任务运行完成（或者队列为空），事件循环将移动去处理微任务队列。
  3. 如果有任务在该队列中等待，则事件循环将依次开始执行，完成一个后执行余下的微任务，直到队列中所有微任务执行完毕。

> 宏任务和微任务队列之间的区别: 单次循环迭代中，最多处理一个宏任务（其余的在队列中等待），而队列中的所有微任务都会被处理。

### 任务

- 同步任务

- 宏任务

  1. 创建主文档对象、解析 HTML、执行主线（或全局）JavaScript 代码，更改当前 URL 以及各种事件，如页面加载、输入、网络事件和定时器事件
  2. script(整体代码),setTimeout,setInterval,I/O,UI 交互事件,postMessage,MessageChannel,setImmediate(Node.js 环境)
  3. 宏任务代表一个个离散的、独立工作单元。运行完任务后，浏览器可以继续其他调度，如重新渲染页面的 UI 或执行垃圾回收

  - 注意点:
    1. 两个相同 setTimeout 依次执行
    2. 两个相同 setTimeout,时间少的会优先放到主线程里去执行

- 微任务
  1. 微任务更新应用程序的状态，但必须在浏览器任务继续执行其他任务之前执行，浏览器任务包括重新渲染页面的 UI
  2. Promise.then,Promise.catch,Object.observe,MutationObserver,process.nextTick(Node.js 环境)
  3. 微任务需要尽可能快地、通过异步方式执行，同时不能产生全新的微任务。微任务使得我们能够在重新渲染 UI 之前执行指定的行为，避免不必要的 UI 重绘，UI 重绘会使应用程序的状态不连续

```javascript
console.log("1");

setTimeout(function () {
  console.log("2");
  process.nextTick(function () {
    console.log("3");
  });
  new Promise(function (resolve) {
    console.log("4");
    resolve();
  }).then(function () {
    console.log("5");
  });
});
process.nextTick(function () {
  console.log("6");
});
new Promise(function (resolve) {
  console.log("7");
  resolve();
}).then(function () {
  console.log("8");
});

setTimeout(function () {
  console.log("9");
  process.nextTick(function () {
    console.log("10");
  });
  new Promise(function (resolve) {
    console.log("11");
    resolve();
  }).then(function () {
    console.log("12");
  });
});
```
