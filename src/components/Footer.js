import React, {Component} from "react";
import Newsletter from './footer/Newsletter';
import Socials from './footer/Socials';

class Footer extends Component {
    render() {
        return (
            <div className="clearfix">
                <Newsletter />
                <Socials />
                <footer className="footerv4-w3ls bg-theme1 footer">
                    <div className="footerv4-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 cpy-right">
                                    <p>All rights reserved | Developed by <strong>Vikesh</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;