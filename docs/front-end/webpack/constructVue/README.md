#  如何使用 webpack 自定义构建一个 vue 项目？

### 流程
1. npm init -y // 构建一个npm项目
2. npm install webpack webpack-cli --save-dev
3. 创建 src目录 编写 index.html 和 main.js 并在根目录下创建 webpack.config.js
4. npm install html-webpack-plugin --save-dev  提供将main.js注入到index.html的能力
5. 编写 webpack.config.js 文件
    -  module.exports = { entry:"入口文件", output:{path:"输出文件夹地址", filename:"导出的文件名"}}
    -  require("html-webpack-plugin")
        ``` javascript 
            module.exports = {
                plugins:[new HtmlWebpackPlugin({
                    template:"src下的入口html",
                    title:"指定打包后的html title"
                })]
            }
        ``` 
        ``` html
            <!-- 入口html文件需要在head中增加title标签 --> 
            <title>
                <%= htmlWebpackPlugin.options.title %>
            </title>
        ```
    - 添加处理js文件的能力
        - npm install babel-loader @babel/core @babel/preset-env webpack
        - ``` javascript
            module.exports = {
                 rules: [{
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }]
            },
           ```
    - 提供处理vue的能力
        - npm install vue vue-loader css-loader vue-template-compiler
        - 在webpack.config.js 中加入 VueLoaderPlugin插件 和 支持.vue文件的loader
            ``` javascript
                const VueLoaderPlugin = require('vue-loader/lib/plugin');
                module.exports = {
                    plugins:[
                        new VueLoaderPlugin();
                    ]
                    module:{
                        rules:[{
                            test: /\.vue$/,
                            loader: 'vue-loader'
                        }]
                    }
                }
            ```
    - 提供处理less的能力
        - npm install less less-loader css-loader
        - 在webpack.config.js 中加入 支持less文件的loader
           ``` javascript 
                module.exports = {
                    module:{
                        rules:[{
                            test: /\.less$/,
                            use: [
                                'vue-style-loader', // 类似于 style-loader
                                'css-loader',
                                'less-loader'
                            ]
                        }]
                    }
                }
            ```
    - 添加 样式抽离 插件 (优化用)
        - npm install mini-css-extract-plugin --save-dev
        ``` javascript
            const MiniCssExtractPlugin = require('mini-css-extract-plugin');
            module.exports = {
                module:{
                    rules:[{
                        test: /\.less$/,
                        use: [
                            MiniCssExtractPlugin.loader, // 提供 style 的提取
                            'css-loader',
                            'less-loader'
                        ]
                    }]
                }
                plugins:[
                    new MiniCssExtractPlugin()
                ]
            }
        ```

    - 添加 热更新 
        - npm install webpack-dev-server --save-dev
        ``` javascript
            const HotModuleReplacementPlugin = require("webpack/lib/HotModuleReplacementPlugin");
            module.exports = {
                devServer: {
                    host: 'localhost', //主机地址，默认是localhost
                    port: '8080', //端口号，默认8080
                    open: true, //自动打开页面
                    hot: true //开启热更新
                },
                plugins:[
                    new HotModuleReplacementPlugin()
                ]
            }
        ``` 
6. 至此 一个简单的vue环境便搭建成功