#### react hooks 学习

#### 如何快速区分 hooks,组件和方法 
> hooks:方法名小写开头,使用了 react环境
> 组件:方法名大写开头,使用了 react环境
> 方法:纯逻辑操作,没使用 react环境

#### useReducer
> 创建一个发布订阅
> const [state,dispatch] = useReducer(reducer,initState)
> reducer 用于存放改变state的方法
> initState 存放数据
> state 用于获取方法
> dispatch 提交一个 行为触发 reducer中的方法

#### useContext
> 创建一个订阅者模式 
> createContext 创建管道   // const PIPE = createContext()
> Context.Provider 绑定发布的值 initState
> useContext 绑定管道 获取数据 // const {test} = useContext(PIPE)