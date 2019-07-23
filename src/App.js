import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import List from './components/business/List';
import Detail from './components/business/Detail';
import './styles/main.scss';

// 生产时注释掉下面2句
import VConsole from 'vconsole';
const vConsole = new VConsole();

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={List} />
                    <Route path="/detail/:id" component={Detail} />
                </Switch>
            </Router>
        );
    }
}

export default hot(App);
