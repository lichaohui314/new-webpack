let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");
let { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
module.exports = {
    entry: {
        //多入口配置成对象
        index: "./src/index.js",
        other: "./src/other.js"
    },
    output: {
        // path: path.resolve(__dirname, "../dist"),
        filename: "[name].js"
    },
    plugins: [
        new BundleAnalyzerPlugin({}),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "index.html",
            chunks: ["index"]
        }),
        new HtmlWebpackPlugin({
            template: "./public/other.html",
            filename: "other.html",
            chunks: ["other"]
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader"
            }
        ]
    }
};