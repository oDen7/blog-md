const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: 'bundle.js', // 生成的js 文件
        path: path.resolve(__dirname, 'dist'), // 打包生成的文件夹
        clean: true,
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080,
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html' })
    ]
}