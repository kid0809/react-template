import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { getToken } from '../utils/storage';

const LoginRoute = ({ component: Component, path: Path }) => (
    <Route path={Path} render={props => (
        getToken('isLogin') ? (
            <Redirect to="/" />
        ) : (
            <Component {...props} />
        )
    )} />
);

export default LoginRoute;
