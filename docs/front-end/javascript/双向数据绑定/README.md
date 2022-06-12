# 概述
> Object.DefineProperty 和 proxy 实现 双向数据绑定 原理
### Object.DefineProperty 
- 通过 get() set() 方法对 监听对象进行 读取/写入
    ``` javascript
    Object.defineProperty(listen_obj),key, {
        set: function (value) {
            this._name = value;
        },
        get: function () {
            return this._name;
        }
    });
    ```

    - Object.DefineProperty 中的属性:
        - Writable:true  // 属性可修改
        - Enumerable:true  // 属性可遍历
        - Configurable:true   // 属性可删除

    - 自定义 Getter/Setter
        ```javascript
            function GetterSetter() {
                let val = null;
                let valLists = [];

                Object.defineProperty(this, "val", {
                    get: function () {
                        return val;
                    },
                    set: function (value) {
                        val = value;
                        valLists.push(val);
                    }
                })

                this.getValLists = () => valLists;
            }
            
            let getterSetter = new GetterSetter();
            console.log(getterSetter.val);
            getterSetter.val = 2;
            getterSetter.val = 3;
            console.log(getterSetter.getValLists());
        ```

    - 属性继承
        - 原型对象上的属性会被共享
        - > 如果每个实例都有自己的新方法,会导致大量内存占用
        ```javascript
            function Person() {
                this.a = 1;
                this.b = 0;
            }

            Object.defineProperty(Person.prototype, 'b', {
                get() {
                    return this._b;
                },
                set(val) {
                    this._b = val;
                }
            })

            let test = new Person();
            let test1 = new Person();
            test.b = 10;
            console.log("test=========>");
            console.log(test.a, test.b);
            console.log("test1=========>");
            console.log(test1.a, test1.b);
        ```


