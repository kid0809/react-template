import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Menu = ({ menus }) => {
    return (
        <div className="menu-wrap">
            <ul style={{ marginTop: '20px' }}>
                {menus.map(item => (
                    <li key={item.title} className="menu-item">
                        <Link to={item.url}>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;
