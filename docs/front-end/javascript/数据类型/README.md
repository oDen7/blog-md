# 概述

> javscript中有6种数据类型:
> undefined,Null,boolean,number,string,symbol
> 
> 引用数据类型:
> Object,Array,Function

## typeof
> 返回:undefined,boolean,string,number,object(值为对象或为null),function,symbol


## undefined
> var,let 声明未初始化,为undefined
```javascript
    let val;
    console.log(val == undefined); // true 值相等
    console.log(val === undefined); // true 类型值相等 
```
> 假值, Boolean(undefined) == false // true
> 变量声明未初始化,变量未声明都为 undefined

## null
> null 表示 空对象指针,声明的变量未来保存对象初始化为null
> 假值, Boolean(null) == false // true

## boolean
> true 1,false 0 

```javascript
   Boolean(false) === false  // true
   Boolean("") === false // true
   Boolean(0) === false && Boolean(NaN) === false // true
   Boolean(null) === false // true
   Boolean(undefined) === false // true
```

## number
> 科学计数法:用与乘以10的给定次幂的数值
```javascript
    let floatNum = 3.125e7; // 31250000
```
> 浮点运算没有整数精确,使用ieee 754数值都有此问题
```javascript
    let a = 0.1;
    let b = 0.2;
    console.log(a+b ==0.3); // false
```
> 数值超过最大数值用Infinity 或 -Infinity表示,确定一个值是否为有限大,通过 isFinity() 函数

- 数值转换
  - Number(),parseInt(),parseFloat();
    - Number()用于任何类型
        - 对于字符串,如果字符中包含有意义数值,则会去掉0,并返回值
            ```javascript
                console.log(Number('000111')); // 111
                console.log(Number('00011.1')); // 11.1
                console.log(Number('0xf')); // 15
                console.log(Number('')); // false  //假值返回 false 为 0 
            ```
    - parseInt()和parseFloat()用于字符串转数值,
        - 对于字符串,会去掉无效字符,返回数值
            ```javascript
                console.log(parseInt(' 000111_1blue',10)); // 111 // 特殊字符和0 会被去掉
                console.log(parseInt('00011.1test',10)); // 11
                console.log(parseInt('0xA',16)); // 10 // 第二参数可指定进制数
                console.log(parseInt('',2)); // NaN
                // parseFloat 不能指定进制数,
                console.log(parseFloat('000111blue')); // 111  //没有小数点返回整数
                console.log(parseFloat('00011.1.1test')); // 11.1 // 只识别第一个小数点有效的浮点数
                console.log(parseFloat('0xA')); // 0  // 16进制始终返回 0 
                console.log(parseFloat('')); // NaN
            ```

## NaN
> not a number 不是一个数字,用于返回无法用数值表示的值.
> 0,+0,-0相除会返回NaN
> 分子为0,+0,-0,会返回 Infinity 或 -Infinity
> 通过isNaN() 判断值是否为 Na

## string
> 表示0或多个16位Unicode字符序列.
> 一旦创建值不会改变
```javascript
    let lang = "hello";
    lang = lang + "world";
    console.log(lang); // helloworld
    // 先销毁原始字符串,在返回包含新值的字符串返回
```
- 字符串转换 toString()
```javascript
    let age = 11;
    console.log(age.toString()); // "11"
    let state = true;
    console.log(state.toString()); // "true"
```
- null 和 undefined 没有toString() 方法
```javascript
    let val = null;
    console.log(val.toString()); // Uncaught TypeError: Cannot read properties of null (reading 'toString')
    let val1 = undefined;
    console.log(val1.toString()); // Uncaught TypeError: Cannot read properties of null (reading 'toString')
```
- toString() 方法可以传入进制数
```javascript
    let num = 10;
    console.log(num.toString()); // "10"
    console.log(num.toString(2)); // "1010"
    console.log(num.toString(8)); // "12"
    console.log(num.toString(10)); // "10"
    console.log(num.toString(16)); // "a"
```
- String()方法
```javascript
    console.log(String(10)); // "10"
    console.log(String(false)); // "false"
    console.log(String(undefined)); // "undefined"
    console.log(String(null)); // "null"
    console.log(String("num")); // "num"
```
- 模板字符串 和 插值表达式
> 模板字符串保留换行字符,可跨行定义字符串.
```javascript
    let str = 'hello\nworld';
    let str1 = `hello
world`;
    console.log(str);
    console.log(str1);
    console.log(str == str1);
```
> 插值表达式
> 字符串插值,可一个或多个
```javascript
    let val1 = "hello";
    let val2 = "world";
    let val3 = `${val1}${val2}`;
    console.log(val3); // helloworld
```
> 所有插值强制使用 toString()转化为字符串
- 标签函数
> 接收插值记号分割后的模板和表达式求值
```javascript
    let a = 6;
    let b = 9;
    let fun = (str,aVal,bVal,sumVal)=>{
       console.log(str);
       console.log(aVal);
       console.log(bVal);
       console.log(sumVal);
       return '';
   }
   let fun1 = (str,...res) =>{
       return res[res.length-1];
   }
   let tagRes = fun`${a}+${b}=${a+b}`;
   let tagRes1 = fun1`${a}+${b}=${a+b}`;
   console.log(tagRes); 
   /*
        (4) ['', '+', '=', '', raw: Array(4)]
            0: ""
            1: "+"
            2: "="
            3: ""
            length: 4
            raw: Array(4)
                0: ""
                1: "+"
                2: "="
                3: ""
                length: 4
                [[Prototype]]: Array(0)
            [[Prototype]]: Array(0)
        6
        9
        15
   */
   console.log(tagRes1); // 15
```
- 原始字符串
> 模板字符串可以直接获取原始内容;
> String.raw 标签函数
```Javascirpt
    console.log(`\u00A9`); // @
    console.log(String.raw`\u00A9`); // \u00A9

    自己实现一个raw方法
    let fun = (str)=>{
        return str.raw[0]
    }
    console.log(fun`\u00A9`); // \u00A9


    拓展使用
    let val = "oDen7"
    let fun = (str,val)=>{
        return str.raw[0]+val;
    }
    console.log(fun`\u00A9 ${val}`); // \u00A9 oDen7
```

## symbol
> 创建唯一记号,用作非字符串的对象属性,符号实例唯一不可变
> 确保对象属性唯一
- symbol()
```javascript
   let key = Symbol();
   let key2 = Symbol();
   console.log(key == key2); // false
   let key3 = Symbol('test');
   let key4 = Symbol('test');
   console.log(key3 == key4); // false
   console.log(key); // Symbol()
   console.log(key3); // Symbol(test)
   // 由于其唯一性,所以不会覆盖对象中同名属性
```
- Symbol()不能用作构造函数
```javascript
    let bool = new Boolean(); // typeof(bool)  "object"
    let str = new String(); // typeof(str)  "object"
    let mynum = new Number(); // typeof(mynum)  "object"
    let symbol = new Symbol(); // typeof(symbol) Uncaught TypeError: Symbol is not a constructor 
    // 但可以借助 Object() 
    let symbol1 = Symbol(); 
    // 但可以借助 Object()
    let newSymbol = Object(symbol1); // typeof(newSymbol) "object"
```
- 使用全局符号注册表
```javascript

```


## object
> 对象:一组数据和功能的集合.
> 通过 new 操作符跟对象类型的名称创建.
```javascript
    let o = new Object();
    console.log(o);
    /*
        {}
        [[Prototype]]: Object
            constructor: ƒ Object()
            // 用于创建当前对象的函数
            hasOwnProperty: ƒ hasOwnProperty()
            // 用于判断当前对象实例(不是原型)上是否存在给定的属性.要检查的属性名必须是字符串(如o.hasOwnProperty("name"))
            isPrototypeOf: ƒ isPrototypeOf()
            // 用于判断当前对象是否为另一个对象的原型
            propertyIsEnumerable: ƒ propertyIsEnumerable()
            // 用于判断给定的属性是否可以使用
            toLocaleString: ƒ toLocaleString()
            // 返回对象的字符串表示,该字符串反映对象所在的本地化环境.
            toString: ƒ toString()
            // 返回字符串表示
            valueOf: ƒ valueOf()
            // 返回对象的字符串、数值或布尔表示.
            __defineGetter__: ƒ __defineGetter__()
            __defineSetter__: ƒ __defineSetter__()
            __lookupGetter__: ƒ __lookupGetter__()
            __lookupSetter__: ƒ __lookupSetter__()
            __proto__: (...)
            get __proto__: ƒ __proto__()
            set __proto__: ƒ __proto__()
    */
```