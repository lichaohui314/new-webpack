// 开发环境 config 和 dev 配置合并
// 生产环境 config 和 prod 配置合并
let merge = require("webpack-merge");
let config = require("./config");
let prod = require("./webpack.prod.config");
let dev = require("./webpack.dev.config");

// npm run serve  env:{ development: true }
//npm run build   env:{ prodution: true }
module.exports = env => {
    if (env.development) {
        return merge(config, dev);
    } else {
        return merge(config, prod);
    }
};