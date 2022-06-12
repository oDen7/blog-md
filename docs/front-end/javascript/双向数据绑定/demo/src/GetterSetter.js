/*
 * @File Name: 
 * @Description: 
 * @Author: oDen7
 * @LastEditors: oDen7
 * @LastEditTime: 2021-11-12 21:25:13
 */

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

function extendAttr() {
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
}



const renderOutputDom = () => {
    let dom = document.createElement("div");
    dom.style.marginTop = "10px";
    dom.id = "output";

    let createP = (val) => {
        let p = document.createElement("p");
        p.innerHTML = val;
        return p;
    }
    let getterSetter = new GetterSetter();
    console.log(getterSetter.val);
    dom.append(createP(getterSetter.val))
    getterSetter.val = 2;
    dom.append(createP(getterSetter.val))
    getterSetter.val = 3;
    dom.append(createP(getterSetter.val))
    console.log(getterSetter.getValLists());
    dom.append(createP(getterSetter.getValLists()))
    return dom;
}

export const createElement = (fun = renderOutputDom) => {
    const GetterSetter = document.createElement("GetterSetter");
    GetterSetter.id = "Getter/Setter";
    const title = document.createElement("h1");
    title.innerText = "自定义Getter/Setter";
    GetterSetter.append(title);
    if (fun) {
        GetterSetter.append(fun());
    }
    extendAttr();
    return GetterSetter;
}