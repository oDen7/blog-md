# 概述

## 对象属性

  1. 数据属性
     - 保存数据值的位置.会从这个位置读取,也会写入到这个位置.
     - Configurable:
       > 可删除,修改特性,修改是否为访问器属性 默认:true
       > configurable 为 false 时,不能修改 writable 之外的特性
       > configurable 为 false 时，writable 由 true 修改为 false 成功
       > configurable 为 false 时，writable 由 false 修改为 true 报错
     - Enumerable:
       > 可遍历 默认:true
     - Writable:
       > 可修改 默认:true
     - Value:
       > 属性实际值
  2. 访问器属性

     - 不包含数据值.包含一个获取(getter)函数和一个设置(setter)函数,非必须
     - Configurable:
       > 可删除,修改特性,修改是否为访问器属性 默认:true
     - Enumerable:
       > 可遍历 默认:true
     - Get:
       > 获取函数,再读取属性时调用.默认: undefined
     - Set:
       > 设置函数,再写入属性时调用.默认: undefined

  3. 定义一个或多个属性属性
     - Object.defineProperties()
  4. 获取指定或多个属性的属性信息
     - Object.getOwnPropertyDescriptor(object,protoname) / Object.getOwnPropertyDescriptors(object)

- 方法

## 工厂模式
  > 工厂模式是一种众所周知的设计模式，广泛应用于软件工程领域，用于抽象创建特定对象的过程。

```javascript
function createPerson(name, age, job) {
  let o = new Object();
  o.name = name;
  o.age = age;
  o.job = job;
  o.sayName = function () {
    console.log(this.name);
  };
  return o;
}
let person1 = createPerson("Nicholas", 29, "Software Engineer");
let person2 = createPerson("Greg", 27, "Doctor");

// 工厂模式虽然可以解决创建多个类似对象的问题，但没有解决对象标识问题（即新创建的对象是什么类型）
```

- 构造函数模式

  > 构造函数是用于创建特定类型对象。
  > Object 和 Array 这样的原生构造函数，运行时可以直接在执行环境中使用
  > 当然也可以自定义构造函数，以函数的形式为自己的对象类型定义属性和方法。

  - 注意事项:
    1. 构造函数也是函数
       > 构造函数与普通函数唯一的区别就是调用方式不同.使用 new 操作符调用就是构造函数,反之为普通函数
    2. 构造函数的问题
       > 其定义的方法会在每个实例上都创建一遍
       > 两个不同对象的同名方法不是同一个 Function 实例 - console.log(person1.sayName == person2.sayName); // false

```javascript
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function () {
    console.log(this.name);
  };
}
let person1 = new Person("Nicholas", 29, "Software Engineer");
let person2 = new Person("Greg", 27, "Doctor");
person1.sayName(); // Nicholas
person2.sayName(); // Greg
```

- 工厂模式 和 构造函数模式的区别:

  1. 没有显式地创建对象
  2. 属性和方法直接赋值给了 this
  3. 没有 return

- new 执行

  1. 在内存中创建一个新对象
  2. 这个 新对象 内部的[[Prototype]]特性被赋值为 构造函数 的 prototype 属性
  3. 构造函数内部的 this 被赋值为这个新对象（即 this 指向新对象）
  4. 执行构造函数内部的代码（给新对象添加属性）
  5. 如果构造函数返回非空对象，则返回该对象；否则，返回刚创建的新对象

## 原型模式
  > 函数会创建一个 prototype 属性，属性是一个对象，包含实例共享的属性和方法

```javascript
function Person() {} // let Person = function() {};
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function () {
  console.log(this.name);
};
let person1 = new Person();
person1.sayName(); // "Nicholas"
let person2 = new Person();
person2.sayName(); // "Nicholas"
console.log(person1.sayName == person2.sayName); // true
```

## 原型

- 构造函数、原型和实例的关系:
  > 每个构造函数都有一个原型对象，原型有一个属性指回构造函数，而实例有一个内部指针指向原型

```javascript
// 构造函数声明
let Person = function () {};
// 声明之后就有一个与构造函数相关联的原型对象
console.log(Person.prototype); // {constructor: ƒ}
// person原型对象的constructor 与 Person构造函数 循环引用
console.log(person.prototype.constructor === person); // true
// Person原型对象 指向 Object原型对象
console.log(Person.prototype.__proto__ === Object.prototype); // true
// Person原型对象 原型指向 Object 构造函数
console.log(Person.prototype.__proto__.constructor === Object); // true
// Person原型对象原型的原型 指向 null
console.log(Person.prototype.__proto__.__proto__ === null); // true

let person1 = new Person();
// 构造函数,原型对象,实例 是三个不同的对象
console.log(person1 !== Person); // true
console.log(person1 !== Person.prototype); // true
console.log(Person.prototype !== Person); // true

// person1实例的原型对象 与 Person原型对象相关联
console.log(person1.__proto__ === Person.prototype); // true
// person1实例的原型对象构造函数 与 Person原型对象的构造函数相关联
conosle.log(person1.__proto__.constructor === Person); // true

// 同构造函数创建的实例共享一个原型对象
console.log(person1.__proto__ === person2.__proto__); // true
```

- 检测实例是否存在于原型对象 - isPrototypeOf

```javascript
let Test = function () {};
let test1 = new Test();
let test2 = new Object();
console.log(Test.prototype.isPrototypeOf(test1));
console.log(Test.prototype.isPrototypeOf(test2));
```

- 返回实例的原型对象 - Object.getPrototypeOf

```javascript
let Test = function () {};
Test.prototype.name = "this is a test";
let test1 = new Test();
console.log(Object.getPrototypeOf(test1));
console.log(Object.getPrototypeOf(test1).name);
```

- 向实例的私有特性[[Prototype]]添加字段 - setPrototypeOf
  > 会严重影响代码性能
  > 可使用 object.create() 来添加私有属性

```javascript
let obj = Object.create({ name: 1 });
console.log(obj.name); // 1 来自原型属性
obj.name = 2;
console.log(obj.name); // 2 来自实例属性
console.log(obj); // {name: 2}
```

### 原型层级

> 对象访问属性时，会按照属性名称开始搜索。先搜索实例本身。如果发现属性，则返回该属性值。如没有找到这个属性，则搜索会沿着指针进入原型对象，然后在原型对象上找到属性后，再返回对应的值。

```javascript
function Person() {}
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function () {
  console.log(this.name);
};
let person1 = new Person();
let person2 = new Person();
person1.name = "Greg";
console.log(person1.name); // "Greg"，来自实例
console.log(person2.name); // "Nicholas"，来自原型
```

- 确定属性是实例上还是原型对象上 - hasOwnProperty() // 属性在实例上返回 true

```javascript
function Person() {}
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function () {
  console.log(this.name);
};
person1.name = "Greg";
console.log(person1.name); // "Greg"，来自实例
console.log(person1.hasOwnProperty("name")); // true
console.log(person2.name); // "Nicholas"，来自原型
console.log(person2.hasOwnProperty("name")); // false
```

- 通过对象访问指定属性时返回 true - in 操作符

```javascript
function Person() {}
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function () {
  console.log(this.name);
};
console.log("name" in person1); // true

person1.name = "Greg";
console.log("name" in person1); // true
```

### 原型链继承

1. 直接通过一个包含所有属性和方法的对象字面量来重写原型

- 问题: Person.prototype 的 constructor 属性就不指向 Person

```javascript
function Person() {}
Person.prototype = {
  name: "Nicholas",
  age: 29,
  job: "Software Engineer",
  sayName() {
    console.log(this.name);
  },
};
```

2. 通过原型重新构造函数会创建一个[[Enumerable]]为 true 的属性
   > 原生 constructor 是不可枚举的

```javascript
function Person() {}
Person.prototype = {
  constructor: Person, // constructor 会创建 Enumerable 属性
  name: "Nicholas",
  age: 29,
  job: "Software Engineer",
  sayName() {
    console.log(this.name);
  },
};
```

> 兼容 ECMAscript 的 JavaScript 引擎 需要 通过 Object.defineProperty() 设置 constructor

```javascript
function Person() {}
Person.prototype = {
  name: "Nicholas",
  age: 29,
  job: "Software Engineer",
  sayName() {
    console.log(this.name);
  },
};
// 恢复 constructor 属性
Object.defineProperty(Person.prototype, "constructor", {
  enumerable: false,
  value: Person,
});
```

3. 原型的动态性 - 任何时候对原型对象所做的修改也会在实例上反映出来

```javascript
let friend = new Person();
Person.prototype.sayHi = function () {
  console.log("hi");
};
friend.sayHi(); // "hi"，没问题！
```

- 注意点:
  1. 在调用 friend.sayHi()时,首先从实例中搜索 sayHi 属性,如果没有,会从原型上查找并返回 sayHi 属性
  2. 实例和原型通过指针,而不是副本,所以会查找到属性并返回属性函数
  3. 实例只有指向原型的指针,没有指向构造函数的指针
  4. 通过 原生对象或自定义对象 取得所有 默认方法的 引用,也可以添加新方法

```javascript
console.log(typeof Array.prototype.sort); // "function"

String.prototype.startsWith = function (text) {
  return this.indexOf(text) === 0;
};
let msg = "Hello world!";
console.log(msg.startsWith("Hello")); // true
```

5. 原型的共享特性

```javascript
function Person() {}
Person.prototype = {
  constructor: Person,
  friends: ["Shelby", "Court"],
};
let person1 = new Person();
let person2 = new Person();
person1.friends.push("Van");
console.log(person1.friends); // "Shelby,Court,Van"
console.log(person2.friends); // "Shelby,Court,Van"
console.log(person1.friends === person2.friends); // true
```

## 原型链
  > 原型本身有一个内部指针指向另一个原型，相应地另一个原型也有一个指针指向另一个构造函数

```javascript
function SuperType() {
  this.property = true;
}
SuperType.prototype.getSuperValue = function () {
  return this.property;
};
function SubType() {
  this.subProperty = false;
}
// 继承 SuperType
SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function () {
  return this.subProperty;
};
let instance = new SubType();
console.log(instance.getSuperValue()); // true
```

### 流程

  1. 在读取实例的属性时，首先在实例上搜索这个属性。
  2. 如果没找到，则会继承搜索实例的原型。
  3. 在通过原型链实现继承之后，搜索就可以继承向上，搜索原型的原型

### 默认原型

  1. 所有引用类型都继承自 Object
     > SubType 继承 SuperType，而 SuperType 继承 Object。
     > 在调用 instance.toString()时，实际上调用的是保存在 Object.prototype 上的方法
  2. 原型与继承关系

     - instanceof 操作符
       > console.log(instance instanceof Object); // true
       > console.log(instance instanceof SuperType); // true
       > console.log(instance instanceof SubType); // true
     - isPrototypeOf()
       > console.log(Object.prototype.isPrototypeOf(instance)); // true
       > console.log(SuperType.prototype.isPrototypeOf(instance)); // true
       > console.log(SubType.prototype.isPrototypeOf(instance)); // true

  3. 子类有时候需要覆盖父类的方法，或者增加父类没有的方法。

     > 为此，这些方法必须在原型赋值之后再添加到原型上
     > 以对象字面量方式创建原型方法会破坏之前的原型链，因为这相当于重写了原型链

  4. 原型中的引用值发生共享,所以属性通常会定义在构造函数

  5. 子类型在实例化时不能给父类型的构造函数穿参

### 盗用构造函数

  > 在子类中调用父类构造函数 -- apply(),call() 创建对象的上下文

  - 为了解决原型包含引用值导致的继承问题

  - 问题:
    1. 必须在构造函数中定义方法，因此函数不能重用
    2. 子类也不能访问父类原型上定义的方法，因此所有类型只能使用构造函数模式

```javascript
function SuperType() {
  this.colors = ["red", "blue", "green"];
}
function SubType() {
  // 继承 SuperType
  SuperType.call(this);
}
let instance1 = new SubType();
instance1.colors.push("black");
console.log(instance1.colors); // "red,blue,green,black"
let instance2 = new SubType();
console.log(instance2.colors); // "red,blue,green"

// 通过使用 call()（或 apply()）方法，SuperType构造函数在为 SubType 的实例创建的新对象的上下文中执行
```

### 组合继承
  > 综合了原型链和盗用构造函数,使用原型链继承原型上的属性和方法，而通过盗用构造函数继承实例属性

```javascript
function SuperType(name) {
  this.name = name;
  this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function () {
  console.log(this.name);
};
function SubType(name, age) {
  // 继承属性
  SuperType.call(this, name);
  this.age = age;
}
// 继承方法
SubType.prototype = new SuperType();
SubType.prototype.sayAge = function () {
  console.log(this.age);
};
let instance1 = new SubType("Nicholas", 29);
instance1.colors.push("black");
console.log(instance1.colors); // "red,blue,green,black"
instance1.sayName(); // "Nicholas";
instance1.sayAge(); // 29
```

> 组合继承弥补了原型链和盗用构造函数的不足，是 JavaScript 中使用最多的继承模式。

- 对象共享信息

  - 原型式继承 - 类似于原型模式 -- ECMAscript5 Object.create()

    > 不需要单独创建构造函数，但需要原型共享。

  - 寄生式继承 - 类似于寄生构造函数和工厂模式
    > 创建一个实现继承的函数，以某种方式增强对象，然后返回这个对象
    > 原型共享
    > 任何返回新对象的函数都可以在这里使用。
    > 注意 通过寄生式继承给对象添加函数会导致函数难以重用，与构造函数模式类似。

```javascript
// 原型式继承
let obj = { name: "xiaoming", age: 18, arr: [] };
let person = Object.create(obj);
let person1 = Object.create(obj);
person.arr.push("1");
console.log(person.arr); // ['1']
console.log(person1.arr); // ['1']

// 寄生式继承
function createAnother(original) {
  let clone = Object(original); // 通过调用函数创建一个新对象
  clone.sayHi = function () {
    // 以某种方式增强这个对象
    console.log("hi");
  };
  return clone; // 返回这个对象
}

let person = {
  name: "Nicholas",
  friends: ["Shelby", "Court", "Van"],
};
let anotherPerson = createAnother(person);
anotherPerson.sayHi(); // "hi"
```

- 组合继承效率问题 --- 父类构造函数始终调用两次:
  1. 创建子类原型
  2. 子类构造函数

```javascript
function SuperType(name) {
  this.name = name;
  this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function () {
  console.log(this.name);
};
function SubType(name, age) {
  SuperType.call(this, name); // 第二次调用 SuperType()
  this.age = age;
}
SubType.prototype = new SuperType(); // 第一次调用 SuperType()
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function () {
  console.log(this.age);
};
```

## 寄生式组合继承
  > 通过盗用构造函数继承属性，但使用混合式原型链继承方法
  > 使用寄生式继承来继承父类原型，然后将返回的新对象赋值给子类原型
  > 寄生式组合继承可以算是引用类型继承的最佳模式

```javascript
function inheritPrototype(subType, superType) {
  let prototype = Object(superType.prototype); // 创建对象
  prototype.constructor = subType; // 增强对象
  subType.prototype = prototype; // 赋值对象
}

function SuperType(name) {
  this.name = name;
  this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function () {
  console.log(this.name);
};
function SubType(name, age) {
  SuperType.call(this, name);
  this.age = age;
}
inheritPrototype(SubType, SuperType);
SubType.prototype.sayAge = function () {
  console.log(this.age);
};
```
