import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { getToken } from '../utils/storage';

const PrivateRoute = ({ component: Component, path: Path }) => (
    <Route path={Path} render={props => (
        getToken('isLogin') ? (
            <Component {...props} />
        ) : (
            <Redirect to={{
                pathname: '/login',
                state: props.location
            }} />
        )
    )} />
);

export default PrivateRoute;
