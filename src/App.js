import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from "./components/Header/Header";
import HomePage from "./pages/Home/HomePage";
import Footer from "./components/Footer/Footer";
import NoRoute from "./pages/NoRoute/NoRoute";

require('intersection-observer'); // Polyfill

class App extends Component {
    render() {
        return (
            <Router>
                <Header/>
                <main className="main">
                    <Switch>
                        <Route path="/" component={HomePage} exact />
                        <Route component={NoRoute} />
                    </Switch>
                </main>
                <Footer/>

            </Router>
        );
    }
}

export default App;
