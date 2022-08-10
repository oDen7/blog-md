/*
 * @File Name: proxyModel.js
 * @Description: proxy实现数据双向绑定
 * @Author: oDen7
 * @LastEditors: oDen7
 * @LastEditTime: 2021-04-27 19:11:40
 */

// proxy 对象
const proxy_target = {
    name: ""
}

// proxy 处理方法
const handler = {
    get: function (target, key) {
        return Reflect.get(target, key);
    },
    set: function (target, key, value) {
        Reflect.set(target, key, value);
        renderOutputText();
        return true;
    },
}

// 开启 proxy
const newProxy_target = new Proxy(proxy_target, handler);

// 渲染输出节点
const renderOutputDom = () => {
    let dom = document.createElement("div");
    dom.style.marginTop = "10px";
    dom.id = "output";
    dom.innerText = newProxy_target.name;
    return dom;
}

// 重绘输出文本
const renderOutputText = () => {
    const output = document.getElementById("output");
    output.innerText = newProxy_target.name;
}

// 渲染 input 表单
const inputDataBind = (app) => {
    const input = document.createElement("input");
    input.type = "text";
    input.value = newProxy_target.name;
    input.oninput = (e) => {
        setTimeout(() => {
            newProxy_target.name = input.value;
        }, 50)
    }
    app.append(input);
}

// proxy数据双向绑定页面
export const createElement = (fun = renderOutputDom) => {
    const proxy_Model = document.createElement("proxy_Model");
    proxy_Model.id = "proxy_Model";
    const title = document.createElement("h1");
    title.innerText = "数据双向数据绑定--proxy";
    proxy_Model.append(title);
    inputDataBind(proxy_Model);
    if (fun) {
        proxy_Model.append(fun());
    }
    return proxy_Model;
}