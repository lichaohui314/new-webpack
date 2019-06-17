// let path = require('path');
// let HtmlWebpackPlugin = require("html-webpack-plugin");
// let MiniCssExtractPlugin = require("mini-css-extract-plugin");
// module.exports = {
//     mode: "production",// 生产环境:production  开发环境:development
//     entry: {
//         // 多入口配置成对象
//         index: "./src/index.js",
//         other: "./src/other.js"
//     },
//     devServer: {
//         port: 8081,             // 端口号
//         contentBase: "./dist",  // 运行目录
//         proxy: {},              // 配置跨域
//         compress: true,         // 开启gzip压缩
//         open: true              //自动开启浏览器
//     },
//     output: {
//         path: path.resolve(__dirname, "dist"),
//         filename: "[name].js"
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: "./public/index.html",
//             filename: "index.html",
//             chunks: ["index"]
//         }),
//         new HtmlWebpackPlugin({
//             template: "./public/other.html",
//             filename: "other.html",
//             chunks: ["other"]
//         }),
//         new MiniCssExtractPlugin({
//             filename: "main.css"
//         })
//     ],
//     module: {
//         rules: [
//             {
//                 test: /\.css$/,
//                 use: [MiniCssExtractPlugin.loader, "css-loader"]
//             },
//             {
//                 test: /\.js$/,
//                 use: "babel-loader"
//             }
//         ]
//     }
// };