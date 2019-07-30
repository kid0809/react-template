import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../App';
import Login from '../components/business/Login';
import Dashboard from '../components/business/Dashboard';
import Home from '../components/business/Home';
import { getToken } from '../utils/storage';

function redirectToLogin(nextState, replaceState) {
    if (!getToken('isLogin')) {
        replaceState(
            {
                nextPathname: nextState.location.pathname
            },
            '/login'
        );
    }
}

function redirectToDashboard(nextState, replaceState) {
    if (getToken('isLogin')) {
        replaceState(null, '/');
    }
}

const routes = (
    <Route component={App}>
        <Route path="/login" component={Login} onEnter={redirectToDashboard} />
        <Route path="/" component={Dashboard} onEnter={redirectToLogin}>
            <IndexRoute component={Home} />
            <Route
                path="about"
                getComponent={async (location, cb) => {
                    const module = await import(
                        /* webpackChunkName: "About" */ '../components/business/About'
                    );
                    const About = module.default;
                    cb(null, About);
                }}
            />
        </Route>
    </Route>
);

export default routes;
