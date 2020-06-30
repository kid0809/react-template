import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import Routes from './Routes';
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
