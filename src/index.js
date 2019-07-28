require('core-js/stable');
require('regenerator-runtime/runtime');
const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./App').default;

ReactDOM.render(<App />, document.getElementById('root'));
