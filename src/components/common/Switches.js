import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from '../Home';
import About from '../About';
import Services from '../Services';
import Contact from '../Contact';
import Login from '../Login';

class Switches extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" component={ Home } exact />
                <Route path="/About" component={ About } />    
                <Route path="/services" component={ Services } />
                <Route path="/contact" component={ Contact }  />
                <Route path="/login" component={ Login }  />
            </Switch>
        )
    }
}

export default Switches;