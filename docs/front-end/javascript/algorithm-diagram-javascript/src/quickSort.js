/*
 * @File Name: quickSort.js
 * @Description: 快速排序
 * @Author: oDen7
 * @LastEditors: oDen7
 * @LastEditTime: 2021-04-28 17:27:14
 */

import {
    createH1_Element,
    createP_Element
} from "./tools";

/*
    助记:
    
    分而治之:
        假设你是农场主，有一小块土地。
        你要将这块地均匀地分成方块，且分出的方块要尽可能大。
        如何将一块地均匀地分成方块，并确保分出的方块是最大的呢？
        使用D&C策略！D&C算法是递归的。
        使用D&C解决问题的过程包括两个步骤:
            (1) 找出基线条件，这种条件必须尽可能简单。
            (2) 不断将问题分解（或者说缩小规模），直到符合基线条件。

        例子:
            给定一个数组:[2,4,6]
            你需要将这些数字相加，并返回结果。使用循环很容易完成这种任务。

            const sum = (arr)=>{
                let total = 0;
                arr.forEach(item=>{
                    total += item;
                })
                return total;
            }

            第一步:最简单的数组什么样呢？请想想这个问题，再接着往下读。
                  如果数组不包含任何元素或只包含一个元素，计算总和将非常容易。

                  基线条件: [] 0 不包含任何元素=总和等于0
                          [7] 1 只包含一个元素=总和等于7

                  因此这就是基线条件。

            第二步:每次递归调用都必须离空数组更近一步。
                  如何缩小问题的规模呢？下面是一种办法。

                  sum([2,4,6]) = 12

                  与下面等效:
                  2+sum([4,6]) = 2 + 10 = 12
                  
        这两个版本的结果都为12，但在第二个版本中，给函数sum传递的数组更短。
        换言之，这缩小了问题的规模！


        快速排序:
            像这样的数组不用排序:
                [] 空数组
                [20] 只包含一个元素的数组
            因此，基线条件为数组为空或只包含一个元素。
            在这种情况下，只需原样返回数组——根本就不用排序。

            我们来看看更长的数组。对包含两个元素的数组进行排序也很容易。
            [1,7] 检查第一个元素是否比第二个元素小，如果不比第二个小，就交换它们的位置

            包括三个元素呢？
            [33,15,10]
            别忘了，你要使用D&C，因此需要将数组分解，直到满足基线条件。
                下面介绍快速排序的工作原理。
                    首先，从数组中选择一个元素，这个元素被称为基准值（pivot）。
                    稍后再介绍如何选择合适的基准值。我们暂时将数组的第一个元素用作基准值。
                    接下来，找出比基准值小的元素以及比基准值大的元素。

                    小于33 [15,10]
                    基准值 33
                    大于33 []

                    这被称为分区（partitioning）。
                    
                    你现在有:
                        一个由所有小于基准值的数字组成的子数组；
                        基准值；
                        一个由所有大于基准值的数组组成的子数组。
                        
                    这里只是进行了分区，得到的两个子数组是无序的。
                    但如果这两个数组是有序的，对整个数组进行排序将非常容易。

                    [10,15] 33 []
                    如果子数组是有序的，就可以像下面这样合并得到一个有序的数组：
                    左边的数组 + 基准值 + 右边的数组。
                    在这里，就是[10, 15] + [33] + []，结果为有序数组[10, 15, 33]。

                    如何对子数组进行排序呢？
                    对于包含两个元素的数组（左边的子数组）以及空数组（右边的子数组），
                    快速排序知道如何将它们排序，因此只要对这两个子数组进行快速排序，再合并结果，就能得到一个有序数组！
*/

const arr = [10, 5, 2, 3];

const quickSortFun = (lists) => {
    if (lists.length < 2) return lists;
    let pivot = lists[0];
    let less = lists.slice(1, lists.length).filter(item => {
        return item <= pivot;
    })
    let greater = lists.slice(1, lists.length).filter(item => {
        return item > pivot;
    })
    return [
        ...quickSortFun(less),
        pivot,
        ...quickSortFun(greater)
    ]
}

export const quickSort = () => {
    const quickSort = document.createElement("quickSort");
    quickSort.appendChild(createH1_Element(`递归`));
    let oldarr = `原数组:[${arr.toString()}]`;
    quickSort.append(createP_Element(oldarr));
    console.time("quickSort");
    let newArr = `排序后:${quickSortFun(arr)}`
    console.timeEnd("quickSort");
    quickSort.appendChild(createP_Element(newArr));
    return quickSort;
}