/* global __dirname */
const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'production',
    devtool: false,
    target: 'electron-main',
    entry: './main.js',
    output: {
        path: path.join(__dirname, '../'), // 出口目录，dist文件
        filename: 'main.prod.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    /**
     * Disables webpack processing of __dirname and __filename.
     * If you run the bundle in node.js it falls back to these values of node.js.
     * https://github.com/webpack/webpack/issues/2010
     */
    node: {
        __dirname: false,
        __filename: false
    },
    plugins: [
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'production'
        })
    ]
};
