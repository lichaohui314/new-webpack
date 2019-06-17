//开发环境
module.exports = {
    mode: "development",
    devServer: {
        port: 8081, //端口号
        contentBase: "./dist", //运行目录
        proxy: {}, //代理配置
        compress: true, //开启gzip压缩
        open: true // 自动开启浏览器
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
};