import React from 'react';
import './home.scss';
import HomeCover from "./components/HomeCover/HomeCover";
import HomeAbout from "./components/HomeAbout/HomeAbout";
import WorkPage from "../Work/WorkPage";
import TechPage from "../Tech/TechPage";
import ContactPage from "../Contact/ContactPage";


const HomePage = () => {
    return (
        <React.Fragment>
            <HomeCover/>
            <HomeAbout/>
            <WorkPage/>
            <TechPage/>
            <ContactPage/>
        </React.Fragment>
    );
};

export default HomePage;
