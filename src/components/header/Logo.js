import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png';

class Logo extends Component {
	render() {
		return (
			<h1 className="wthree-logo">
                <Link to = "/" id="logoLink"><img src= { logo } alt="logo" ></img></Link>
            </h1>
		);  
	}
}
export default Logo;