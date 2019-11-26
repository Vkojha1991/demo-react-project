import React, { Component } from 'react';
import Slider from 'react-slick';

var base_path = window.location.origin;

class Testimonials extends Component {
    constructor(props) {
        super(props);
        this.state = {
            testimonials:[]
        }
    }

    componentDidMount() { 
        fetch(`${ base_path }/data/testimonials.json`)
        .then(response=>{
            response.json().then(data=>{
              if(data.length > 0) {
                  this.setState({
                      testimonials: data,
                });
              }
            });
        });
    }

	render() {
        var testimonials = this.state.testimonials;
        var base_path = window.location.href;
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
		return(
            <div className={ `slide-wthree py-lg-5 ` + ((testimonials.length > 0) ? '' : 'hidden') }>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-7 slide-left-wthree p-lg-5 p-3">
                            <h3 className="title-head-w3l">testimonials</h3>
                            <div className="mt-3">
                                <div className="slide">
                                    <div className="w-100"> 
                                        <Slider {...settings}>
                                            {
                                                testimonials.map(testmon => (
                                                    <div key = { testimonials.index + 1 } className="testimonials">
                                                        <div className="testimonial-content">
                                                            <div className="row">
                                                                <div className="col-sm-2">
                                                                    <img src={ base_path + testmon.img } alt="" className="rounded-circle img-fluid" />
                                                                </div>
                                                                <div className="col-sm-10 mt-sm-0 mt-4">
                                                                    <h3>{ testmon.heading }</h3>
                                                                    <p className="my-3">{ testmon.description }</p>
                                                                    <p className="text-theme">- { testmon.username }</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 slide-right-bg"></div>
                    </div>
                </div>
            </div>
        )       
	}
}
export default Testimonials;