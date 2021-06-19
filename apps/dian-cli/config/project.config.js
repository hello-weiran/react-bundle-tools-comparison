const path = require('path')
const webpack = require('webpack');

module.exports = {
    webpackConfig: {
        resolve: {
            alias: {
                'moment': 'moment/moment.js'
            }
        },
        plugins: [
            new webpack.IgnorePlugin({resourceRegExp: /^\.\/locale$/, contextRegExp: /moment$/}),
        ]
    }
}