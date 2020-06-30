import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import Routes from './routes';
import './styles/main.scss';
class App extends Component {
    render() {
        return (
            <Router>
                <Routes />
            </Router>
        );
    }
}

export default hot(App);
