# 概述

### var
- 作用域 
> 函数内使用var声明变量为局部变量
```javascript
    function test(){
        var message = "hi";
    }
    test();
    console.log(message); // Uncaught ReferenceError: message is not defined
```
> 函数内不使用var声明变量会提升为全局变量
```javascript
    function test(){
        message = "hi";
    }
    test();
    console.log(message); // "hi"
```
- 声明提升
> 变量声明提升至函数作用域的顶部.
```javascript
    function foo(){
        console.log(age);
        var age = 26;
    }
    foo(); // undefined
    // 等同于
    function foo(){
        var age;
        console.log(age);
        age = 26;
    }
    foo(); // undefined

    // 反复声明会被最后一次赋值替代
    function foo(){
        var age = 16;
        var age = 26;
        var age = 36;
        console.log(age);
    }
    foo(); // 36
```

### let 
- 作用域 
> 块级作用域, {} 包裹,块作用域是函数作用域的子集
> javascript引擎 记录变量声明的标识符所在的块作用域,嵌套使用不会报错
```javascript
    if(true){
        var name = "Matt";
        console.log(name); // Matt
    }
    console.log(name); // Matt
    if(true){
        let name = "Matt";
        console.log(name); // Matt
    }
    console.log(name); // undefined
```
> var和let不能声明同名变量
```javascript
   var a;
   var b; // Uncaught SyntaxError: Identifier 'a' has already been declared
```

- 暂时性死区
> let在未声明情况下使用会报错,变量不会被提升
```JavaScript
   console.log(name); // undefined
   var name = "Matt"; // 被提升

   console.log(age);
   let age = 26;   // 不提升 
                   // Uncaught ReferenceError: age is not defined
```

- 条件声明
> var变量会被提升,多余声明会被JavaScript自动合并
> let 不会被提升,所以不会检查之前的同名变量
```javascript
    // 实例1
    <script>
        var name = "Nicholas";
        let age = 26;
    </script>
    <script>
        var name = "Matt"; // 有提升,会被覆盖
        let age = 36; // 有同名,会报错
    </script>
```
```javascript
    // 实例2
    <script>
        var name = "Nicholas";
        let age = 36;
    </script>
    <script>
       if(typeof name === 'undefined'){
           let name; // name会被限制在当前块中
       }

       name = "Matt";

       try{
           console.log(age); // 36
       }catch(err){
           let age;
           // age 被限制在块儿中
       }
       age = 26;
       console.log(name); // Matt
       console.log(age);  // 26
    </script>
```


- for循环中的let声明
> var 会渗透到函数体外部
> let 的作用域仅限for循环内部

```JavaScript
    for(var i=0;i<5;++i){
        setTimeout(()=>console.log(i),0)
    }
    // 实际输出 5、5、5、5、5
```
> 原因:退出循环后,迭代变量保存的是循环退出的值.执行定时器,i为同一变量,输出同一个值.

### const
> 声明必须初始化,改变普通类型的const变量会报错
```JavaScript
   const a; // Uncaught SyntaxError: Missing initializer in const declaration

   const b =1;
   b=2; // Uncaught TypeError: Assignment to constant variable.
```
> 不能重复声明
```JavaScript
   const a =1;
   const a =2; // Uncaught SyntaxError: Identifier 'a' has already been declared
```

> 块级作用域
```JavaScript
   const a =1;
   if(true){
        const a =2;
   }
   console.log(a); // 1
```

> const 接收对象或数组时,改变属性或数组成员, const 不会限制
```JavaScript
   const arr = [1,2,3];
   arr[0] = 10;
   console.log(arr); //  [10, 2, 3]
   
   const obj = {a:1,b:2,c:3};
   obj.a = 10;
   console.log(obj); // {a: 10, b: 2, c: 3}
```

### 全局声明
> var 在全局作用域会成为window对象的属性,let,const 不会.
```javascript
   var name = "Matt";
   console.log(window.name); // 'Matt'

   let age = 26;
   console.log(window.age); // undefined

   const sex = "男";
   console.log(window.sex); // undefined
```

### 总结
1. var存在变量提升,const/let不存在
2. const,let存在暂时性死区,会报错,var会报undefined
3. 在全局作用域下,var变量会提升到最顶部,挂在到window上,let,const不会,打印window.变量时为undefined
4. var为函数作用域,提升至函数作用域顶部,let,const都为块级作用域,花括号包括即为块,块级作用域是函数作用域的子集.
5. const 不会修改for循环变量