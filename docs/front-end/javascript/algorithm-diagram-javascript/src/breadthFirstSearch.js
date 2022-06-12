/*
 * @File Name: breadthFirstSearch.js
 * @Description: 广度优先搜索（breadth-first search)
 * @Author: oDen7
 * @LastEditors: oDen7
 * @LastEditTime: 2021-04-28 17:27:44
 */
import {
    createP_Element,
    createH1_Element
} from "./tools";

/*
    助记:
    
    广度优先搜索（breadth-first search，BFS）:
        让你能够找出两样东西之间的最短距离，不过最短距离的含义有很多！
    
    最短路径问题（shorterst-path problem）:
        你经常要找出最短路径.这可能是前往朋友家的最短路径，也可能是国际象棋中把对方将死的最少步数。

    解决最短路径问题的算法被称为:广度优先搜索

    如何解决实际问题
        (1) 使用图来建立问题模型。
        (2) 使用广度优先搜索解决问题。

    广度优先搜索是一种用于图的查找算法，可帮助回答两类问题。
        (1) 从节点A出发，有前往节点B的路径吗？
        (2) 从节点A出发，前往节点B的哪条路径最短？

    实例: 
        (1) 解决第一类问题
        假设你经营着一个芒果农场，需要寻找芒果销售商，以便将芒果卖给他。在Facebook，你与芒果销售商有联系吗？
        为此，你可在朋友中查找。
        这种查找很简单。首先，创建一个朋友名单。
        然后，依次检查名单中的每个人，看看他是否是芒果销售商。
        假设你没有朋友是芒果销售商，那么你就必须在朋友的朋友中查找。
        检查名单中的每个人时，你都将其朋友加入名单。

        这样一来，你不仅在朋友中查找，还在朋友的朋友中查找。
        别忘了，你的目标是在你的人际关系网中找到一位芒果销售商。
        因此，如果Alice不是芒果销售商，就将其朋友也加入到名单中。
        这意味着你将在她的朋友、朋友的朋友等中查找。
        使用这种算法将搜遍你的整个人际关系网，直到找到芒果销售商。这就是广度优先搜索算法。
    
    查找最短路径:
        广度优先搜索可回答两类问题。
          (1) 从节点A出发，有前往节点B的路径吗？（在你的人际关系网中，有芒果销售商吗？）
          (2) 从节点A出发，前往节点B的哪条路径最短？（哪个芒果销售商与你的关系最近？）

        刚才你看到了如何回答第一类问题，下面来尝试回答第二类问题——谁是关系最近的芒果销售商。
        例如，朋友是一度关系，朋友的朋友是二度关系。

        在你看来，一度关系胜过二度关系，二度关系胜过三度关系，以此类推。
        因此，你应先在一度关系中搜索，确定其中没有芒果销售商后，才在二度关系中搜索。
        广度优先搜索就是这样做的！
        在广度优先搜索的执行过程中，搜索范围从起点开始逐渐向外延伸，即先检查一度关系，再检查二度关系。
        顺便问一句：将先检查Claire还是Anuj呢？
        Claire是一度关系，而Anuj是二度关系，因此将先检查Claire，后检查Anuj。
      
        //  注意，只有按添加顺序查找时，才能实现这样的目的。 // 


    工作流程:
        1.创建一个队列，用于存储要检查的人。
        2.从队列中弹出一个人。
        3.检查这个人是否是芒果销售商
        4.a.大功告成
          b.将这个人的所有邻居加入到队列
        5.返回到第二步
        6.如果队列为空,就说明你的人际关系网中没有芒果销售商

    运行时间:
        广度优先搜索的运行时间为O(人数 + 边数)，这通常写作O(V + E)，
        其中V为顶点（vertice）数，E为边数。
*/

const graph = {};
graph["you"] = ["alice", "bob", "claire"];
graph["bob"] = ["anuj", "peggy"];
graph["alice"] = ["peggy"];
graph["claire"] = ["thom", "jonney"];
graph["anuj"] = [];
graph["peggy"] = [];
graph["thom"] = [];
graph["jonney"] = [];

const person_is_seller = (str) => {
    // 数检查人的姓名是否以m结尾：如果是，他就是芒果销售商。
    if (str.charAt(str.length - 1) === "m") return true;
    return false;
}

const breadthFirstSearchFun = (name) => {
    let search_queue = []; // 创建一个队列(使用数组代替)
    search_queue.push(...graph[name]); // 将你的邻居都加入到这个搜索队列中
    let searched = []; // 这个数组用于记录检查过的人
    while (search_queue.length !== 0) { // 只要队列不为空
        let person = search_queue[0]; // 就取出其中的第一个人(将值取出)
        search_queue.shift(); // 再将取出的值弹出
        if (searched.indexOf(person) === -1) { // 仅当这个人没检查过时才检查
            if (person_is_seller(person)) { // 检查这个人是否是芒果销售商
                return `经销商是:${person}`; // 是芒果销售商 
            } else {
                //不是芒果销售商。将这个人的朋友都加入搜索队列
                search_queue.push(...graph[person]);
                searched.push(person);
            }
        }
    }
    return null; // 如果到达了这里，就说明队列中没人是芒果销售商

    /*
        这个算法将不断执行，直到满足以下条件之一：
            (1) 找到一位芒果销售商；
            (2) 队列变成空的，这意味着你的人际关系网中没有芒果销售商。

        Peggy既是Alice的朋友又是Bob的朋友，因此她将被加入队列两次：
            一次是在添加Alice的朋友时，
            另一次是在添加Bob的朋友时。
        因此，搜索队列将包含两个Peggy。

        但你只需检查Peggy一次，看她是不是芒果销售商。如果你检查两次，就做了无用功。
        因此，检查完一个人后，应将其标记为已检查，且不再检查他。

        如果不这样做，就可能会导致无限循环。
            原因:
                1.一开始，搜索队列包含你的所有邻居。
                2.现在你检查Peggy。她不是芒果销售商，因此你将其所有邻居都加入搜索队列。
                3.接下来，你检查自己。你不是芒果销售商，因此你将你的所有邻居都加入搜索队列。
                4.以此类推。这将形成无限循环，因为搜索队列将在包含你和包含Peggy之间反复切换。
        
        检查一个人之前，要确认之前没检查过他，这很重要。为此，你可使用一个列表来记录检查过的人。
    */
}

const returnGraph = () => {
    let graphDom = document.createElement("graph");
    let title = document.createElement("p");
    title.innerText = "图";
    graphDom.appendChild(title);
    let ul = document.createElement("ul");
    for (let key in graph) {
        let li = document.createElement("li");
        let title = document.createElement("p");
        title.innerText = key;
        li.appendChild(title);
        if (graph[key].length > 0) {
            graph[key].forEach(item => {
                let childTitle = document.createElement("p");
                childTitle.style.marginLeft = "15px";
                childTitle.innerText = item;
                li.appendChild(childTitle);
            });
        }
        ul.appendChild(li)
    }
    graphDom.appendChild(ul);
    return graphDom;
}

export const breadthFirstSearch = () => {
    const breadthFirstSearch = document.createElement("breadthFirstSearch");
    breadthFirstSearch.appendChild(createH1_Element(`广度优先搜索`));
    console.time("breadthFirstSearch");
    let newArr = `${breadthFirstSearchFun("you")}`;
    console.timeEnd("breadthFirstSearch");
    breadthFirstSearch.appendChild(returnGraph());
    breadthFirstSearch.appendChild(createP_Element(newArr));
    return breadthFirstSearch;
}