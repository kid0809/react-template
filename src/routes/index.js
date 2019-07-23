// 懒加载的例子，mobile模板暂时没用到此文件

import { lazy } from 'react';

const HomeComponent = lazy(() =>
    import(/* webpackChunkName: 'Home' */ '../components/business/Home')
);

const AboutComponent = lazy(() =>
    import(/* webpackChunkName: 'About' */ '../components/business/About')
);

const routes = [
    {
        key: 'home',
        path: '/home',
        component: HomeComponent,
        breadcrumbName: '首页'
    },
    {
        key: 'about',
        path: '/about',
        component: AboutComponent,
        breadcrumbName: '关于'
    }
];

export default routes;
