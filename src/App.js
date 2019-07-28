import React from 'react';
import { hashHistory, Router, Route } from 'react-router';
import Home from './components/business/Home';
import About from './components/business/About';
import './styles/main.scss';

class App extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
            </Router>
        );
    }
}

export default App;
