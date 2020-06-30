import { lazy } from 'react';

const LoginComponent = lazy(() =>
    import(/* webpackChunkName: 'Login' */ '../pages/Login')
);

const HomeComponent = lazy(() =>
    import(/* webpackChunkName: 'Home' */ '../pages/Home')
);

const AboutComponent = lazy(() =>
    import(/* webpackChunkName: 'About' */ '../pages/About')
);

const NoMatchComponent = lazy(() =>
    import(/* webpackChunkName: 'NoMatch' */ '../pages/NoMatch')
);

const routes = [
    {
        key: 'login',
        path: '/login',
        component: LoginComponent
    },
    {
        key: 'home',
        path: '/home',
        component: HomeComponent,
        auth: true,
        breadcrumbName: '首页',
        layout: 'layout1'
    },
    {
        key: 'about',
        path: '/about',
        component: AboutComponent,
        auth: true,
        breadcrumbName: '关于',
        layout: 'layout2'
    },
    {
        key: 'nomatch',
        component: NoMatchComponent,
        breadcrumbName: '404'
    }
];

export default routes;
