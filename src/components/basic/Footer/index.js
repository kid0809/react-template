import React from 'react';
import './styles.scss';
const Footer = () => {
    return (
        <div className="footer-wrap">
            © {new Date().getFullYear()} CAIH-FE Team
        </div>
    );
};

export default Footer;
