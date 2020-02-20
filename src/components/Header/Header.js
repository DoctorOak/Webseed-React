import React, {Component} from 'react';

import HeaderNav from "../Navigation/HeaderNav";
import "./header.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Logo from "./images/logo-white-192.png";
import ScrollTo from "../ScrollTo/ScrollTo";



class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollPosition: 0
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
        // Checks whether the page is scrolled at all and determines a percentage value.
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        this.setState({
            scrollPosition: scrolled,
        })
    }


    render() {
        const position = this.state.scrollPosition;
        return (
            <header className={"main-header " + ((position > 5) ? 'scrolled' : '')}>
                <Container>
                    <Row>
                        <Col md={4}>
                            <div className="logo">
                                <ScrollTo selector="#home">
                                    <img src={Logo} alt="Webseed Digital" className='img-fluid' />
                                </ScrollTo>
                            </div>
                        </Col>
                        <Col md={{ span: 4, offset:4 }}> <HeaderNav/> </Col>
                    </Row>
                </Container>

            </header>
        );
    }
}

export default Header;
