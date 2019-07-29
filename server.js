/* eslint no-undef: "off" */
/* eslint no-console: "off" */

const http = require('http');
const path = require('path');
const express = require('express');
const compression = require('compression');
const config = require('./config');
const proxy = require('http-proxy-middleware');

const app = express();
app.use(compression());

const port = process.env.PORT || config.webport || 3000;
const env = process.env.NODE_ENV || 'development';
app.set('env', env);

/**
 * 用于指定URL路径和服务器路径的映射
 */
const publicDir = path.resolve(__dirname, './dist');
app.use('/dist/', express.static(publicDir));

// 反向代理
// app.use('/api', proxy({ target: config.apiHost, changeOrigin: true, logLevel: 'debug' }));

/**
 * 判断运行环境,执行不同动作
 */
if (env === 'development') {
    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const config = require('./config/webdev.webpack.cfg.js');
    const compiler = webpack(config);
    app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
}

if (env === 'development') {
    app.use(function (req, res) {
        res.sendFile('index.html', { root: __dirname });
    });
} else {
    app.use(function (req, res) {
        res.sendFile('dist/index.html', { root: __dirname });
    });
}


http.createServer(app).listen(port, (error) => {
    if (error) {
        console.error(error);
    } else {
        console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
    }
});
