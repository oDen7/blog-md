# 概述

## 数据结构
1. 如何用程序代码把现实世界的问题信息化
2. 如何用计算机高效地处理这些信息从而创造价值


## 数据结构思维导图
- 基本概念
  - 数据
  - 数据元素,数据项
  - 数据对象,数据结构
  - 数据类型,抽象数据类型(ADT)
- 三要素
  - 逻辑结构
    - 线性结构
    - 集合,非线性结构
    - 树形结构,非线性结构
    - 图结构(网状结构),非线性结构
  - 物理结构(存储结构)
    - 顺序存储
    - 链式存储,非顺序存储
    - 索引存储,非顺序存储
    - 散列存储,非顺序存储
  - 数据的运算


#### 数据
> 信息的载体,能输入到计算机并被计算机程序识别和处理的符号的集合.

#### 数据元素,数据项
> `数据元素`是数据的基本单位,通常作为一个整体进行考虑和处理
> 
> 一个数据元素可由若干`数据项`组成,`数据项`是构成数组元素的不可分割的最小单位.

#### 数据结构,数据对象
> `数据结构`是相互之间存在一种或多种特定关系的数据元素的集合
> 
> `数据对象`是具有相同性质的`数据元素的集合`,是数据的一个子集

#### 逻辑结构
1. 集合
   > 各个元素同属一个集合,别无其它关系
2. 线性结构
   > 数据元素之间是一对一的关系
   > 
   > 除了第一个元素,所有元素都有唯一前驱
   > 
   > 除了最后一个元素,所有元素都有唯一后继
3. 树形结构
   > 数据元素之间是一对多的关系
4. 图状结构(网状结构)
   > 数据元素之间是多对多的关系

#### 物理结构(存储结构)
1. 顺序存储
   > 把`逻辑上相邻的元素存储在物理位置上也相邻的存储单元中`,元素之间的关系由存储单元的邻接关系来体现
2. 链式存储(非顺序存储)
   > `逻辑上相邻的元素在物理位置上可以不相邻`,借助指示元素存储地址的指针来表示元素之间的逻辑关系
3. 索引存储(非顺序存储)
   > 在存储元素信息的同时,还建立附加的索引表.
   >
   > 索引表中的每项成为索引项,索引项的一般形式是(关键字,地址)
4. 散列存储(非顺序存储)
   > 根据元素的关键字直接计算出该元素的存储地址,又称`hash存储`

- 小节
  1. 若采用`顺序存储`,则各个数据元素在物理上必须是`连续的`;若采用`非顺序存储`,则各个数据元素在物理上可以是`离散的`
  2. 数据的`存储结构`会`影响存储空间分配的方便程度`
  3. 数据的`存储结构`会`影响对数据元素的速度`

#### 数据的运算
> 施加在数据上的运算包括运算的定义和实现.
> 
> `运算的定义`是`针对逻辑结构`的,指出运算的功能
> 
> `运算的实现`是`针对存储结构`的,指出运算的具体操作步骤


#### 数据类型,抽象数据类型

- 数据类型是一个值的集合和定义在此集合上的一组操作的总称.
  1. 原子类型
    > 其值不可再分的数据类型
    >
    > boolean,int
  2. 结构类型
    > 其值可以再分解为若干成分(分量)的数据类型
    > 
    > struct

- 抽象数据类型(Abstract Data Type,ADT)
  > 是抽象数据组织及与之相关的操作


  > ADT用数学化的语言定义数据的逻辑结构、定义运算
  > 
  > 与具体实现无关.


#### 数据结构思维导图
  - 数据
    - 数据对象
      - 数据元素
        - 数据项
        - 数据项
        - 数据项
    - 数据对象

## 算法

## 算法思维导图
- 什么是算法
  - 程序=数据结构+算法
    - 数据结构时要处理的信息
    - 算法是处理信息的步骤
- 算法的五种特性
  - 有穷性
    - 有穷时间内能执行完
      - 算法是有穷的
      - 程序可以是无穷的
  - 确定性
    - 相同输入只会产生相同输出
  - 可行性
    - 可以用已有的基本操作实现算法
  - 输入
    - 丢给算法处理的数据
  - 输出
    - 算法处理的结构
- "好"算法的特质
  - 正确性
    - 能正确解决问题
  - 可读性
    - 对算法的描述要让其他人也看得懂
  - 健壮性
    - 算法能处理一些异常情况
  - 高效率与低存储量需求
    - 即算法执行省时,省内存
    - 时间复杂度低,空间复杂度低

### 什么是算法
> 程序 = 数据结构 + 算法
1. 数据结构
  > 如何把显示世界的问题信息化,将信息存进计算机
  >
  > 同时还要实现对数据结构的基本操作
2. 算法
  > 如何处理这些信息,以解决实际问题 

### 算法的特性
1. 有穷性
   > 必须总在执行有穷步之后结束,且每一步都可在有穷时间内完成
   > 
   > `算法`必须是`有穷`的,而`程序`可以是`无穷`的.
2. 确定性
   > 每条执行必须有确切的含义,`相同的输入`只能得出`相同的输出`
3. 可行性
   > 操作都可以通过已经实现的`基本运算执行有限次`来实现

   - 输入
    > `有零个或多个输入`，这些输入取自于某个特定的对象的集合
   - 输出
    > `有一个或多个输出`，这些输出是与输入有着某种特定关系的量


### "好"算法的特质 
1. 确定性
  > 算法应能正确地解决求解问题
2. 可读性
  > 方便帮助人们理解
  > 
  > 注：算法可以用伪代码描述，甚至用文字描述，重要的是要“无歧义”地描述出解决问题的步骤
3. 健壮性
  > 输入非法数据时，算法能适当地做出反应或进行处理，而不会产生莫名其妙的输出结果。
4. `高效率`与`低存储量需求`
  - 高效率
    > 执行速度快
    > 
    > 时间复杂度低
  - 低存储量需求
    > 不费内存
    >
    > 空间复杂度低


### 算法效率的度量

#### 时间复杂度
> 时间开销与问题规模n之间的关系


- `事后统计`存在的问题
  - 和机器性能有关
  - 和编程语言有关,与高级的语言执行效率越低
  - 和编译程序产生的机器指令质量有关
  - 有些算法是不能事后在统计的

> `事前预估`算法`时间开销T(n)`与`问题规模 n `的关系(T 表示 “time”)
> 
> T = T(n)


``` c
// 逐步递增
void loveYou(int n){ // n 为问题规模
  int i=1; // 1
  while(i<=n){ //2
    i++; // 3
    printf("I Love You $d\n",i); // 4
  }
  printf("I Love You More Than %d\n",n); // 5
}

int main(){
  loveYou(3000);
}
```

- 时间开销与问题规模n的关系:
  >T(n) = 3n+3 = O(n)

- 语句频度
  - 1. 1次
  - 2. 3001次
  - 3-4. 3000次
  - 5. 1次
> T(3000) = 1+3001+2*3000+1

- 是否可以忽略表达式某些部分?
  > 只考虑最高阶数,用大O记数法表示
  >
  > 注:加上低阶与去掉低阶算出的时间开销表达式差异不大

  - 大O
    > 表示"同阶",同等数量级.
    >
    > 即:n趋于无限时,二者之比为常数
    
    - 加法规则
      > 多项相加,只保留最高阶的项,且系数变为1

    - 乘法规则
      > 多项相乘,都保留

    - 数量级比较 (重点)
      > ![](https://raw.githubusercontent.com/oDen7/blog-imgUrl/main/kaoyan/%E5%A4%A7O%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%85%B3%E7%B3%BB.jpeg)
      > 
      > 常对幂指阶
      > ![](https://raw.githubusercontent.com/oDen7/blog-imgUrl/main/kaoyan/%E6%97%B6%E9%97%B4%E5%A4%8D%E6%9D%82%E5%BA%A6.jpeg)

- 如果有好几千行代码,需要一行一行数嘛？
> 顺序代码的执行只会影响常数项,可以忽略
> 
> 只需挑循环中的`一个基本操作`分析它的执行次数与n的关系即可
> 
> 如果有多层嵌套循环,只需关注最深层循环循环了几次

``` c
// 嵌套循环
void loveYou(int n) {
  int i=1;
  while(i<=n){ // 外层循环执行n次
    i++;
    printf("I Love You $d\n",i); 
    for(int j=1;j<=n;j++){ // 嵌套两层循环
      printf("I am Iron Man\n"); // 内层循环共执行n的二次方次
    }
  }
  printf("I Love You More Than %d\n",n);
}
```
- 时间开销与问题规模n的关系:
  >T(n) = O(n) + O(n^2) = O(n^2)


``` c
// 指数递增
void loveYou(int n){
  int i = 1;
  while(i<=n){
    i=i*2; // 每次翻倍
    printf("I Love You %d\n",i);
  }
  printf("I Love You More Than %d\n",n);
}
```

- 时间开销与问题规模n的关系:
  > 设最深层循环的语句频度(总共循环的次数)为x,则
  > 
  > 由循环条件可知,循环结束时刚好满足2^x > n
  > 
  > x = logeN/loge2 + 1
  > 
  > T(n) = O(x) = O(logeN/loge2)

``` c
// 搜索数字
void loveYou(int flag[],int n){
  printf("I am Iron Man\n");
  for(int j=1;j<n;j++){ // 从第一个元素开始查找
    if(flag[i] == n){ // 找到元素n
      printf("I am Iron Man\n"); // 内层循环共执行n的二次方次
      break; // 找到后立即跳出循环
    }
    
  }
}

int flag[n] = {1...n}; // 乱序存放1~n
loveYou(flag,n);
```

- 时间开销与问题规模n的关系:
  - 最好情况下,元素n在第一个位置
    > 最好时间复杂度:T(n) = O(1)
  - 最坏情况下,元素n在最后一个位置
    > 最坏时间复杂度:T(n) = O(n)
  - 平均情况
    > 假设元素n在任意一个位置的概率相同为1/n
    >
    > 平均时间复杂度:T(n) = O(n)

- 最坏时间复杂度:
  > 最坏情况下算法的时间复杂度

- 平均时间复杂度:
  > `所有输入实例等概率出现`的情况下,算法的期望运行时间
  
- 最好时间复杂度:
  > 最好情况下算法的时间复杂度

> 只考虑平均和最坏的时间复杂度

#### 空间复杂度
> 空间开销(内存开销)与问题规模n之间的关系

- 程序运行时的内存需求
  - 程序代码
    > 大小固定,与问题规模无关
  - 数据
    > 局部变量i,参数n

> 无论问题规模如何变,算法运行所需的内存空间
> 
> 都是固定的常量,算法`空间复杂度`为
> 
> S(n) = O(1)
> 
> 注:S表示"space" T(n)
> 
> 算法`原地工作`,算法所需内存空间为常量

``` c 
void test(int n){
  int flag[n]; // 声明一个长度为n的数组
  int i;
  // .....此处省略很多代码
}
```
> 假设一个`int`变量占4B...
> 
> 则所需内存空间 = 4 + 4n + 4 = 4n + 8
> 
> `只需关注存储空间大小与问题规模相关的变量`
>  
> S(n) = O(n)

``` c 
void test(int n){
  int flag[n][n]; // 声明n*n的二维数组
  int i;
  // .....此处省略很多代码
}
```
> S(n) = O(n^2)


``` c 
void test(int n){
  int flag[n][n]; // 声明n*n的二维数组
  int other[n]; // 声明一个长度为n的一维数组
  int i;
  // .....此处省略很多代码
}
```
> S(n) = O(n^2) + O(n) + O(1) = O(n^2)
> 
> 适用于加法规则

- 函数调用带来的内存开销
> 空间复杂度 = 递归调用的深度
  
``` c
// 递归
void loveYou(int n){
  int a,b,c;
  if(n>1){
    loveYou(n-1);
  }
  printf("I Love You %d\n",n);
}
// 存储参数a,b,c为k
// 每层存储k字节
```

> S(n) = O(n)

``` c
// 递归
void loveYou(int n){
  int flag[n]; // 声明一个数组,与每层传入的n相关
  if(n>1){
    loveYou(n-1);
  }
  printf("I Love You %d\n",n);
}
// 存储参数n,flag[5]
// 存储参数n,flag[4]
// ...
// 存储参数n,flag[1]
```
> S(n) = O(n^2)