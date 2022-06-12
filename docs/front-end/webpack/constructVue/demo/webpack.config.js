const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HotModuleReplacementPlugin = require("webpack/lib/HotModuleReplacementPlugin");

module.exports = {
    mode: "development",
    entry: "./src/main.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        host: 'localhost', //主机地址，默认是localhost
        port: '8080', //端口号，默认8080
        open: true, //自动打开页面
        hot: true //开启热更新
    },
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            },

        }, {
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.less$/,
            use: [
                MiniCssExtractPlugin.loader,
                // 'vue-style-loader',
                'css-loader',
                'less-loader'
            ]
        }, ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin(),
        new HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'hello world',
            template: 'src/index.html'
        })
    ]
}