import React, { Component } from 'react';
import Pagebreadcrumbs from './common/Breadcrumbs';
import Contactfrom from './contact/Contactform';

class Contact extends Component {
	render() {
		return(
			<div className="services-page">
				{ /* Banner start */ }
				<div className="home-wthreepvt">
					<div className="banner-inner"></div>
				</div>
				{ /* Banner end */ }

				{ /* Breadcrumbs start */}
					<Pagebreadcrumbs />
				{ /* Breadcrumbs end */}

				<section className="contact-wthree">
					<div className="container py-sm-5">
						<h3 className="title-head-w3l">contact me</h3>
						<div className="py-lg-5 pt-4">
							<div className="mt-lg-0 mt-3">
								{ /* contact form start */}
									<Contactfrom />
								{ /* contact form end */}
							</div>
						</div>
						<div className="w3_pvt-contact-top pt-4">
							<h4>get in touch </h4>
							<ul className="d-flex header-wthreelayouts pt-0 flex-column">
								<li>
									<span className="fa fa-home mr-2"></span>
									<p className="d-inline">1234k Avenue,Block-4,Newyork.</p>
								</li>
								<li className="my-3">
									<span className="fa fa-envelope-open mr-2"></span>
									<a href="mailto:example@email.com" className="text-secondary">info@example.com</a>
								</li>
								<li>
									<span className="fa fa-phone mr-2"></span>
									<p className="d-inline">+456 123 7890</p>
								</li>
							</ul>
						</div>
						<hr></hr>
						<p>Donec mi nulla, auctor nec sem a, ornare auctor mi. Sed mi tortor, commodo a felis in, fringilla tincidunt nulla. Vestibulum volutpat non eros ut vulpuuctor nec sem </p>
						<div className="map">
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059445135!2d-74.25986613799748!3d40.69714941774136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1549517420100" allowFullScreen title="Location"></iframe>
						</div>
					</div>
				</section>

			</div>
		)
	}
}
export default Contact;