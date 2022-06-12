# 概述

## 组件构成

  - chrome

    1. html,webkit,javascript,v8
    2. 中间层
    3. 硬件

  - nodejs
    1. JavaScript,v8
    2. 中间层(libuv)
    3. 硬件

## 特点

  1. 异步 I/O // 在 Node 中，绝大多数的操作都以异步的方式进行调用
  2. 事件与回调函数
  3. 单线程
     - 弱点:
       1. 无法利用多核 CPU
       2. 错误会引起整个应用退出，应用的健壮性值得考验
       3. 大量计算占用 CPU 导致无法继续调用异步 I/O
          > node 通过与 web workers 相同思路来解决单线程大计算的问题:child_process
  4. 跨平台
     > nodejs -> libuv -> linux,unix 或 Windows

## 应用场景
  1. I/0 密集型
  2. cpu 密集业务
     - 使用 c/c++ 扩展
     - 使用 后台常驻 分割计算
  3. 分布式
