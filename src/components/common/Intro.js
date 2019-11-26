import React, { Component } from 'react';

var base_path = window.location.origin;

class Intro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            intro:[]
        }
    }

    componentDidMount() { 
        fetch(`${ base_path }/data/intro.json`)
        .then(response=>{
            response.json().then(data=>{
              if(data.length > 0) {
                  this.setState({
                      intro: data,
                });
              }
            });
        });
    }

	render() {
        var intro = this.state.intro;
        var base_path = window.location.origin;
		return(
                <section className={ `wthree-row py-5 about-top ` + ((intro.length > 0) ? "" : "hidden") } >
        			<div className="container py-lg-5">
                        {
                            intro.map(introtext => (
                                <div key={introtext.heading} className="row">
                                    <div className="col-lg-6">
                                        <img src={ base_path+"/"+introtext.img } alt="" className="img-fluid img-thumbnail" />
                                    </div>
                                    <div className="col-lg-6 w3pvt-abt-right">
                                        <h4 className="mb-3">{ introtext.heading }</h4>
                                        <p> { introtext.description } </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>
        )       
	}
}
export default Intro;