# 概述

#### 作用
> 改变绑定上下文
> 当前对象中没有的方法,可以借助其他对象的方法

### call,apply
> 两者作用相同,传参方式不同

### bind
> 改变this指向后,返回当前方法,用于调用
> 返回当前方法 举个栗子:
> let updateVal = function(){
>      console.log("=====> hello world");
> }
> console.log(updateVal);