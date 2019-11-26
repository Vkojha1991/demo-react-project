import React, { Component } from 'react';

var base_path = window.location.origin;

class Introservices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags:[]
        }
    }

    componentDidMount() { 
        fetch(`${ base_path }/data/services.json`)
        .then(response=>{
            response.json().then(data=>{
              if(data.length > 0) {
                  this.setState({
                      tags: data,
                });
              }
            });
        });
    }

	render() {
        var tags = this.state.tags;
		return(
            <section className={ `slide-wrapper service-wrapper ` + ((tags.length > 0) ? '' : 'hidden')  }>
                    <div className="services">
                        <div className="container py-lg-5">
                            <div className="row">
                                {
                                    tags.map(tagdata => (
                                        <div key = {tagdata.heading} className="col-lg-6">
                                            <div className="d-flex services-box">
                                                <div className="icon">
                                                    <span className={ `fa ` + tagdata.icons } ></span>
                                                </div>
                                                <div className="service-content">
                                                    <h4>{ tagdata.heading }</h4>
                                                    <p>{ tagdata.description } </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
            </section>
        )
	}
}
export default Introservices;