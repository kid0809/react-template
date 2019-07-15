module.exports = function(api) {
    api.cache(true);
    const presets = [
        "@babel/react",
        ["@babel/env", {
            "modules": false,
            "useBuiltIns": 'usage',
            "corejs": { version: 3, proposals: true }
        }]
    ];
    const plugins = [
        "react-hot-loader/babel",
        "@babel/plugin-syntax-dynamic-import", // 动态import加载组件
        "@babel/plugin-proposal-class-properties", // class的方法可以用箭头函数自动bind this
        "@babel/plugin-transform-runtime"
    ];

    return {
        presets,
        plugins
    };
};
