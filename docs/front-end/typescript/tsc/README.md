# typescript 编译

### 如何运行ts文件呢？
> - 编写ts文件需要用到typescript,无法直接运行,需要使用tsc将ts文件编译成js文件
>   - 使用 tsc -init 创建一个tsconfig.json,在里面更改相关配置
>   - 运行 tsc
>   - node index.js
>   - tsconfig.json相关资料:https://www.typescriptlang.org/tsconfig
> - 直接运行ts文件,使用npm全局安装 ts-node 执行
>   - 通过 npm init 初始化 package.json 
>   - 在package.json 添加 script命令
> - 注意: ts文件调用nodejs api需通过npm安装 @types/node

### 编写package.json script 
```javascript
"scripts": {
   "build": "tsc",
   "start:dev": "node ./dist/index.js",
   "start:prod": "ts-node index.ts"
}
```