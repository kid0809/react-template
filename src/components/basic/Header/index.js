import React from 'react';
import './styles.scss';

const Header = ({ logout }) => {
    return (
        <div className="header-wrap">
            <button onClick={logout}>登出</button>
        </div>
    );
};

export default Header;
