// const webpack = require("webpack");
// const CompressionWebpackPlugin = require('compression-webpack-plugin');
// const productionGzipExtensions = ['js', 'css'];
// require("babel-polyfill");
module.exports = {
    runtimeCompiler: true,
    // publicPath: './', //打包后的位置(如果不设置这个静态资源会报404)
    // // publicPath: process.env.NODE_ENV === 'production' ? 'http://47.92.237.225:8080/dist' : './',
    // outputDir: 'dist', //打包后的目录名称
    // assetsDir: 'static', //静态资源目录名称
    // productionSourceMap: false, //去掉打包的时候生成的map文件
    // lintOnSave: true,
    // filenameHashing: false,
    // devServer: {
    //     sockHost: 'http://47.92.237.225:1111/',
    //     disableHostCheck: true,
    //     host: '0.0.0.0', //不清楚主机和目的网络
    //     port: 1111, // 源地址端口，自行修改
    //     disableHostCheck: true,
    //     hotOnly: false,
    //     useLocalIp: false,
    //     proxy: {
    //         '/ser': {
    //             target: 'http://127.0.0.1:8080/', //跨域的域名
    //             ws: true, // 代理 websockets
    //             changeOrigin: true, //是否开启跨域
    //             pathRewrite: {
    //                 '^/ser': '/' // 重写地址
    //             }
    //         },
    //         headers: {
    //             'Access-Control-Allow-Origin': '*',
    //         }
    //     },
    // },
    // configureWebpack: {
    //     plugins: [
    //         // 配置jquery
    //         new webpack.ProvidePlugin({
    //             $: "jquery",
    //             jQuery: "jquery",
    //             "window.jQuery": "jquery",
    //             Popper: ["popper.js", "default"]
    //         }),
    //         new CompressionWebpackPlugin({
    //             asset: '[path].gz[query]',
    //             algorithm: 'gzip',
    //             test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'), //匹配文件名
    //             // test: /\.js$|\.html$|.\css/,
    //             threshold: 10240, //对超过10k的数据压缩
    //             minRatio: 0.8,
    //             deleteOriginalAssets: false //不删除源文件
    //         })
    //     ]
    // }
}