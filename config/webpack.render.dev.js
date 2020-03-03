/* global __dirname */
const path = require('path');
const webpack = require('webpack');
const Fiber = require('fibers');
const cfg = require('./index');

// webpack 配置
module.exports = {
    mode: 'development',
    target: 'electron-renderer',
    entry: [
        'react-hot-loader/patch',
        `webpack-dev-server/client?http://localhost:${cfg.webport}/`,
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, '../dist'), // 出口目录，dist文件
        publicPath: `http://localhost:${cfg.webport}/dist/`,
        filename: 'renderer.dev.js',
        chunkFilename: '[name].dev.chunk.js',
        libraryTarget: 'commonjs2'
    },
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'), // 使用dart-sass去编译
                            fiber: Fiber // 同步的库，使用dart-sass同步编译的速度是异步编译的2倍
                        }
                    }, {
                        loader: 'sass-resources-loader', // 全局scss变量插件
                        options: {
                            resources: path.join(__dirname, '../src/styles/variable.scss')
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)/,
                use: {
                    loader: 'url-loader',
                    options: {
                        outputPath: 'images/', // 图片输出的路径
                        limit: 10 * 1024 // <10kb 使用base64
                    }
                }
            }
        ]
    },
    plugins: [
        // new BundleAnalyzerPlugin()
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'development'
        })
    ],
    node: {
        __dirname: false,
        __filename: false
    },
    resolve: {
        extensions: ['.js', '.json', '.css'],
        alias: {
            '@root': path.resolve(__dirname, '../'),
            '@src': path.resolve(__dirname, '../', 'src'),
            'react-dom': '@hot-loader/react-dom'
        }
    },
    devServer: {
        port: cfg.webport, // 端口
        host: 'localhost',
        historyApiFallback: {
            disableDotRule: true
        },
        compress: true
        // 反代配置
        // proxy: {
        //     '/api': {
        //         target: cfg.apiHost,
        //         changeOrigin: true
        //     }
        // }
    }
};
