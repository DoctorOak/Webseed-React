import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

import "./tech-page.scss";
import TechItem from "./components/TechItem/TechItem";
import TechItems from "./components/TechItem/TechItems";


const TechPage = () => {
    return (
        <section className={"tech-page"} >
            <div className={"scroll-offset"} id={"techPage"}/>
            <Container>
                <Row>
                    <Col md={{span: 8, offset:2}}>
                        <h2>My Tech Stack</h2>
                        <p>My extensive experience as a full-stack developer, both for my own personal projects
                            and within the high-project-turnover environment of an agency means I've got a very varied tech-stack in my toolkit.
                        </p>
                        <p>As well as those listed below - all of which I'm either very experienced in or familiar enough to work with day-to-day, I also
                            have limited experience with a range of other languages and frameworks - such as C#, Python, Ruby On Rails etc - that can be useful in projects with a wider scope or in re-platforming.</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={{span:8, offset:2}} className={"mt-4 mb-4"}>
                        <h3>Front-End</h3>

                        <TechItems>
                            <TechItem img={'/tech-stack/react-icon.png'} name={'ReactJS'} />
                            <TechItem img={'/tech-stack/ember-js-icon.png'} name={'EmberJS'} />
                            <TechItem img={'/tech-stack/angular-js-icon.png'} name={'AngularJS'} />
                            <TechItem img={'/tech-stack/vue-js-icon.png'} name={'VueJS'} />
                            <TechItem img={'/tech-stack/bootstrap-logo.png'} name={'Bootstrap'} />
                            <TechItem img={'/tech-stack/jquery-logo.png'} name={'jQuery'} />
                            <TechItem img={'/tech-stack/es-ecmascript-logo.png'} name={'ES6+'} />
                            <TechItem img={'/tech-stack/graphql-logo.png'} name={'GraphQL'} />
                        </TechItems>
                    </Col>
                </Row>

                <Row>
                    <Col md={{span:8, offset:2}} className={"mt-4 mb-4"}>
                        <h3>Back-End</h3>

                        <TechItems>
                            <TechItem img={'/tech-stack/php-logo.png'} name={'PHP 4-7+'} />
                            <TechItem img={'/tech-stack/wordpress-logo.png'} name={'Wordpress'} />
                            <TechItem img={'/tech-stack/laravel-logo.png'} name={'Laravel'} />
                            <TechItem img={'/tech-stack/codeigniter-icon.png'} name={'CodeIgniter'} />
                            <TechItem img={'/tech-stack/zend-framework-logo.png'} name={'Zend Framework'} />
                            <TechItem img={'/tech-stack/mysql-logo.svg'} name={'MySQL'} />
                            <TechItem img={'/tech-stack/mongodb-logo.png'} name={'MongoDB'} />
                            <TechItem img={'/tech-stack/nodejs-logo.png'} name={'NodeJS'} />
                        </TechItems>
                    </Col>
                </Row>

                <Row>
                    <Col md={{span:8, offset:2}} className={"mt-4 mb-4"}>
                        <h3>Server Side</h3>

                        <TechItems>
                            <TechItem img={'/tech-stack/linux-logo.png'} name={'Linux'} />
                            <TechItem img={'/tech-stack/apache-logo.png'} name={'Apache'} />
                            <TechItem img={'/tech-stack/nginx-logo.png'} name={'NGINX'} />
                            <TechItem img={'/tech-stack/jenkins-logo.png'} name={'Jenkins CI'} />
                            <TechItem img={'/tech-stack/aws-logo.png'} name={'AWS'} />
                            <TechItem img={'/tech-stack/forge-logo.png'} name={'Laravel Forge'} />
                        </TechItems>
                    </Col>
                </Row>

            </Container>
        </section>
    );
};

export default TechPage;
