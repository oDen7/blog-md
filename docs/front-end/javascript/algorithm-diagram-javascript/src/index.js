/*
 * @File Name: index.js
 * @Description: 入口文件
 * @Author: oDen7
 * @LastEditors: oDen7
 * @LastEditTime: 2021-04-30 16:56:51
 */

import {
    binarySearch,
    selectionSort,
    recursion,
    quickSort,
    breadthFirstSearch,
    dijkstraSearch,
    greedy,
    dynamicProgramming
} from "./export";

const creataElement = () => {
    const app = document.getElementById("App");
    app.append(binarySearch());
    app.append(selectionSort());
    app.append(recursion());
    app.append(quickSort());
    app.append(breadthFirstSearch());
    app.append(dijkstraSearch());
    app.append(greedy());
    app.append(dynamicProgramming());
    document.body.append(app);
}

creataElement();