import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Item from '../../basic/Item';
import './styles.scss';
class List extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const arr = [1, 2, 3];
        return (
            <div className="list-wrap">
                {arr.map((item) => {
                    return (
                        <Link to={`/detail/${item}`} key={item}>
                            <Item>{item}</Item>
                        </Link>
                    );
                })}
                <div className="item-last-child">last children</div>
            </div>
        );
    }
}

export default List;
