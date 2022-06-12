/*
 * @File Name: binarySearch.js
 * @Description: 二分查找
 * @Author: oDen7
 * @LastEditors: oDen7
 * @LastEditTime: 2021-04-28 17:26:55
 */

import {
    createH1_Element,
    createP_Element
} from "./tools";
const arr = [1, 3, 5, 7, 9];


// 函数 binary_search 接受一个有序数组和一个元素。
/*
    助记:
    假设你要在字典中查找一个单词，而该字典包含240 000个单词，
    你认为每种查找最多需要多少步？
    如果要查找的单词位于字典末尾，使用简单查找将需要240 000步。使用二分查找时，每次
    排除一半单词，直到最后只剩下一个单词。

    性能:
    一般而言，对于包含n个元素的列表，用二分查找最多需要log2n步，而简单查找最多需要n步。
*/
const binarySearchFun = (lists, item) => {
    // low和high用于跟踪要在其中查找的列表部分
    let low = 0;
    let high = lists.length - 1;

    while (low < high) { // 只要范围没有缩小到只包含一个元素
        // 如果(low + high)不是偶数，向下取整
        let mid = Math.floor((low + high) / 2); // 就检查中间的元素
        let guess = lists[mid];
        if (guess === item) { // 找到了元素
            return mid;
        } else if (guess > item) { // 猜的数字大了
            high = mid - 1;
        } else { // 猜的数字小了
            low = mid + 1;
        }
    }
    return null; // 没有指定的元素
}

export const binarySearch = (app) => {
    const binarySearch = document.createElement("binarySearch");
    binarySearch.append(createH1_Element(`二分查找`));
    let oldarr = `原数组:[${arr.toString()}]`;
    binarySearch.append(createP_Element(oldarr));
    console.time("binarySearch");
    // 索引从0开始，第二个位置的索引为1
    let newArr = `查找:${arr[binarySearchFun(arr,5)]},索引下标:${binarySearchFun(arr,5)}`;
    console.timeEnd("binarySearch");
    console.time("binarySearch");
    // null表示空，它意味着没有找到指定的元素
    let newArr1 = `查找:${binarySearchFun(arr,-5) === null ? null : arr[binarySearchFun(arr,-5)]},索引下标:${binarySearchFun(arr,-5)}`;
    console.timeEnd("binarySearch");
    binarySearch.append(createP_Element(newArr));
    binarySearch.append(createP_Element(newArr1));
    return binarySearch;
}