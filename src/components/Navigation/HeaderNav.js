import React from 'react';
import ScrollTo from "../ScrollTo/ScrollTo";
import "./header-nav.scss";

const HeaderNav = () => {
    return (
        <nav className="header-nav">
            <ul>
                <li><ScrollTo selector="#home">Home</ScrollTo></li>
                <li><ScrollTo selector="#workPage">Work</ScrollTo></li>
                <li><ScrollTo selector="#techPage">Tech</ScrollTo></li>
                <li><ScrollTo selector="#contactPage">Contact</ScrollTo></li>
            </ul>
        </nav>
    );
};

export default HeaderNav;
