import React, { Component, Suspense } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import Loading from './components/basic/Loading';
import ErrorBoundary from './components/business/ErrorBoundary';

import Layout from './components/basic/Layout';
import AuthRoute from './routes/AuthRoute';
import LayoutContext from './LayoutContext';

import routes from './routes';
import './styles/main.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            layout: ''
        };
    }

    layoutChange = (type) => {
        this.setState({ layout: type });
    };

    render() {
        return (
            <LayoutContext.Provider value={this.state}>
                <Router>
                    <Layout>
                        <ErrorBoundary>
                            <Suspense fallback={<Loading />}>
                                <Switch>
                                    <Redirect exact from="/" to="/home" />
                                    {routes.map((item, index) => {
                                        if (routes.length - 1 === index) {
                                            return (
                                                <Route
                                                    key={item.key}
                                                    component={item.component}
                                                />
                                            );
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
                                    })}
                                </Switch>
                            </Suspense>
                        </ErrorBoundary>
                    </Layout>
                </Router>
            </LayoutContext.Provider>
        );
    }
}

export default hot(App);
