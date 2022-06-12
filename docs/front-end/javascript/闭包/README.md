# 概述



> 引用另一个函数作用域中变量的函数
> 闭包允许函数访问并操作函数外部的变量。只要变量或函数存在于声明函数时的作用域内，闭包即可使函数能够访问这些变量或函数

## 作用

1. 封装私有变量

   - javascript 不支持声明私有变量
   - 闭包内部的变量可以在闭包内访问，闭包外部不能直接访问闭包内部

```javascript
function Ninja() {
  // 在构造函数内部声明一个变量，因为所声明的变量的作用域局限于构造函数的内部，所以它是一个“私有”变量。我们使用该变量统计 ninja 佯攻的次数
  var feints = 0;
  this.getFeints = function () {
    // 在构造函数内部声明一个变量，因为所声明的变量的作用域局限于构造函数的内部，所以它是一个“私有”变量。我们使用该变量统计 ninja 佯攻的次数
    return feints;
  };
  this.feint = function () {
    // 为 feints 变量声明一个累加方法。由于 feints就私有变量，在外部是无法累加的，累加过程则被限制在我们提供的方法中
    feints++;
  };
}

var ninja1 = new Ninja();
ninja1.feint();

// 验证我们无法直接获取该变量值
assert(
  ninja1.feints === undefined,
  "And the private data is inaccessible to us."
);

// 虽然我们无法直接对 feints 变量赋值，但是我们仍然能够通过 getFeints 方法操作该变量的值
assert(
  ninja1.getFeints() === 1,
  "We're able to access the internal feint count."
);

var ninja2 = new Ninja();
// 当我们通过 ninja构造函数创建一个新的 ninja2 实例时，ninja2 对象具有自己私有的 feints 变量
assert(
  ninja2.getFeints() === 0,
  "The second ninja object gets its own feints variable."
);
```

2. 回调函数

   > 需要在将来不确定的某一时刻异步调用的函数
   > 通常在回调函数中,我们通常需要频繁访问外部数据

   - 闭包内创建的变量可以通过内部的提供的函数读取和更新变量值
   - 闭包不是在创建的那一时刻的状态的快照，而是一个真实的状态封装
   - 实例无法访问其他闭包内的变量,除非具有层级关系

# 全局上下文

- 全局执行上下文

  > 全局执行上下文只有一个，当 JavaScript 程序开始执行时就已经创建了全局上下文

- 函数执行上下文

  > 在每次调用函数时，就会创建一个新的函数上下文

- 单线程的执行模型:

  1. 在某个特定的时刻只能执行特定的代码。
  2. 函数调用时，当前的执行上下文必须停止执行，并创建新的函数执行上下文来执行函数。
  3. 函数执行完后，将函数执行上下文销毁，并重新回到调用前的执行上下文。

- 执行上下文栈(调用栈) 执行:
  1. 在每个 JavaScript 程序只创建一个全局执行上下文,并从全局执行上下文开始执行（在单页应用中每个页面只有一个全局执行上下文）.
  2. 当执行全局代码时，全局执行上下文处于活跃状态
  3. 声明调用函数时,JavaScript 引擎停止执行全局执行上下文并创建新的函数执行上下文,并置入执行上下文栈的顶部.
  4. 函数执行完后,会从函调用栈栈顶弹出,并重新激活一直等待的全局执行上下文并恢复执行.

# 词法环境

> 是 JavaScript 引擎内部用来跟踪标识符与特定变量之间的映射关系

- 代码嵌套与词法环境

  > 除了跟踪局部变量、函数声明、函数的参数和词法环境外，还有必要跟踪外部（父级）词法环境。

  - 查找规则

    1. 访问外部代码结构中的变量,如果在当前环境中无法找到标识符，就会对外部环境进行查找
    2. 查找到匹配的变量 或是 在全局环境中无法找到对应标识符而返回错误，就会停止查找

- JavaScript 引擎是如何跟踪这些变量的呢？

```javascript
var ninja = "muneyoshi";

function skulk() {
  var action = "skulking";

  function report() {
    var intro = "aha";
    assert(intro === "aha", "local");
    assert(action === "skulking", "outer");
    assert(ninja === "muneyoshi", "global");
  }
  report();
}

skulk();

//
// global : 变量:ninja    skulk: function skulk(){}  [[Environment]] -> 指向 global 环境
// skulk : 变量:action    report: function report(){}  [[Environment]] -> 指向 skulk 环境
// report : 变量:intro
```

##### 执行栈: global -> skulk -> report

##### 词法环境

1.  global
    - 变量:ninja
    - skulk: function skulk(){} [[Environment]] -> 指向 global 环境
2.  skulk
    - 变量:action
    - report: function report(){} [[Environment]] -> 指向 skulk 环境
3.  report
    - 变量:intro

##### 查找规则

- 查找 intro
  1. 在 report 环境中检查 -> 找到
- 查找 action
  1. 在 report 环境中检查 -> 未找到
  2. 检查 report 的 外层环境 skulk ,在 skulk 环境中检查 -> 找到
- 查找 ninja

  1. 在 report 环境中检查 -> 未找到
  2. 检查 report 的 外层环境 skulk ,在 skulk 环境中检查 -> 未找到
  3. 检查 skulk 的 外层环境 global ,在 global 环境中检查 -> 找到

- 外部环境与新建的词法环境，JavaScript 引擎将调用函数的内置[[Environment]]属性与创建函数时的环境进行关联

# 立即调用的匿名函数

> 立即调用的函数表达式（IIFE，Immediately Invoked Function Expression）

- 作用
  > 使用 IIFE 可以模拟块级作用域，即在一个函数表达式内部声明变量，然后立即调用这个函数。
  > IIFE 内部 可以访问外部变量,但是 外部无能访问 IIFE 内部变量, 达到不暴露私有成员的目的

```javascript
var a = "123";
(function () {
  var b = "12345"; // 闭包会将函数提升置顶到当前作用域
  console.log(a);
})(); // window
console.log(b);
```

## 私有变量

> JavaScript 没有私有成员的概念，所有对象属性都公有的。不过，倒是有私有变量的概念。
> 任何定义在函数或块中的变量，都可以认为是私有的，因为在这个函数或块的外部无法访问其中的变量。
> 私有变量包括函数参数、局部变量，以及函数内部定义的其他函数。

- 特权方法(privileged method)
  > 能够访问函数私有变量（及私有函数）的公有方法

```javascript
function Person() {
  // 私有变量和私有函数
  let age = 18;
  function getPrivateFun() {
    return age;
  }
  function setPrivateFun(val) {
    age = val;
  }
  // 特权方法
  this.getAgeMethod = function () {
    return getPrivateFun();
  };

  this.setAgeMethod = function (val) {
    return setPrivateFun(val);
  };

  this.getName = function () {
    return name;
  };
  this.setName = function (value) {
    name = value;
  };
}

let person = new Person("Nicholas");
console.log(person.getName()); // 'Nicholas'
person.setName("Greg");
console.log(person.getName()); // 'Greg'
console.log(person.getAgeMethod()); // 18
person.setAgeMethod(20);
console.log(person.getAgeMethod()); // 20

// 优点:变量唯一,方法唯一
// 缺点:每个实例都会重新创建一遍新的变量和新方法
```

## 静态私有变量

```javascript
(function () {
  let name = "Nicholas";
  let age = 18;

  Person = function (name, age) {
    name = name;
    age = age;
  };

  function setAge(val) {
    age = val;
  }

  function getAge() {
    return age;
  }

  Person.prototype.getName = function () {
    return name;
  };
  Person.prototype.setName = function (value) {
    name = value;
  };
  Person.prototype.getAge = function () {
    return getAge();
  };
  Person.prototype.setAge = function (value) {
    return setAge(value);
  };
})();

let person = new Person("Nicholas");
console.log(person.getName()); // 'Nicholas'
person.setName("Greg");
console.log(person.getName()); // 'Greg'
console.log(person.getAge()); // 18
person.setAge(20);
console.log(person.getAge()); // 20

let person1 = new Person();
console.log(person1.getName());
console.log(person1.getAge());

// 优点:同原型的实例共享
// 缺点:没有私有变量和方法
```

## 模块方式

- 单例对象
  > 只有一个实例的对象

```javascript
let singleton = {
  name: value,
  method() {
    // 方法的代码
  },
};
```

- 模块方式
  > 在单例对象基础上加以扩展，使其通过作用域链来关联私有变量和特权方法。

```javascript
let singleton = (function () {
  // 私有变量和私有函数
  let privateVariable = 10;
  function privateFunction() {
    return false;
  }
  // 特权/公有方法和属性
  return {
    publicProperty: true,
    publicMethod() {
      privateVariable++;
      return privateFunction();
    },
  };
})();

// 模块模式使用了匿名函数返回一个对象。
// 在匿名函数内部，首先定义私有变量和私有函数。
// 创建一个要通过匿名函数返回的对象字面量
// 只包含可以公开访问的属性和方法
// 因为这个对象定义在匿名函数内部，所以它的所有公有方法都可以访问同一个作用域的私有变量和私有函数
```

- 如果单例对象需要进行某种初始化，并且需要访问私有变量时，那就可以采用这个模式

```javascript
let application = (function () {
  // 私有变量和私有函数
  let components = new Array();
  // 初始化
  components.push(new BaseComponent());
  // 公共接口
  return {
    getComponentCount() {
      return components.length;
    },
    registerComponent(component) {
      if (typeof component == "object") {
        components.push(component);
      }
    },
  };
})();
```

## 模块增强方式

> 在返回对象之前先对其进行增强
> 适合单例对象需要是某个特定类型的实例，但又必须给它添加额外属性或方法的场景

```javascript
let singleton = (function () {
  // 私有变量和私有函数
  let privateVariable = 10;
  function privateFunction() {
    return false;
  }
  // 创建对象
  let object = new CustomType();
  // 添加特权/公有属性和方法
  object.publicProperty = true;
  object.publicMethod = function () {
    privateVariable++;
    return privateFunction();
  };
  // 返回对象
  return object;
})();
```

```javascript
let application = (function () {
  // 私有变量和私有函数
  let components = new Array();
  // 初始化
  components.push(new BaseComponent());
  // 公共接口
  return {
    getComponentCount() {
      return components.length;
    },
    registerComponent(component) {
      if (typeof component == "object") {
        components.push(component);
      }
    },
  };
})();

// 优化上个代码
let application = (function () {
  // 私有变量和私有函数
  let components = new Array();
  // 初始化
  components.push(new BaseComponent());
  // 创建局部变量保存实例
  let app = new BaseComponent();
  // 公共接口
  app.getComponentCount = function () {
    return components.length;
  };
  app.registerComponent = function (component) {
    if (typeof component == "object") {
      components.push(component);
    }
  };
  // 返回实例
  return app;
})();
// 主要区别在于这里创建了一个名为 app 的变量，其中保存了 BaseComponent 组件的实例。
// 这是最终要变成 application 的那个对象的局部版本。
// 在给这个局部变量 app 添加了能够访问私有变量的公共方法之后，匿名函数返回了这个对象。
// 然后，这个对象被赋值给 application
```
