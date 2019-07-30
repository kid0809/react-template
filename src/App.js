import React from 'react';
import './styles/main.scss';

class App extends React.Component {
    render() {
        return <div>{this.props.children}</div>;
    }
}

export default App;
