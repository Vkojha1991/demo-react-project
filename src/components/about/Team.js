import React, { Component } from 'react';

var base_path = window.location.origin;

class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {
            team: []
        }
    }

    componentDidMount() {
        fetch(`${ base_path }/data/team.json`)
            .then(response => {
                response.json().then(data => {
                    if (data.length > 0) {
                        this.setState({
                            team: data,
                        });
                    }
                });
            });
    }

    render() {
        var team = this.state.team;
        return (
            <section className={`team_wthree py-4 ` + ((team.length > 0) ? '' : 'hidden')} >
                <div className="container py-lg-5">
                    <h3 className="title-head-w3l">my team</h3>
                    <div className="row py-4 py-lg-5">
                        {
                            team.map(teamtext => (
                                <div key={ teamtext.designation } className="col-lg-6">
                                    <div className="team_grid">
                                        <img src={ base_path+"/"+teamtext.img } className="img-fluid img-thumbnail" alt="" />
                                    </div>
                                    <div className="team-text mt-4">
                                        <h4>{ teamtext.name }</h4>
                                        <span className="my-2 d-block">{ teamtext.designation }</span>
                                        <p>{ teamtext.description }</p>
                                        <hr></hr>
                                        <div className="footerv4-social d-flex align-items-center">
                                            <h6 className="team-txt mr-3">stay connected :</h6>
                                            <ul className="d-flex">
                                                <li>
                                                    <a href={ teamtext.social.fb }>
                                                        <span className="fa fa-facebook-f icon_facebook"></span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href={ teamtext.social.tw }>
                                                        <span className="fa fa-twitter icon_twitter"></span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href={ teamtext.social.dr }>
                                                        <span className="fa fa-dribbble icon_dribbble"></span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href={ teamtext.social.gp }>
                                                        <span className="fa fa-google-plus icon_g_plus"></span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        )       
    }
}

export default Team;