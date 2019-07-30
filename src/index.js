// require('es5-shim');
// require('es5-shim/es5-sham');
require('core-js/stable');
require('regenerator-runtime/runtime');
const React = require('react');
const ReactDOM = require('react-dom');
const Router = require('react-router').Router;
const routes = require('./routes').default;
const createBrowserHistory = require('history/lib/createBrowserHistory');
const history = createBrowserHistory();
ReactDOM.render(
    <Router history={history} routes={routes} />,
    document.getElementById('root')
);
