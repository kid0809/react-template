import React, { Component, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loading from '@src/components/basic/Loading';
import ErrorBoundary from '@src/components/business/ErrorBoundary';
import Layout from '@src/components/basic/Layout';
import LayoutContext from '@src/LayoutContext';

import AuthRoute from './AuthRoute';
import routes from './routes';

class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            layout: ''
        };
    }

    // 切换布局
    layoutChange = (type) => {
        this.setState({ layout: type });
    };

    // 渲染路由
    renderRoutes() {
        const result = routes.map((item, index) => {
            if (routes.length - 1 === index) {
                return <Route key={item.key} component={item.component} />;
            }
            return (
                <AuthRoute
                    key={item.key}
                    path={item.path}
                    auth={item.auth}
                    layout={item.layout}
                    layoutChange={this.layoutChange}
                    component={item.component}
                    exact
                />
            );
        });

        return result;
    }

    render() {
        return (
            <LayoutContext.Provider value={this.state}>
                <Layout>
                    <ErrorBoundary>
                        <Suspense fallback={<Loading />}>
                            <Switch>
                                <Redirect exact from="/" to="/home" />
                                {this.renderRoutes()}
                            </Switch>
                        </Suspense>
                    </ErrorBoundary>
                </Layout>
            </LayoutContext.Provider>
        );
    }
}

export default Routes;
