/*
 * @File Name: recursion.js
 * @Description: 递归
 * @Author: oDen7
 * @LastEditors: oDen7
 * @LastEditTime: 2021-04-28 17:27:23
 */

import {
    createH1_Element,
    createP_Element
} from "./tools";

/*
    助记:
    假设你在祖母的阁楼中翻箱倒柜，发现了一个上锁的神秘手提箱。
    祖母告诉你，钥匙很可能在下面这个盒子里。
    这个盒子里有盒子，而盒子里的盒子又有盒子。钥匙就在某个盒子中。为找到钥匙，你将使
    用什么算法？

    // 循环
    第一种:  
    (1) 创建一个要查找的盒子堆。
    (2) 从盒子堆取出一个盒子，在里面找。
    (3) 如果找到的是盒子，就将其加入盒子堆中，以便以后再查找。
    (4) 如果找到钥匙，则大功告成！
    (5) 回到第二步。
    
    // 递归
    第二种: 
    (1) 检查盒子中的每样东西。
    (2) 如果是盒子，就回到第一步。
    (3) 如果是钥匙，就大功告成！

    Leigh Caldwell:
    “如果使用循环，程序的性能可能更高；如果使用递归，程序可能更容易理解。如何选择要看什么对你来说更重要。”

    每个递归函数都有两部分：
    基线条件（base case）和递归条件（recursive case）。
    递归条件指的是函数调用自己.
    基线条件则指的是函数不再调用自己，从而避免形成无限循环。
*/

const factorial = (val) => {
    if (val === 1) { // 基线条件
        return 1;
    } else {
        return val * factorial(val - 1) // 问题分解
    }
}

export const recursion = () => {
    const recursion = document.createElement("recursion");
    recursion.appendChild(createH1_Element(`递归`));
    console.time("recursion");
    let newArr = `斐波那契:${factorial(5)}`
    console.timeEnd("recursion");
    recursion.appendChild(createP_Element(newArr));
    return recursion;
}