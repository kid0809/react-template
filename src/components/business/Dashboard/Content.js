import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import AuthRoute from '../../../routes/AuthRoute';
import NoMatch from '../NoMatch';
import routes from '../../../routes';

const Content = () => {
    return (
        <div className="dashboard-content">
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
        </div>
    );
};

export default Content;
