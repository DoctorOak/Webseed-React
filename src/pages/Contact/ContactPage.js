import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

import "./contact-page.scss"
import {InView} from "react-intersection-observer";

const ContactPage = () => {
    return (
        <InView rootMargin={'-200px 0px'} triggerOnce>
            {({ inView, ref }) => (
                <section ref={ref} className={"contact-page " + ((inView) ? 'in-view': '')} id={"contactPage"}>
                    <Container>
                        <Row>
                            <Col md={{span:8, offset:2}}>
                                <h2>Get in touch!</h2>
                                <p>If you think my services might be useful to you, please do get in touch! <br/>
                                    You can find and message me on <a href={"https://www.linkedin.com/in/alex-winton-180a81b/"} target={"_blank"} rel="noopener noreferrer">LinkedIn</a> if that's easiest for you,
                                    or feel free to drop me an email at <a href={'mailto:alexwinton@webseed.digital'}>AlexWinton@Webseed.digital</a>.</p>
                            </Col>
                        </Row>
                    </Container>
                </section>
            )}
        </InView>
    );
};

export default ContactPage;
