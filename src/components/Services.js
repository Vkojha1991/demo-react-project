import React, { Component } from 'react';
import Pagebreadcrumbs from './common/Breadcrumbs';
import BannerImg from '../assets/images/banner.jpg';

var base_path = window.location.origin;

class Services extends Component {
	constructor(props) {
		super(props);
		this.state = {
			spage:[]
		}
	}

	componentDidMount() {
		fetch(`${ base_path }/data/spage.json`)
        .then(response=>{
            response.json().then(data=>{
              if(data.length > 0) {
                  this.setState({
                      spage: data,
                });
              }
            });
        });
	}

	render() {
		var spage = this.state.spage;
		var base_path = window.location.origin;
		return (
			<div className="services-page">
				{ /* Banner start */ }
				<div className="home-wthreepvt">
					<div className="banner-inner"></div>
				</div>
				{ /* Banner end */ }

				{ /* Breadcrumbs start */}
					<Pagebreadcrumbs />
				{ /* Breadcrumbs end */}

				<section className="wthree-row w3-gallery cliptop-portfolio-wthree py-lg-5 pt-4">
					<div className="container">
						<h3 className="title-head-w3l">Services</h3>
						<ul className="demo row my-4 py-lg-5">
							{
								spage.map(servtext => (
									<li key= { servtext.id } className={ servtext.classes }>
										<div className="gallery-grid1">
											<img src={ base_path +"/"+ servtext.img } alt=" " className="img-fluid" />
											<div className="p-mask img-thumbnail">
												<h4>{ servtext.heading }</h4>
												<hr></hr>
												<p>{ servtext.description }</p>
											</div>
										</div>
									</li>
								))
							}

							<li className="col-lg-8">
								<div className="gallery-grid1 mt-sm-0 mt-4">
									<img src={ BannerImg } alt=" " className="img-fluid" />
								</div>
							</li>
						</ul>
					</div>
				</section>
			</div>	
		)
	}
}
export default Services;