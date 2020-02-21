import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./work-page.scss";
import WorkItem from "./components/WorkItem/WorkItem";
import ScrollTo from "../../components/ScrollTo/ScrollTo";


const WorkPage = () => {
    return (
        <section className="work-page">
            <div className={"scroll-offset"} id={"workPage"} />
            <section className="work-intro">
                <Container>
                    <Row>
                        <Col md={{span:8, offset:2}}>
                            <h1>Some of my work</h1>
                            <p>Below you can check out some of my personal projects.
                                For now, this list is pretty small and focused on personal fan-projects, but throughout 2020 I will be
                                adding at least one functional example - with the code available on Github - for each of the technologies in my <ScrollTo selector={"#techPage"} className={"inline-scroll-link"}>Tech Stack</ScrollTo>.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className={"work-items"}>

                <WorkItem title={"Pokécharms"} img={"/mockups/pokecharms/pokecharms-mockup.png"} screensFolder={'/mockups/pokecharms'} url={"https://www.pokecharms.com"} tags={['PHP', 'XenForo', 'Zend Framework']}>
                    <p>Pokécharms is one of the first websites I ever built and the current incarnation has been online since 2003.
                        Originally created as a basic Pokémon fan site, it eventually grew to being a massive online community of
                        thousands of particularly creative Pokémon fans.</p>
                    <p>One of the most popular features on Pokécharms is the Trainer Card Maker web app,
                        the original version of which was built over the space of two nights as a simple experiment with
                        PHP's image manipulation libraries. To date, millions of images have been created using the app,
                        with over 4,500,000 alone since the launch of version 4 in late 2013.</p>
                </WorkItem>

                <WorkItem title={"GameCrash"} img={"/mockups/gamecrash/gamecrash-mockup.png"} screensFolder={'/mockups/gamecrash'} url={"https://www.gamecrash.co.uk"} tags={['PHP', 'Wordpress']}>
                    <p>GameCrash is an online video game 'magazine' - albeit one with a pretty irregular schedule (that being, whenever I get around to doing something for it). </p>
                    <p>As a long time fan and keen watcher of the video game industry, GameCrash is my own personal writing outlet and where I devote a lot of my focus in-between Dev work.</p>
                </WorkItem>

                <WorkItem title={"My Pokémon Journal"} img={"/mockups/mypokemonjournal/mypokemonjournal-mockup.png"} screensFolder={'/mockups/mypokemonjournal'} url={"https://www.mypokemonjournal.com"} tags={['PHP', 'Laravel', 'Twitter API']}>
                    <p>Inspired by the most recent Pokémon games, released in November 2019, MyPokémonJournal creates a personal,
                        customisable journal of the user's adventure in the game, as shared on Twitter directly from their Nintendo Switch.</p>
                    <p>The quick and simple build was put together in about a week, using the Twitter Stream and Search APIs to find
                        relevant tweets with the right hashtags and marked as having been posted from the console.</p>
                </WorkItem>

                <WorkItem title={"Webseed"} img={"/mockups/webseed/webseed-mockup.png"} screensFolder={'/mockups/webseed'} buttonText='View Source' url={"https://github.com/DoctorOak/Webseed-React/tree/deploy"} tags={['React', 'NodeJS', 'AWS']}>
                    <p>The website you're on right now!</p>
                    <p>For it's current purposes, this site is just a super basic collection of the information I need out there and is 100% powered by React and NodeJS, with no database layer.</p>
                    <p>As a basic example of my work in React, this site's source code is available on GitHub.</p>
                </WorkItem>


            </section>
        </section>
    );
};

export default WorkPage;
