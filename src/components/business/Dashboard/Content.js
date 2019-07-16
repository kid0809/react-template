import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loading from '../../basic/Loading';
import routes from '../../../routes';

const NoMatch = lazy(() =>
    import(/* webpackChunkName: "NoMatch" */ '../NoMatch')
);

const Content = () => {
    return (
        <div className="dashboard-content">
            <Suspense fallback={<Loading />}>
                <Switch>
                    {routes.map(item => {
                        return (
                            <Route
                                key={item.key}
                                path={item.path}
                                component={item.component}
                                exact
                            />
                        );
                    })}
                    <Redirect exact from="/" to="/home" />
                    <Route component={NoMatch} />
                </Switch>
            </Suspense>
        </div>
    );
};

export default Content;
