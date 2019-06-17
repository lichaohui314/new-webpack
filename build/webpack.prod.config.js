//生产环境
let MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    optimization: {
        splitChunks: {
            // 分割公共代码块
            chunks: "all", //all async initial  async 只分割异步代码块  intial 分割同步代码块
            // minSize: 30000,  //最小分割的字节
            // minChunks: 1,  //最少分几块
            // maxAsyncRequests: 5, //异步最多分几块 import() 这种代码引入叫做异步
            // maxInitialRequests: 3,
            // automaticNameDelimiter: '~',
            // name: true,
            cacheGroups: {
                // 缓存组
                common: {
                    // 公共的模块
                    minSize: 0,
                    minChunks: 2,
                    priority: -20
                },
                vendor: {
                    //第三方模块
                    filename: "common.js", //改名
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10 //权重
                }
            }
        }
    },
    mode: "production",
    plugins: [
        new MiniCssExtractPlugin({
            filename: "main.css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            }
        ]
    }
};