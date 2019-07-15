import Loadable from 'react-loadable';
import Loading from '../components/basic/Loading';

const HomeComponent = Loadable({
    loader: () => import(/* webpackChunkName: 'Home' */ '../components/business/Home'),
    loading: Loading
});

const AboutComponent = Loadable({
    loader: () => import(/* webpackChunkName: 'About' */ '../components/business/About'),
    loading: Loading
});

const routes = [{
    key: 'home',
    path: '/home',
    component: HomeComponent,
    breadcrumbName: '首页'
}, {
    key: 'about',
    path: '/about',
    component: AboutComponent,
    breadcrumbName: '关于'
}];

export default routes;
