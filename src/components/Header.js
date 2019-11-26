import React, {Component} from "react";
import Logo from './header/Logo';
import Navigation from './header/Navigation';

class Header extends Component {
    render() {
        return (
            <header className="header-top text-md-left text-center bg-theme1">
                <div className="container">
                    <div className="d-flex justify-content-between">
                        <Logo />
                        <div className="nav-sec  position-relative">
                            <Navigation />
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;