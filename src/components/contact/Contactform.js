import React, { Component } from 'react';
import SimpleReactValidator from 'simple-react-validator';

class Contactfrom extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            fname:"",
            lname:"",
            tel:"",
            email:"",
            query:""
        }
        this.validator = new SimpleReactValidator();
        this.setStateFromInput = this.setStateFromInput.bind(this);
    }
    componentWillMount() {
        this.validator = new SimpleReactValidator();
    }
    submitForm = (e) => {
        e.preventDefault();
        if( this.validator.allValid() ){
            alert('Submitted data');
            fetch("contact", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fname: this.state.fname,
                    lname: this.state.lname,
                    tel: this.state.tel,
                    email: this.state.email,
                    query: this.state.query
                })
            })
            .catch((error) => {
                console.log("Error");
            })
            this.fnameInput.value = "";
            this.lnameInput.value = "";
            this.telInput.value = "";
            this.emailInput.value = "";
            this.mainInput.value = "";         
        } 
        else {
          this.validator.showMessages();
          this.forceUpdate();
        }
    }
    
    setStateFromInput(event) {
        var obj = {};
        obj[event.target.name] = event.target.value;
        this.setState(obj);
    }

    render() {
        return(
            <div className="register-top1 pb-lg-4">
                <form className="register-wthree" onSubmit={this.submitForm.bind(this)}>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="fname">First name</label>
                                <input ref={(ref) => this.fnameInput= ref} className="form-control" type="text" name="fname" placeholder="First name" value={ this.state.fname} onChange={this.setStateFromInput} />
                                {this.validator.message('fname', this.state.fname, 'required|alpha_space')}
                            </div>
                            <div className="col-md-6 mt-md-0 mt-4">
                                <label htmlFor="lname">Last name</label>
                                <input ref={(ref) => this.lnameInput= ref} className="form-control" type="text" placeholder="Last name" name="lname" value={ this.state.lname} onChange={this.setStateFromInput} />
                                {this.validator.message('lname', this.state.lname, 'required|alpha')}
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="tel">Mobile no.</label>
                                <input ref={(ref) => this.telInput= ref} className="form-control" type="tel" placeholder="Mobile no." name="tel" value={ this.state.tel} onChange={this.setStateFromInput} />
                                {this.validator.message('tel', this.state.tel, 'required|phone|min:8|max:12')}
                            </div>
                            <div className="col-md-6 mt-md-0 mt-4">
                                <label htmlFor="email">Email</label>
                                <input ref={(ref) => this.emailInput= ref} className="form-control" id="email" type="email" placeholder="Email" name="email" value={ this.state.email} onChange={this.setStateFromInput} />
                                {this.validator.message('email', this.state.email, 'required|email')}
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-md-12">
                                <label htmlFor="query">Your message</label>
                                <textarea ref={(ref) => this.mainInput= ref} placeholder="Enter your query" name="query" className="form-control text-area" value={ this.state.query} onChange={this.setStateFromInput}></textarea>
                                {this.validator.message('query', this.state.query, 'required')}
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-12">
                            <button type="submit" className="btn btn-w3_pvt btn-block w-100 font-weight-bold text-uppercase bg-theme1 contact-sub">Send</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default Contactfrom;