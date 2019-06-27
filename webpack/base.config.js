const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, "../src/index.js"),

    output: {
        path: path.resolve(__dirname, "../dist"),
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html",
            filename: "index.html"
        })
    ],

    stats: {
        children: false
    }
}
