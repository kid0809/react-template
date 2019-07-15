import React from 'react';
import './styles.scss';

const Footer = () => {
    return (
        <div className="footer-wrap">
            © {new Date().getFullYear()} caih 前端组
        </div>
    );
};

export default Footer;
