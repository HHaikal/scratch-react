const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./base.config.js')

module.exports = merge(base, {
    plugins: [
        new webpack.LoaderOptionsPlugin({
                minimze: true
        })
    ]
})
