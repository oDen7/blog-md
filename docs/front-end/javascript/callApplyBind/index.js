let obj = {
    a: 3,
    b: 4
};

function Tool() {
    this.a = 1;
    this.b = 2;
}

Tool.prototype.setVal = function (a, b) {
    this.a = a;
    this.b = b;
}

Tool.prototype.getVal = function () {
    console.log(this.a, this.b);
}

Tool.prototype.updateVal = function () {
    this.a = this.a + 1;
    this.b = this.b + 1;
}

console.log("=======>tool");
let tool = new Tool();
tool.setVal.call(obj, obj.a, obj.b);
// 此方法相当于:
// setVal(obj,a,b){
//    obj.a = a;
//    obj.b = b;
// }
tool.getVal.apply(obj);
// 此方法相当于:
// getVal(){
//      console.log(obj.a,obj.b);
// }
let updateVal = tool.updateVal.bind(obj);
// 此方法相当于:
// let updateVal = function updateVal(obj){
//      obj.a = obj.a + 1;
//      obj.b = obj.b + 1;
// }
updateVal();
tool.getVal.call(obj);
// 此方法相当于:
// getVal(){
//      console.log(obj.a,obj.b);
// }
console.log(obj);

/*  
    let obj1 = {
        a: 8,
        b: 9
    };

    class Test {
        constructor() {
            this.a = 1;
            this.b = 2;
        }

        getVal() {
            console.log(this.a, this.b);
        }

        setVal(a, b) {
            this.a = a;
            this.b = b;
        }

        updateVal() {
            this.a = this.a + 1;
            this.b = this.b + 1;
        }
    }

    console.log("=======>test");
    let test = new Test()
    test.setVal.apply(obj1, [obj1.a, obj1.b]);
    test.getVal.apply(obj1);
    let updateVal1 = test.updateVal.bind(obj1);
    updateVal1();
    test.getVal.call(obj1);
    console.log(obj1);
*/


// 如何理解 call apply 呢
// 假设你有一个数据对象obj,但是只存放数据,还有一个工具库对象或者类,那我如何处理这个数据对象呢?
// 可以使用工具库实例化对象调用其内部方法通过 call apply进行绑定,两者差异在传参方式上,将this指向obj数据对象,来达到用工具库方法设置数据对象obj属性的目的
// 那如果 我不想马上就将新的值 更新 给这个数据对象怎么办？假设要处理很多逻辑
// 此时可以使用 bind 方法,将工具库的数据更新方法通过bind绑定赋值给变量 ,此时你拿到的是 工具库的更新数据方法,还没有进行调用的
// 持续等待一会儿
// 好了我需要调用数据更新方法了,直接调用变量()就可以了