# 概述

- 函数名
  > 函数名就是指向函数的指针，所以它们跟其他包含对象指针的变量具有相同的行为
- 函数参数

  - ECMAScript 函数（非箭头函数）的参数在内部表现为一个数组,arguments
  - 箭头函数函数不能使用 arguments,但可以通过 function 包裹获取

```javascript
function doAdd() {
  if (arguments.length === 1) {
    console.log(arguments[0] + 10);
  } else if (arguments.length === 2) {
    console.log(arguments[0] + arguments[1]);
  }
}

function doAdd(num1, num2) {
  if (arguments.length === 1) {
    console.log(num1 + 10);
  } else if (arguments.length === 2) {
    console.log(arguments[0] + num2);
  }
}

doAdd(10); // 20
doAdd(30, 20); // 50
```

- 没有重载

  - JavaScript 没有函数签名,同名函数,后定义的会覆盖先定义的

  ```javascript
  let addSomeNumber = function (num) {
    return num + 100;
  };
  addSomeNumber = function (num) {
    return num + 200;
  };
  let result = addSomeNumber(100); // 300
  ```

- 默认参数

  1. es5 需要通过判断参数是否为 undefined 来确定是否设置默认值
  2. es6 可以直接 显式定义 默认参数
  3. 默认值只有在调用时才会求值

- 函数声明和函数表达式

  - JavaScript 引擎在任何代码执行之前，
    1. 会先读取函数声明，并在执行上下文中生成函数定义。
    2. 函数表达式必须等到代码执行到它那一行，才会在执行上下文中生成函数定义

- 函数声明提升

  - 在执行代码时，JavaScript 引擎会先执行一遍扫描，把发现的函数声明提升到源代码树的顶部。因此即使函数定义出现在调用它们的代码之后，引擎也会把函数声明提升到顶部
  - 如果是函数表达式,则会报错

- 函数提升 和 变量提升 的优先级

  1. 函数声明会置顶
  2. 变量声明也会置顶
  3. 函数声明比变量声明更置顶 =============> 函数和变量同名时,会优先留下函数的值(函数优先级更高)
  4. 变量和赋值语句一起书写，在 js 引擎解析时，会将其拆成声明和赋值 2 部分，=========> 声明置顶，赋值保留在原来位置
  5. 声明过的变量不会重复声明
  6. 只有 var 会提升,隐式全局变量不会提升

- 函数作为值
  - 函数名在 ECMAScript 中就是变量，所以函数可以用在任何可以使用变量的地方

## 函数内部

- arguments

  > 类数组对象,包含调用函数传入的所有参数 // 只能在以 function 定义的函数下使用

  - arguments 中的 callee
    > 指向 arguments 对象所在函数的指针

- this

  > this 引用是把函数当成方法调用的上下文对象 //（在网页的全局上下文中调用函数时，this 指向 windows）

  - 标准函数
    > 根据 调用的方式 时确定 this 指向
  - 箭头函数
    > 箭头函数的 this 与声明所在的上下文的相同

- caller
  > 引用的是调用当前函数的函数，或者如果是在全局作用域中调用的则为 null
  > 严格模式下会报错 // 为了分清 arguments.caller(函数本身) 和 函数的 caller 而故意为之的(调用的函数的函数)
  - 只要给函数一个名称，而且这个名称不变，这样定义就没有问题
    > 这个函数要正确执行就必须保证函数名是 factorial，从而导致了紧密耦合

```javascript
function outer() {
  inner();
}
function inner() {
  console.log(inner.caller);
}
outer();
/*
ƒ outer() {
 inner(); 
}
*/
inner(); // null

function factorial(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * arguments.callee(num - 1);
  }
}
```

- new.target
  1. 函数当作普通函数调用时,new.target 为 undefined
  2. 函数当作构造函数调用时,new.target 将引用被调用的构造函数

```javascript
let Test = function () {
  console.log(new.target);
};

Test(); // undefined
new Test();
/*
ƒ (){
    console.log(new.target);
}
*/
```

### 函数属性与方法

  1. length
     > 函数定义的命名参数个数
  2. prototype
     > 保存引用类型所有实例方法的地方

  - toString()
  - valueOf()
  - apply() // 函数内 this 值,参数数组
  - call() // 函数内 this,参数
  - bind() // 创建一个新的函数实例，其 this 值会被绑定到传给 bind()的对象

- apply 和 call 如何选择

  > 直接传 arguments 对象或者一个数组，那就用 apply()
  > 否则 就是 call

- apply,call 和 bind 的好处
  > 而是控制函数调用上下文即函数体内 this 值的能力

```javascript
// apply
function sum(num1, num2) {
  return num1 + num2;
}
function callSum1(num1, num2) {
  return sum.apply(this, arguments); // 传入 arguments 对象
}
function callSum2(num1, num2) {
  return sum.apply(this, [num1, num2]); // 传入数组
}
console.log(callSum1(10, 10)); // 20
console.log(callSum2(10, 10)); // 20

// call
function sum(num1, num2) {
  return num1 + num2;
}
function callSum(num1, num2) {
  return sum.call(this, num1, num2);
}
console.log(callSum(10, 10)); // 20

// bind
window.num = 10;
var o = {
  num: 20,
};
function bindSum() {
  console.log(this.num + 10);
}
bindSum(); // 20
let objectBindSum = bindSum.bind(o);
objectBindSum(); // 30
```

- 函数表达式

  > 匿名函数,也称为 兰达姆函数,创建一个函数再把它赋值给一个变量

- 递归
  - arguments.callee 就是一个指向正在执行的函数的指针，因此可以在函数内部递归调用

```javascript
function factorial(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * arguments.callee(num - 1);
  }
}

// 严格模式下无法使用  arguments.callee
const factorial = function f(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * f(num - 1);
  }
};
```

- 尾递归优化条件
  1. 代码在严格模式下执行
  2. 外部函数的返回值是对尾调用函数的调用
  3. 尾调用函数返回后不需要执行额外的逻辑
  4. 尾调用函数不是引用外部函数作用域中自由变量的闭包

```javascript
"use strict";
// 有优化：栈帧销毁前执行参数计算
function outerFunction(a, b) {
  return innerFunction(a + b);
}
// 有优化：初始返回值不涉及栈帧
function outerFunction(a, b) {
  if (a < b) {
    return a;
  }
  return innerFunction(a + b);
}
// 有优化：两个内部函数都在尾部
function outerFunction(condition) {
  return condition ? innerFunctionA() : innerFunctionB();
}
```

## 函数调用

1. 一个函数直接被调用,fun()
2. 一个方法关联在对象上,实现面向对象编程,obj.fun()
3. 一个构造函数实例化对象, new Fun()

- new 会做什么？(第三次记录了 = =)
  1. 创建一个新对象
  2. 该对象作为 this 参数传递给构造函数，从而成为构造函数的函数上下文
  3. 新构造的对象作为 new 运算符的返回值

4. 通过函数的 apply 和 call 方法,fun.apply(this)或者 fun.call(this)
5. 立即执行函数
6. 闭包

### 作为函数调用

```javascript
function ninja() {}
ninja(); // 函数定义作为函数被调用

var samurai = function () {};
samurai(); // 函数表达式作为函数被调用
(function () {})(); // 会被立即调用的函数表达式，作为函数被调用
```

### 作为方法调用

```javascript
function whatsMyContext() {/
  return this; // 返回函数上下文，从而让我们能从函数外面检查函数上下文
}
assert(whatsMyContext() === window,"Function call on window"); // 作为函数被调用并将其上下文设置为window对象

var getMyThis = whatsMyContext;  // 变量 getMyThis 得到了函数 whatsMyContext的引用

assert(getMyThis() === window,"Another function call in window"); // 使用变量getMyThis来调用函数，该函数仍然作为函数被调用，函数上下文也依然是window对象

var ninja1 = {
 getMyThis: whatsMyContext // 创建一个对象ninjal，其属性 getMyThis 得到了函数 whatsMyContext的引用
};

assert(ninja1.getMyThis() === ninja1,"Working with 1st ninja"); // 使用ninja1对象的方法getMyThis来调用函数。函数上下文现在是ninja1了。这就是面向对象

var ninja2 = {
 getMyThis: whatsMyContext // 创建一个对象ninja2，其属性 getMyThis 得到了函数 whatsMyContext的引用
};

assert(ninja2.getMyThis() === ninja2,"Working with 2nd ninja"); // 使用ninja2对象的方法getMyThis来调用函数。函数上下文现在是ninja2
```

### 作为构造函数调用

```javascript
// 作为构造函数调用
function Ninja() {
  this.skulk = function () {
    return this;
  };
} // 构造函数创建一个对象，并在该对象也就是函数上下文上添加一个属性skulk。这个skulk方法再次返回函数上下文，从而能让我们在函数外部检测函数上下文

var ninja1 = new Ninja(); //
var ninja2 = new Ninja(); // 通过关键字new调用构造函数从而创建两个新对象。变量ninja1和变 量ninja2分别引用了这两个新对象

assert(ninja1.skulk() === ninja1, "The 1st ninja is skulking");
assert(ninja2.skulk() === ninja2, "The 2nd ninja is skulking"); // 检测已创建对象中的skulk方法。每个方法都应该返回自身已创建的对象
```

### 构造函数 返回 原始值 或 对象时 的区别
  1. 如果构造函数返回一个对象，则该对象将作为整个表达式的值返回，而传入构造函数的 this 将被丢弃。
  2. 如果构造函数返回的是非对象类型，则忽略返回值，返回新创建的对象

```javascript
// 构造函数返回原始值
function Ninja() {
  // 定义一个叫做 Ninja 的构造函数
  this.skulk = function () {
    return true;
  };
  return 1; // 构造函数返回一个确定的原始类型值，即数字 1
}
assert(Ninja() === 1, "Return value honored when not called as a constructor");
// 该函数以函数的形式被调用，正如预期，其返回值为数字 1.

var ninja = new Ninja(); // 该函数通过 new 关键字以构造函数的形式被调用
assert(
  typeof ninja === "object",
  "Object returned when called as a constructor"
);
assert(typeof ninja.skulk === "function", "ninja object has a skulk method");
// 测试表明，返回值1 被忽略了，一个新的被初始化的对象被通过关键字 new 所返回

var puppet = {
  rules: false,
}; // 创建一个全局对象，该对象的rules属性设置为false;

function Emperor() {
  this.rules = true;
  return puppet;
} // 尽管初始化了传入的this对象，返回该全局对象

var emperor = new Emperor(); // 作为构造函数调用该函数

assert(emperor === puppet, "The emperor is merely a puppet!");
assert(emperor.rules === false, "The puppet does not know how to rule!");
// 测试表明，变量emperor的值为由构造函数返回的对象，而不是new表达式所返回的对象
```

### 使用 apply 和 call 方法调用
  - 最终作为函数上下文（可以通过 this 参数隐式引用到）传递给执行函数的对象不同。

1. 方法 - 即为方法所在的对象
2. 函数 - window 或者 undefined
3. 构造函数 - 新创建的对象实例

- 立即执行函数

```javascript
(function () {
  console.log(this); // window
})();
```

### 闭包

```javascript
var name = "The Window";
var object = {
  name: "My Object",
  getNameFunc: function () {
    return function () {
      return this.name;
    };
  },
};
alert(object.getNameFunc()()); //"The Window"（在非严格模式下）

var name = "The Window";
var object = {
  name: "My Object",
  getNameFunc: function () {
    var that = this;
    return function () {
      return that.name;
    };
  },
};
alert(object.getNameFunc()()); //"My Object"
```

### 高阶函数
  > 把函数作为参数，或是将函数作为返回值的函数

```javascript
function foo(x) {
  return function () {
    return x;
  };
}

// 对于相同的foo()函数，传入的bar参数不同，则可以得到不同的结果
function foo(x, bar) {
  return bar(x);
}
```
