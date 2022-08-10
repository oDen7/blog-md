/*
 * @File Name: index.js
 * @Description: 首页
 * @Author: oDen7
 * @LastEditors: oDen7
 * @LastEditTime: 2021-04-27 19:05:41
 */

// 菜单列表
const menuLists = [{
        id: 1,
        name: "数据双向数据绑定--proxy",
        route: "proxy_Model",
        component: import("./proxyModel").then(module => module.createElement())
    },
    {
        id: 2,
        name: "数据双向数据绑定--Object.defineProperty",
        route: "ObjectDefineProperty_Model",
        component: import("./ObjectDefinePropertyModel").then(module => module.createElement())
    },
]

// 判断节点是否为空 
const isElementNull = async (app, id, append) => {
    if (document.getElementById(`${id}`) === null) {
        app.append(await append());
    } else {
        document.getElementById(`${id}`).remove()
    }
}

// 首页
const index = () => {
    const app = document.getElementById("App");
    const ul = document.createElement("ul");
    ul.id = "menu";
    ul.style.display = "flex";
    ul.style.justifyContent = "flex-start";
    ul.style.listStyleType = "none";
    menuLists.forEach(item => {
        const li = document.createElement("li");
        li.id = item.id;
        li.style.marginLeft = "10px";
        li.style.cursor = "pointer";
        li.innerHTML = item.name;
        ul.append(li);
    })
    app.append(ul);
    ul.addEventListener("click", (e) => {
        app.childNodes.forEach(item => {
            if (item.id !== "menu") {
                app.removeChild(document.getElementById(`${item.id}`));
            }
        });
        menuLists.forEach(item => {
            if (Number(e.target.id) === item.id && item.route) {
                isElementNull(app, item.route, async () => await item.component);
            }
        })
    })
}
index();