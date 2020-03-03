/* global __dirname */
const path = require('path');
const webpack = require('webpack');
const Fiber = require('fibers');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// webpack 配置
module.exports = {
    mode: 'production',
    target: 'electron-preload',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '../dist'), // 出口目录，dist文件
        publicPath: './dist/',
        filename: 'renderer.prod.js',
        chunkFilename: '[name].chunk.[chunkhash].js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
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
                    MiniCssExtractPlugin.loader,
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
    resolve: {
        extensions: ['.js', '.json', '.css'],
        alias: {
            '@root': path.resolve(__dirname, '../'),
            '@src': path.resolve(__dirname, '../', 'src')
        }
    },
    plugins: [
        new CleanWebpackPlugin({ verbose: true }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[name].[contenthash].css"
        }),
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'production'
        })
        // new BundleAnalyzerPlugin()
    ],
    optimization: {
        minimizer: [
            // 压缩js
            new TerserPlugin({
                parallel: true
            }),
            // 压缩css
            new OptimizeCSSAssetsPlugin({})
        ]
    }
};
