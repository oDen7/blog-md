/*
 * @File Name: selectionSort.js
 * @Description: 选择排序
 * @Author: oDen7
 * @LastEditors: oDen7
 * @LastEditTime: 2021-04-28 15:14:51
 */
import {
    createH1_Element,
    createP_Element
} from "./tools"

/*
    助记:
    假设你的计算机存储了很多乐曲。对于每个乐队，你都记录了其作品被播放的次数。
    你要将这个列表按播放次数从多到少的顺序排列，从而将你喜欢的乐队排序。该如何做呢？
        一种办法是遍历这个列表，找出作品播放次数最多的乐队，并将该乐队添加到一个新列表中。
        再次这样做，找出播放次数第二多的乐队。
        继续这样做，你将得到一个有序列表。

    下面从计算机科学的角度出发，看看这需要多长时间。别忘了，O(n)时间意味着查看列表中
    的每个元素一次。例如，对乐队列表进行简单查找时，意味着每个乐队都要查看一次。
    要找出播放次数最多的乐队，必须检查列表中的每个元素。正如你刚才看到的，这需要的时
    间为O(n)。因此对于这种时间为O(n)的操作，你需要执行n次。
    需要的总时间为 O(n × n)，即O(n2)。
    
    第一次需要检查n个元素，但随后检查的元素
    数依次为n  1, n – 2, …, 2和1。平均每次检查的元素数为1/2 × n，因此运行时间为O(n × 1/2 × n)。
    但大O表示法省略诸如1/2这样的常数（有关这方面的完整讨论，请参阅第4章），因此简单地写作O(n × n)或O(n2)。
    
    选择排序是一种灵巧的算法，但其速度不是很快。O(n2)
*/

const arr = [5, 3, 6, 2, 10];

// 找到数组中最小的值,返回其索引
const findSmallest = (arr) => {
    let smallest = arr[0]; // 存储最小的值
    let smallest_index = 0; // 存储最小的值的索引
    for (let i = 0, len = arr.length; i < len; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallest_index = i;
        }
    }
    return smallest_index;
}

// 排序
const selectionSortFun = (arr) => {
    let res = [];
    for (let i = 0, len = arr.length; i < len; i++) {
        let smallest = findSmallest(arr); // 找出数组中最小的元素，
        res.push(arr[smallest]); // 并将其加入到新数组中
        arr.splice(smallest, 1); // 删除当前最小的元素
    }
    return res;
}

export const selectionSort = () => {
    const selectionSort = document.createElement("selectionSort");
    selectionSort.appendChild(createH1_Element(`选择排序`));
    let oldArr = `原数组:[${arr.toString()}]`;
    selectionSort.appendChild(createP_Element(oldArr));
    console.time("selectionSort");
    let newArr = `排序后:[${selectionSortFun(arr)}]`;
    console.timeEnd("selectionSort");
    selectionSort.appendChild(createP_Element(newArr));
    return selectionSort;
}