/*
 * @File Name: tools.js
 * @Description: 工具库
 * @Author: oDen7
 * @LastEditors: oDen7
 * @LastEditTime: 2021-04-30 16:57:02
 */

export const createP_Element = (content) => {
    const text = document.createElement("p");
    text.innerText = content;
    return text
}

export const createH1_Element = (content) => {
    const text = document.createElement("h1");
    text.innerText = content;
    return text
}