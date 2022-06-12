# 概述

## 简介

- 类的构成

  1. 函数方法
  2. 实例方法
  3. 获取函数
  4. 设置函数
  5. 静态类方法

- 实例化

  - 使用 new 操作符实例化类并调用其函数 - new 操作符

    1. 在内存中创建一个新对象
    2. 这个新对象内部的[[Prototype]]指针被赋值为构造函数的 prototype 属性
    3. 构造函数内部的 this 被赋值为这个新对象（即 this 指向新对象）
    4. 执行构造函数内部的代码（给新对象添加属性）
    5. 果构造函数返回非空对象，则返回该对象；否则，返回刚创建的新对象

  - 类构造函数和构造函数的区别:
    1. 调用类构造函数必须用 new,普通构造函数如果不使用 new 调用,就用全局的 this（window）作为内部对象

- 类是一个特殊函数
  1. 使用 typeof 检测 返回 function
  2. 类有 prototype 属性 , constructor 返回 类本身
  3. 可以用 instanceof 检测对象与类构造函数，以确定这个对象是不是类的实例。
     - 类中的 constructor 方法 不当做 构造函数,instanceof 返回 false
     - 创建实例时直接将类构造函数当成普通构造函数来使用,instanceof 结果 会反转
  4. 类可以立即实例化

```javascript
// 使用 instanceof 检测对象与类构造函数
class Person {}
let p1 = new Person();
console.log(p1.constructor === Person); // true
console.log(p1 instanceof Person); // true
console.log(p1 instanceof Person.constructor); // false

let p2 = new Person.constructor();
console.log(p2.constructor === Person); // false
console.log(p2 instanceof Person); // false
console.log(p2 instanceof Person.constructor); // true

let p = new (class Foo {
  constructor(x) {
    console.log(x);
  }
})("bar"); // bar
console.log(p); // Foo {}
```

- 实例成员

  1. 通过 new 调用类标识符,会执行类构造函数
  2. 创建实例(this) 添加 "自有" 属性

- 原型方法
  > 类块中定义的方法
  > 方法定义在类构造函数中或者类块，但不能在类块中给原型添加原始值或对象作为成员数据

```javascript
const symbolKey = Symbol("symbolKey");
class Person {
  constructor() {
    // 添加到 this 的所有内容都会存在于不同的实例上
    this.locate = () => console.log("instance");
  }
  // 在类块中定义的所有内容都会定义在类的原型上
  locate() {
    console.log("prototype");
  }
  [symbolKey]() {
    console.log("invoked symbolKey");
  }
}
let p = new Person();
p.locate(); // instance
Person.prototype.locate(); // prototype

p[symbolKey](); // invoked symbolKey
```

- 访问器

```javascript
class Person {
  set name(newName) {
    this.name_ = newName;
  }
  get name() {
    return this.name_;
  }
}
let p = new Person();
p.name = "Jake";
console.log(p.name); // Jake
```

- 静态类方法
  > 在类上定义静态方法。用于执行不特定于实例的操作，也不要求存在类的实例。
  > 静态成员,this 引用类自身

```javascript
class Person {
  // 定义在类本身上
  static locate() {
    console.log("class", this);
  }
}
let p = new Person();
p.locate(); // class, class Person {}
```

- 非函数原型和类成员
  > 虽然类定义并不显式支持在原型或类上添加成员数据，但在类定义外部，可以手动添加

```javascript
class Person {
  sayName() {
    console.log(`${Person.greeting} ${this.name}`);
  }
}
// 在类上定义数据成员
Person.greeting = "My name is";
// 在原型上定义数据成员
Person.prototype.name = "Jake";
let p = new Person();
p.sayName(); // My name is Jake
```

- 迭代器与生成器方法
  > 类定义语法支持在原型和类本身上定义生成器方法

```javascript
class Person {
  // 在原型上定义生成器方法
  *createNicknameIterator() {
    yield "Jack";
    yield "Jake";
    yield "J-Dog";
  }
  // 在类上定义生成器方法
  static *createJobIterator() {
    yield "Butcher";
    yield "Baker";
    yield "Candlestick maker";
  }
}
let jobIter = Person.createJobIterator();
console.log(jobIter.next().value); // Butcher
console.log(jobIter.next().value); // Baker
console.log(jobIter.next().value); // Candlestick maker
let p = new Person();
let nicknameIter = p.createNicknameIterator();
console.log(nicknameIter.next().value); // Jack
console.log(nicknameIter.next().value); // Jake
console.log(nicknameIter.next().value); // J-Dog

class Person {
  constructor() {
    this.nicknames = ["Jack", "Jake", "J-Dog"];
  }
  [Symbol.iterator]() {
    return this.nicknames.entries();
  }
}
let p = new Person();
for (let [idx, nickname] of p) {
  console.log(nickname);
}
// Jack
// Jake
// J-Dog
```

- 继承 - extends

  > 可以继承任何拥有[[Construct]]和原型的对象
  > 可以继承一个类或普通构造函数

- 派生 - super()

  > 派生类的方法通过 super 关键字引用它们的原型
  > 只能在 类构造函数,实例方法和静态方法内部

  - 注意事项:
    1. super 只能在派生类构造函数和静态方法中使用
    2. 不能单独引用 super 关键字，只能调用构造函数，要么静态方法
    3. 调用 super()会调用父类构造函数，并将返回的实例赋值给 this
    4. super()的行为如同调用构造函数，如果需要给父类构造函数传参，则需要手动传入
    5. 如果没有定义类构造函数，在实例化派生类时会调用 super()，而且会传入所有传给派生类的参数
    6. 在类构造函数中，不能在调用 super()之前引用 this。
    7. 如果在派生类中显式定义了构造函数，则要么必须在其中调用 super()，要么必须在其中返回一个对象

```javascript
class Vehicle {
  constructor() {
    this.hasEngine = true;
  }
}
class Bus extends Vehicle {
  constructor() {
    // 不要在调用 super()之前引用 this，否则会抛出 ReferenceError
    super(); // 相当于 super.constructor()
    console.log(this instanceof Vehicle); // true
    console.log(this); // Bus { hasEngine: true }
  }
}
new Bus();

// 静态方法继承
class Vehicle {
  static identify() {
    console.log("vehicle");
  }
}
class Bus extends Vehicle {
  static identify() {
    super.identify();
  }
}
Bus.identify(); // vehicle
```

- 抽象基类

  > 需要继承但不需要被实例化
  > 可以通过 new.target 保存通过 new 关键字调用的类或函数,检测是不是抽象基类,以阻止抽象基类实例化
  > 抽象基类构造函数中进行检查派生类必须定义某个方法。因为原型方法在调用类构造函数之前就已经存在了，所以可以通过 this 关键字来检查相应的方法

- 继承内置类型

- 类混入
  - 混入模式
    > 可以通过在一个表达式中连缀多个混入元素来实现，这个表达式最终会解析为一个可以被继承的类
    > 如果 Person 类需要组合 A、B、C，则需要某种机制实现 B 继承 A，C 继承 B，而 Person 再继承 C，从而把 A、B、C 组合到这个超类中
  - 大多数 JavaScript 框架已经放弃混入模式,转向组合模式
  - 组合 胜过 继承

```javascript
class Vehicle {}
let FooMixin = (Superclass) =>
  class extends Superclass {
    foo() {
      console.log("foo");
    }
  };
let BarMixin = (Superclass) =>
  class extends Superclass {
    bar() {
      console.log("bar");
    }
  };
let BazMixin = (Superclass) =>
  class extends Superclass {
    baz() {
      console.log("baz");
    }
  };
class Bus extends FooMixin(BarMixin(BazMixin(Vehicle))) {}
let b = new Bus();
b.foo(); // foo
b.bar(); // bar
b.baz(); // baz

// 优化版
class Vehicle {}
let FooMixin = (Superclass) =>
  class extends Superclass {
    foo() {
      console.log("foo");
    }
  };
let BarMixin = (Superclass) =>
  class extends Superclass {
    bar() {
      console.log("bar");
    }
  };
let BazMixin = (Superclass) =>
  class extends Superclass {
    baz() {
      console.log("baz");
    }
  };
function mix(BaseClass, ...Mixins) {
  return Mixins.reduce(
    (accumulator, current) => current(accumulator),
    BaseClass
  );
}
class Bus extends mix(Vehicle, FooMixin, BarMixin, BazMixin) {}
let b = new Bus();
b.foo(); // foo
b.bar(); // bar
b.baz(); // baz
```
