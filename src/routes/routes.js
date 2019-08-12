import { lazy } from 'react';

const LoginComponent = lazy(() =>
    import(/* webpackChunkName: 'Login' */ '../components/business/Login')
);

const HomeComponent = lazy(() =>
    import(/* webpackChunkName: 'Home' */ '../components/business/Home')
);

const AboutComponent = lazy(() =>
    import(/* webpackChunkName: 'About' */ '../components/business/About')
);

const NoMatchComponent = lazy(() =>
    import(/* webpackChunkName: 'NoMatch' */ '../components/business/NoMatch')
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
