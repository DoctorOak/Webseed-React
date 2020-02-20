import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {InView} from "react-intersection-observer";
import {Link} from "react-router-dom";

import "./no-route.scss";

const NoRoute = () => {
    return (
        <section className={"no-route-page"}>
            <section className="no-route-cover" id={"error404"}>
                <Container>
                    <Row>
                        <Col md={{span: 8, offset: 2}}>
                            <InView triggerOnce>
                                {({ inView, ref }) => (
                                    <div className={"cover-text " + ((inView) ? 'in-view' : '')} ref={ref}>
                                        <h1>Whoops!</h1>
                                        <p>This looks like a wrong turn, sorry! <br/>
                                            You should head back to the home page and not worry about this page.</p>
                                        <p><Link to={'/'} className={"btn btn-primary"}>Go Back Home</Link></p>
                                    </div>
                                )}
                            </InView>
                        </Col>
                    </Row>
                </Container>
            </section>

            <div className={"why-are-you-even-here"}>
                <img src={"/hi.gif"} alt={"Why are you even here?"} title={"Why are you even here?"} />
            </div>

        </section>
    );
};

export default NoRoute;
