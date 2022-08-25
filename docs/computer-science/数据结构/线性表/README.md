# 概述

## 思维导图
  - 定义(linear List),逻辑结构
    - 值的注意特性
      - 数据元素同类型,有限,有序
    - 重要术语
      - 表长,空表
      - 表头,表尾
      - 前驱,后继
      - 数据元素的位序(从1开始)
  - 基本操作,运算
    - 创销,增删改查(所有数据结构适用的记忆思路)
    - 判空,判长,打印输出(还可自己根据实际需求增加其他基本操作)
    - 其他值的注意的点
      - 理解什么时候需要传入参数的引用"&" ！！！！
      - 函数命名要由可读性
  - 存储/物理结构
    - 顺序表(顺序存储)
    - 链表(链表存储)

### 定义
> 线性表是具有`相同`数据类型的n（n≥0）个`数据元素`的`有限序列`，其中n为`表长`，当n = 0时线
性表是一个`空表`。
> 
> 若用L命名线性表，则其一般表示为 L = (a1, a2, … , ai, ai+1, … , an)

- ai是线性表的"第i个"元素线性表中的位序(位序从1开始,数组下标从0开始)
- a1是表头元素,an是表尾元素
- 除第一个元素外，每个元素有且仅有一个直接前驱；除最后一个元素外，每个元素有且仅有一个直接后继

### 线性表的基本操作
- InitList(&L)：初始化表。构造一个空的线性表L，分配内存空间。
- DestroyList(&L)：销毁操作。销毁线性表，并释放线性表L所占用的内存空间。
- ListInsert(&L,i,e)：插入操作。在表L中的第i个位置上插入指定元素e。
- ListDelete(&L,i,&e)：删除操作。删除表L中第i个位置的元素，并用e返回删除元素的值。
- LocateElem(L,e)：按值查找操作。在表L中查找具有给定关键字值的元素。
- GetElem(L,i)：按位查找操作。获取表L中第i个位置的元素的值。
- 其他常用操作：
  - Length(L)：求表长。返回线性表L的长度，即L中数据元素的个数。
  - PrintList(L)：输出操作。按前后顺序输出线性表L的所有元素值。
  - Empty(L)：判空操作。若L为空表，则返回true，否则返回false。


#### 顺序表


- 思维导图
  - 存储结构
    - 逻辑上相邻的数据元素物理上也相邻
  - 实现方式
    - 静态分配
      - 使用"静态数组"实现
      - 大小一旦确定就无法改变
    - 动态分配
      - 使用"动态数组"实现
      - L.data = (ElemType *)malloc(sizeof(ElemType) * size)
      - 顺序表存满时,可再用malloc动态拓展顺序表的最大容量
      - 需要将数据元素复制到新的存储区域,并用free函数释放原区域
    - 特点
      - 随机访问
        - 能在O(1)时间内找到第i个元素
        - 存储密度高
        - 拓展容量不方便
        - 插入,删除数据元素不方便

- 定义
  > 用`顺序存储`的方式实现线性表

  - 顺序存储
    > 把`逻辑上相邻`的元素存储在`物理位置上也相邻`的存储单元中,元素之间的关系由存储单元的邻接关系来体现

``` c
typedef struct{
  int num; //号数
  int people; //人数
} Customer;
```

  - 静态分配
    ``` c
    #define MaxSize 10 // 定义最大长度
    typedef struct{
      ElemType data[MaxSize]; // 用静态的"数组"存放数据元素
      int length; // 顺序表的当前长度
    }SqList; // 顺序表的类型定义(静态分配方式)
    ```

    
    ``` c
    #include <stdio.h>
    #define MaxSize 10 // 定义最大长度
    typedef struct{ 
      int data[MaxSize]; // 用静态的"数组"存放数据元素
      int length; // 顺序表的当前长度
    }SqList; // 顺序表的类型定义

    // 基本操作-初始化一个顺序表
    void InitList(SqList &L){
      for(int i=0;i<MaxSize;i++){
        L.data[i] = 0; // 将所有数据元素设置为默认初始值
      }
      L.length =0; // 顺序表初始长度为0
    }

    int main(){
      SqList L; // 声明一个顺序表
      InitList(L); // 初始化顺序表
      return 0;
    }
    ```

    - 如果"数组"存满了怎么办？
      > 顺序表的表长刚开始确定后就无法更改(存储空间是静态的)

  - 动态分配
    ``` c
    #define InitSize 10 // 顺序表的初始长度
    typedef struct{
      ElemType *data; // 指示动态分配数组的指针
      int MaxSize; // 顺序表的最大容量
      int length; // 顺序表的当前长度
    } SeqList; // 顺序表的类型定义(动态分配方式)
    ```

    - key:动态申请和释放内存空间
    - C -- malloc,free函数
      - L.data = (ElemType *) malloc(sizeof(ElemType) * InitSize);
      - malloc:返回一个指针,需要强制转型为你定义的数据源
      - InitSize:指明要分配多大的连续内存空间
    - C++
      - new,delete 关键字

    ``` c
    #include <stdlib.h>
    #define InitSize 10 // 顺序表的初始长度
    typedef struct{
      int *data; // 指示动态分配数组的指针
      int MaxSize; // 顺序表的最大容量
      int length; // 顺序表的当前长度
    } SeqList; // 顺序表的类型定义(动态分配方式)

    void InitList(SeqList &L){
      // 用malloc 函数申请一片连续的存储空间
      L.data = (int *)malloc(InitSize*sizeof(int));
      L.length = 0;
      L.MaxSize = InitSize;
    }

    // 增加动态数组的长度
    void IncreaseSize(SeqList &L,int len){
      int *p = L.data;
      L.data = (int *)malloc((L.MaxSize+len)*sizeof(int));
      for(int i=0;i<L.length;i++){
        L.data[i] = p[i]; // 将数据复制到新区域  // 时间开销大
      }
      L.MaxSize = L.MaxSize+len; // 顺序表最大长度增加 len
      free(p) // 释放原来的内存空间
    }
    
    int main(){
      SeqList L; // 声明一个顺序表
      InitList(L); // 初始化顺序表
      // ...
      IncreaseSize(L,5);
      return 0;
    }
    ```

- 特点
  - 随机访问,能在O(1)时间内找到第i个元素
  - 存储密度高,每个节点只存储数据元素
  - 拓展容量不方便(即便采用动态分配的方式实现,拓展长度的时间复杂度也比较高)
  - 插入,删除操作不方便,需要移动大量元素