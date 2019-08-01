import React from 'react';
import './styles.scss';

const Header = ({ logout }) => {
    return (
        <div className="header-wrap">
            <div onClick={logout}>登出</div>
        </div>
    );
};

export default Header;
