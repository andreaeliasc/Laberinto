module.exports = {
    mode: "development",
    module: {
        rules: [{test: /\.jsx?$/, use: ["babel-loader", "eslint-loader"]},]
    },
    devServer: {contentBase: "dist", overlay:false}
}