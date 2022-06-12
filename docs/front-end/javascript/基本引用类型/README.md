# 概述

1. Date
2. RegExp
3. 原始值包装类型
    - Boolean
    - Number
    - String
4. 单例内置对象
    - Global
    - Math

# 集合引用类型
1. Object
2. Array
3. 定型数组
4. Map
    - 键值存储机制  可以用任何JavaScript数据类型作为键
    - 会顺序插入键值,并根据插入顺序进行遍历  可遍历
    - 如果 键值 传入 引用 就存 引用(即指向同一个堆空间), 如果是 具体值 就存 具体值
    - Object 和 Map 的区别
        1. 内存占用 - 不同浏览器下，但给定固定大小的内存，Map 大约可以比 Object 多存储 50%的键/值对
        2. 插入性能 - 涉及到大量插入用 map, Object 和 Map 中插入新键/值对的消耗大致相当，不过 Map 在所有浏览器中一般会稍微快一点儿
        3. 查找速度 - 涉及到大量查找用 object ,  Object 当成数组使用（比如使用连续整数作为属性），浏览器引擎可以优化，在内存中使用更高效
        4. 删除性能 - 涉及到大量删除用 map,删除比 插入 和 查找 更快
```javascript
    const obj = {a:1};
    let map = new Map();
    map.set("key",obj);
    obj.a = 2;
    console.log(obj);
    map.get("key");
```

5. WeakMap
    - 键值存储
    - 键只能存放对象引用,键对象的引用不存在时,会被垃圾回收  
    - 不能遍历 键
    - 使用场景
        1. 私有变量
        2. DOM节点元数据
``` javascript 
    const wm = new WeakMap();
    const container = { 
        key: {} 
    }; 
    wm.set(container.key, "val"); 

    wm.get(container.key);
    const fun =()=>{
        container.key = null;
    };
    // fun();
```
6. Set
    - Set可以用任何JavaScript数据类型作为值  使用全等进行比较
    - 用作值的对象和其他"集合"类型在自己的内容或属性被修改时也不会改变 --- 只存具体值
    - 顺序插入,顺序迭代
    - 注意事项:
        1. 某些 Set 操作是有关联性的，因此最好让实现的方法能支持处理任意多个集合实例
        2. Set 保留插入顺序，所有方法返回的集合必须保证顺序
        3. 尽可能高效地使用内存。扩展操作符的语法很简洁，但尽可能避免集合和数组间的相互转换能够节省对象初始化成本。
        4. 不要修改已有的集合实例。union(a, b)或 a.union(b)应该返回包含结果的新集合实例。
7. WeakSet
    - 类似于 weakMap , 但仅存 具体值(value) 
``` javascript 
    const wm = new WeakSet();
    const container = { 
        key: {} 
    }; 
    wm.add(container.key, "val"); 

    wm.has(container.key);
    const fun =()=>{
        container.key = null;
    };
    // fun();
    // wm.has(container.key);
```