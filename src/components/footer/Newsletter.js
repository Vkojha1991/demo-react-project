import React, { Component } from 'react';

class Newsletter extends Component {
    constructor(props){
        super(props);
        this.state = {
            fields: { email:''},
            errors: {}
        }
     }
 
     handleValidation(){
         let fields = this.state.fields;
         let errors = {};
         let formIsValid = true;

        if(typeof fields["email"] !== "undefined"){
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["email"] = "Enter a valid email";
            }
        }  
        this.setState({errors: errors});
        return formIsValid;
    }
 
    formSubmit(e){
         e.preventDefault();
         if(this.handleValidation()){
            alert("Form submitted");
            this.setState({fields:{email:''}});
         }
     }
 
    handleChange(field, e){         
         let fields = this.state.fields;
         fields[field] = e.target.value;        
         this.setState({fields});
    }

	render() {
		return (
            <section className="subscribe py-lg-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <h5 className="main-title-w3pvt text-theme text-capitalize text-center">subscribe to my newsletter</h5>
                            <form className="subscribe-wthree" onSubmit={this.formSubmit.bind(this)}>
                                <div className="d-flex subscribe-wthree-field">
                                    <label className="align-self-center">
                                        <span className="fa fa-envelope-open text-theme" aria-hidden="true"></span>
                                    </label>
                                    <input className="form-control" refs="email" type="text" placeholder="Enter your email..." onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/>
                                    <button className="form-control w-50" type="submit">Subscribe</button>
                                </div>
                                <span className="error">{this.state.errors["email"]}</span>
                            </form>
                        </div>
                    </div>
                </div>
            </section> 
		)
	}
}
export default Newsletter;