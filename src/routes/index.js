import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../App';
import Login from '../components/business/Login';
import Dashboard from '../components/business/Dashboard';
import Home from '../components/business/Home';
import About from '../components/business/About';
import TodoList from '../components/business/TodoList';
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
            <Route path="about" component={About} />
            <Route path="todo" component={TodoList} />
        </Route>
    </Route>
);

export default routes;
