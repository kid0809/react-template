import React, { Component } from 'react';
import './styles.scss';
class Item extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="item-wrap">{this.props.children}</div>;
    }
}

export default Item;
