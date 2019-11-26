import React, { Component } from 'react';
import Pagebreadcrumbs from './common/Breadcrumbs';
import Intro from './common/Intro';
import Abou from './home/Abou';
import Team from './about/Team';
import Interior from './about/Interior';

class About extends Component {
	render() {
	   return (
			<div className="about-page">
				{ /* Banner start */ }
				<div className="home-wthreepvt">
					<div className="banner-inner"></div>
				</div>
				{ /* Banner end */ }

				{ /* Breadcrumbs start */}
					<Pagebreadcrumbs />
				{ /* Breadcrumbs end */}

				{/* About start */}
				<Intro />
				{/* About end */}

				{/* Abou start */}
				<Abou />
				{/* Abou end */}

				{/* Abou start */}
				<Team />
				{/* Abou end */}

				{/* Interior static start */}
				<Interior />
				{/* Interior static end */}

			</div>
			
	   	)
	}
 }
 export default About;