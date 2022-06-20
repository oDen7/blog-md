# 概述

## FileReader
> 允许 Web 应用程序异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容

### file对象
  - 可以为`input元素`中选择文件后返回的`FileList`对象
  - 可以为`拖放操作`生成的`DataTransfer`对象
  
### FileReader对象属性
1. FileReader.error
  > 表示在读文件时发生的错误
2. FileReader.readyState
   1. Empty 0 还没有加载数据
   2. Loading 1 数据正在被加在
   3. Done 2 已完成全部的读取请求
3. fileReader.result
  > 文件的内容.属性仅在读取操作完成后才有效,数据的格式取决于使用那个方法读取操作

### FileReader事件处理
1. FileReader.onabort
   > 在读取操作被中断时触发
2. FileReader.onerror
   > 在读取操作发生错误时触发
3. FileReader.onload
   > 在读取操作完成时触发
4. FileReader.onloadstart
   > 在读取操作开始时触发
5. FileReader.onloadend
   > 在读取操作结束时触发
6. FileReader.onprogress
   > 在读取Blob时触发

### FileReader方法
1. FileReader.abort()
   > 中止读取操作。在返回时,`readyState`为`Done`
2. FileReader.readAsArrayBuffer()
   > 开始读取指定的`Blob`中的内容,一旦完成,result属性中保存的将是被读取文件的`ArrayBuffer数据对象`
3. FileReader.readAsBinaryString()
   > 开始读取指定的`Blob`中的内容,一旦完成,result属性中保存的将是被读取文件的`原始二进制数据`
4. FileReader.readAsDataURL()
   > 开始读取指定的`Blob`中的内容,一旦完成,result属性中包含一个`data:`URL格式的`Base64`字符串
5. FileReader.readAsText()
   > 开始读取指定的`Blob`中的内容,一旦完成,result属性中包含一个`字符串`

### demo
[这是一个实例](https://github.com/oDen7/blog-md-demo/tree/main/upload)