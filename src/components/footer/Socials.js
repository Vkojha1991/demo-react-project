import React, { Component } from 'react';

class Socials extends Component {
    render() {
        return(
            <div className="w3ltdits-partners py-lg-5" id="partners">
                <div className="container py-5">
                    <div className="title-wthree text-center">
                        <h2 className="w3lpvt-title">
                            follow us on.
                        </h2>
                        <span></span>
                    </div>
                    <div className="footerv4-social banner-social text-center">
                        <ul>
                            <li>
                                <a href="http://www.facebook.com">
                                    <span className="fa fa-facebook-f icon_facebook"></span>
                                </a>
                            </li>
                            <li>
                                <a href="http://www.twitter.com">
                                    <span className="fa fa-twitter icon_twitter"></span>
                                </a>
                            </li>
                            <li>
                                <a href="http://www.dribbble.com">
                                    <span className="fa fa-dribbble icon_dribbble"></span>
                                </a>
                            </li>
                            <li>
                                <a href="http://www.google.com">
                                    <span className="fa fa-google-plus icon_g_plus"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Socials;