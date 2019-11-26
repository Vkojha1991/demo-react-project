import React, { Component } from 'react';

var base_path = window.location.origin;

class Abou extends Component {
    constructor(props) {
        super(props);
        this.state = {
            abou:[]
        }
    }

    componentDidMount() { 
        fetch(`${ base_path }/data/abou.json`)
        .then(response=>{
            response.json().then(data=>{
              if(data.length > 0) {
                  this.setState({
                      abou: data,
                });
              }
            });
        });
    }

	render() {
        var abou = this.state.abou;
		return(
                <section className={ "abou py-lg-5 " + ((abou.length > 0) ? "" : "hidden") }>
                    <div className="container py-5">
                        <div className="row no-gutters">
                            <div className="w3pvt-abt-btm">
                                <div className="w3pvt-top-row row py-md-5">
                                    { 
                                        abou.map(aboutext => (
                                            <div key={ aboutext.heading } className="col-lg-4 col-md-6">
                                                <div className="w3pvt-about-grids">
                                                    <span className={ `fa text-theme ` + aboutext.icons }></span>
                                                    <h4> { aboutext.heading } <span></span></h4>
                                                    <p> { aboutext.description } </p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        )       
	}
}
export default Abou;