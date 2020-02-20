import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./home-about.scss";

import Me from "./images/me-i-guess.png";
import {InView} from "react-intersection-observer";
import ScrollTo from "../../../../components/ScrollTo/ScrollTo";


const HomeAbout = () => {
    return (
        <section className={"home-about"}>
            <InView>
                {({ inView, ref }) => (
                    <Container ref={ref} className={"about-container " + ((inView) ? ' in-view ' : '')}>
                        <Row>
                            <Col md={{span:8, offset:4}} className={"about-title"}>
                                <h2>Alex Winton</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <div className={"photo-frame"}>
                                    <img src={Me} className={"img-fluid"} alt={"Alex Winton"}/>
                                </div>
                            </Col>
                            <Col md={8}>
                                <div className={"about-text"}>
                                    <p>I've been developing and running websites since 2000, and working full time as a developer since 2011.
                                        For most of that time I've been working as a key part of the small development team at
                                        <a href={"https://www.getsavvy.com/"} target={"_blank"} rel="nofollow noopener noreferrer"> Savvy Marketing</a>,
                                        a leading Leeds-based shopper-marketing agency with a strong digital offering.</p>

                                    <p>Over those years, I've worked extensively with clients such as
                                        <a href={"https://www.getsavvy.com/work"} target={"_blank"} rel="nofollow noopener noreferrer"> adidas, LEGO, Britvic, Morrisons and Symington's </a>
                                        to deliver a wide variety of projects. Working from initial-scoping all the way through to deployment and beyond.
                                        These ranged from short-term competition microsites, to long-lived brand sites and business-critical, internal platforms
                                        - and everything in-between. Most of these projects have also been powered by the custom CMS I led development on.</p>

                                    <p>Now I'm available to do all of that for you, too! To find out more details on what I can do, please check out <ScrollTo selector={"#techPage"} className={"inline-scroll-link"}>my tech stack</ScrollTo>.
                                        I have some examples of my personal work <ScrollTo selector={"#workPage"} className={"inline-scroll-link"}>available below</ScrollTo> - including the source code for this website, built in React/Node.</p>

                                    <p>If you're in Leeds or York and you're looking for a full-stack contractor with senior-level experience, please do get
                                        in touch! You can also just <a href="https://www.linkedin.com/in/alex-winton-180a81b/" target={"_blank"}  rel="nofollow noopener noreferrer">find/message me on LinkedIn</a>.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                )}
            </InView>

        </section>
    );
};

export default HomeAbout;
