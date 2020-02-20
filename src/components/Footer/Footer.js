import React from 'react';
import "./footer.scss";

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Webseed Digital</p>
            </div>
        </footer>
    );
};

export default Footer;
