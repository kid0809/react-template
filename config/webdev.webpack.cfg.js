/* global __dirname */
const path = require('path');
const webpack = require('webpack');
const cfg = require('./index');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// webpack 配置
module.exports = {
    mode: 'development',
    entry: {
        app: ['react-hot-loader/patch', './src/index.js']
    },
    output: {
        path: path.join(__dirname, '../dist'), // 出口目录，dist文件
        publicPath: "/dist/",
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].chunk.js'
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
                    'sass-loader',
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: path.join(__dirname, './variable.scss')
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
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify('development')
        })
    ],
    resolve: {
        // 自动补全后缀，注意第一个必须是空字符串,后缀一定以点开头
        extensions: ['.js', '.json', '.css']
    },
    devServer: {
        port: cfg.webport, // 端口
        host: 'localhost',
        historyApiFallback: {
            disableDotRule: true
        },
        compress: true,
        proxy: {
            '/api': {
                target: cfg.apiHost,
                changeOrigin: true
            }
        }
    }
};
