import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./home-cover.scss";
import {InView} from "react-intersection-observer";

const HomeCover = () => {
    return (
        <section className="home-cover" id={"home"}>
            <Container>
                <Row>
                    <Col md={{span: 8, offset: 2}}>
                        <InView triggerOnce>
                            {({ inView, ref }) => (
                                <div className={"cover-text " + ((inView) ? 'in-view' : '')} ref={ref}>
                                    <h1>Full-Stack <br/> Web Development</h1>
                                    <p>Freelance / Contract services by Alex Winton, <br/>
                                        A Leeds-based Senior Developer with nearly 10 years of commercial experience.</p>
                                </div>
                            )}
                        </InView>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HomeCover;
