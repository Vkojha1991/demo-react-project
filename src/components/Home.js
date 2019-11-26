import React, { Component } from 'react';
import Intro from './common/Intro';
import Bannerimg from '../assets/images/banner.jpg';
import Introervices from './home/Introservices';
import Abou from './home/Abou';
import Works from './home/Works';
import Testimonials from './common/Testimonial';

class Home extends Component {
	render() {
		const bannerImg = {
			backgroundImage: 'url(' + Bannerimg + ')',
		}
		return (
			<div className="home-page">
				{/* banner start */}
				<div className="home-wthreepvt" style={ bannerImg }>     
					<div className="banner-main">
						<div className="container">
							<div className="row">
								<div className="offset-lg-6"></div>
								<div className="col-lg-6">
									<div className="banner-text">
										<div className="slider-info">
											<span>creative Interior design.</span>
											<h4>welcome to my Interior </h4>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* banner end */}
				
				{/* About start */}
				<Intro />
				{/* About end */}

				{/* Services start */}
				<Introervices />
				{/* Services end */}

				{/* Abou start */}
				<Abou />
				{/* Abou end */}

				{/* Works start */}
				<Works />
				{/* Works end */}

				{/* Testimonials start */}
				<Testimonials />
				{/* Testimonials end */}

				
			</div>	
		);
	}
}
export default Home;