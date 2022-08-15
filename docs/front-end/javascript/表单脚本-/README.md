# 概述

## 表单基础
> `<form>`元素,在 JavaScript 中则以 HTMLFormElement 类型表示
- HTMLFormElement
  1. acceptCharset：服务器可以接收的字符集，等价于 HTML 的 accept-charset 属性。
  2. action：请求的 URL，等价于 HTML 的 action 属性。
  3. elements：表单中所有控件的 HTMLCollection。
  4. enctype：请求的编码类型，等价于 HTML 的 enctype 属性。
  5. length：表单中控件的数量。
  6. method：HTTP 请求的方法类型，通常是"get"或"post"，等价于 HTML 的 method 属性。
  7. name：表单的名字，等价于 HTML 的 name 属性。
  8. reset()：把表单字段重置为各自的默认值。
  9. submit()：提交表单。
  10. target：用于发送请求和接收响应的窗口的名字，等价于 HTML 的 target 属性。

- 通过`id`获取表单 
> 将表单当作普通元素为它指定一个 id 属性,从而可以使用 `getElementById()` 来获取表单
- 通过`document.form`获取属性 
> `document.forms` 集合可以获取页面上所有的表单元素,可以进一步使用 数字索引 或 表单的名字（name） 来访问特定的表单

> 较早的浏览器，或者严格向后兼容的浏览器，也会把每个表单的 name 作为 document 对象的属性。
> 
> 例如，名为"form2"的表单可以通过 document.form2 来访问。
> 
> 不推荐使用这种方法，因为容易出错，而且这些属性将来可能会被浏览器删除。

### 提交表单

### 重置表单

### 表单字段

## 文本框编程

### 选择文本

### 输入过滤

### 自动切换

### HTML5 约束验证 API

## 选择框编程

### 选项处理

### 添加选项

### 移除选项

### 移动和重排选项

## 表单序列化

## 富文本编程

### contenteditable

### 与富文本交互

### 富文件选择

### 通过表单提交富文本
