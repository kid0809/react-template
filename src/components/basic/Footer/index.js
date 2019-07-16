import React from 'react';
import './styles.scss';
const Footer = () => {
    console.log('111');
    return (
        <div className="footer-wrap">
            © {new Date().getFullYear()} CAIH-FE Team
        </div>
    );
};

export default Footer;
