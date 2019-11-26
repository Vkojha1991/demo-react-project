import React, { Component } from 'react';

var base_path = window.location.origin;

class Works extends Component {
    constructor(props) {
        super(props);
        this.state = {
            works:[]
        }
    }

    componentDidMount() { 
        fetch(`${ base_path }/data/works.json`)
        .then(response=>{
            response.json().then(data=>{
              if(data.length > 0) {
                  this.setState({
                      works: data,
                });
              }
            });
        });
    }

	render() {
        var works = this.state.works;
        var base_path = window.location.origin;
		return(
                <section className={ `services py-lg-5 works `  + ((works.length > 0) ? '' : 'hidden') }>
                    <div className="container py-5">
                        {
                            works.map(work =>(
                                <div key={work.id} className="row ">
                                    <div className="col-lg-6">
                                        <img src={ base_path + "/" + work.img } alt="" className="img-fluid img-thumbnail" />
                                    </div>
                                    <div className="col-lg-6 w3pvt-serv-left">
                                        <h4 className="mb-3">{ work.heading }</h4>
                                        <p className="my-3">{ work.description }</p>
                                        <a href= { work.link } className="text-capitalize btn-wthree btn-wthree-service btn scroll">explore
                                            now</a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>
        )       
	}
}
export default Works;