import React from 'react';
import Loginform from './auth/Loginform';
import Pagebreadcrumbs from './common/Breadcrumbs';

function Login() {
    return (
        <div className="login-page">
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
                    <h3 className="title-head-w3l">Login</h3>
                    <div className="py-lg-5 pt-4">
                        <div className="mt-lg-0 mt-3">
                            { /* Login form start */}
                                <Loginform />
                            { /* Login form end */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login;