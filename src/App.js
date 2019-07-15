import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import LoginRoute from './routes/LoginRoute';
import PrivateRoute from './routes/PrivateRoute';
import Login from './components/business/Login';
import Dashboard from './components/business/Dashboard';
import './styles/main.scss';


class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <LoginRoute path="/login" component={Login} />
                    <PrivateRoute path="/" component={Dashboard} />
                </Switch>
            </Router>
        );
    }
}

export default hot(App);
