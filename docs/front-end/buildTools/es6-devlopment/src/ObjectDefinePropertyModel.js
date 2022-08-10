/*
 * @File Name: ObjectDefinePropertyModel.js
 * @Description: Object.defineProperty实现数据双向绑定
 * @Author: oDen7
 * @LastEditors: oDen7
 * @LastEditTime: 2021-04-27 19:10:04
 */

// 双向数据绑定
const obj_target = {
    _name: ""
};

// proxy 处理方法   
(Object || Reflect).defineProperty(obj_target, 'name', {
    set: function (value) {
        this._name = value;
        renderOutputText();
    },
    get: function () {
        return this._name;
    },
    configurable: true
});

// 渲染输出节点
const renderOutputDom = () => {
    let dom = document.createElement("div");
    dom.style.marginTop = "10px";
    dom.id = "output";
    dom.innerText = obj_target.name;
    return dom;
}

// 重绘输出文本
const renderOutputText = () => {
    const output = document.getElementById("output");
    output.innerText = obj_target.name;
}

// 渲染 input 表单
const inputDataBind = (app) => {
    const input = document.createElement("input");
    input.type = "text";
    input.value = obj_target.name;
    input.oninput = (e) => {
        setTimeout(() => {
            obj_target.name = input.value;
        }, 50)
    }
    app.append(input);
}

// proxy数据双向绑定页面
export const createElement = (fun = renderOutputDom) => {
    const proxy_Model = document.createElement("ObjectDefineProperty_Model");
    proxy_Model.id = "ObjectDefineProperty_Model";
    const title = document.createElement("h1");
    title.innerText = "数据双向数据绑定--Object.defineProperty";
    proxy_Model.append(title);
    inputDataBind(proxy_Model);
    if (fun) {
        proxy_Model.append(fun());
    }
    return proxy_Model;
}