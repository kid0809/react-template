# react-pc-template
这是一个react项目的pc端模板

## 命令

### 安装 & 启动
```
npm install
npm run dev
```

### 编译产出dist
```
npm run build
```

### 运行项目产出
```
npm start
```


## 目录结构

```
.
├── config // 项目配置文件夹
│   ├── index.js // 配置参数
│   ├── webdev.webpack.cfg.js // dev下的webpack配置
│   └── webprod.webpack.cfg.js // prod下的webpack配置
│
├── dist // build 后生成的目录
│
├── public //
│   └── template.html // build需要的html模板
│
├── src
│   ├── components // 组件
│   │    ├── basic // 基础组件
│   │    └── business // 业务组件
│   │
│   ├── images // 图片文件夹
│   │
│   ├── routes // 前端路由相关
│   │    ├── index.js // 前端路由配置
│   │    ├── LoginRoute.js // 高阶路由组件，拦截作用
│   │    └── PrivateRoute.js // 高阶路由组件，拦截作用
│   │
│   ├── styles // 样式文件夹
│   │    ├── main.scss // 全局样式
│   │    └── variable.scss // 全局sass变量
│   │
│   ├── utils // 工具集
│   │    ├── request.js // 封装的请求的方法
│   │    └── storage.js // 封装的本地存储方法
│   │
│   ├── App.js // react组件入口
│   │
│   └── index.js // 项目入口
│
├── .dockerignore // docker 忽略文件
│
├── .eslintignore // eslint 忽略文件
│
├── .eslintrc.js // eslint 规则文件
│
├── .gitignore // git 忽略文件
│
├── .prettierrc // prettier 代码格式配置文件
│
├── app.conf // 项目nginx配置文件，docker部署用到
│
├── babel.config.js // babel 配置文件
│
├── build.sh // 流水线脚本，docker部署用到
│
├── Dockerfile // docker 镜像文件
│
├── ecosystem.config.js // pm2 配置文件
│
├── favicon.ico // 网页图标
│
├── index.html // 开发时的单页模板
│
├── nginx.conf // 整体nginx配置，docker部署用到
│
├── package.json // package.json
│
├── postcss.config.js // postcss配置，与css预编译相关
│
└── server.js // node服务器 可以运行编译后的项目
```