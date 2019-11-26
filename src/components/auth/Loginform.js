import React, { useState, useEffect } from 'react';

const validate = (values) => {
    let errors = {};
    if(!values.uname) {
        errors.uname = 'Username is required';
    } else if (values.uname.length < 8 ){
        errors.uname = 'User name must be minimum 8 charecters';
    }
    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password.length < 8) {
        errors.password = 'Password must be 8 or more characters';
    }
    return errors;
}

const useForm = (callback, validate) => {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    })
    
    const handleChange = (event) => {
        event.persist();
        setValues(values => ({...values, [event.target.name]:event.target.value}))
    }

    const submitForm = (event) => {
        if(event) {
            event.preventDefault();
            setErrors(validate(values));
            setIsSubmitting(true);
        }
    }

    return {
        handleChange, submitForm, values, errors
    }
}

function Loginform() {

    const { handleChange, submitForm, values, errors } = useForm(login, validate);

    function login() {
               
        // if(values.uname === "admin123" && values.password === "admin321") {
        //     console.log('Login successfully');
        //     errors.cridential = "Login done";
        // } 
        // else if(values.uname === "admin123" && values.password !== "admin321") {
        //     errors.cridential = "Password is incorrect";
        // }
        // else if(values.uname !== "admin123" && values.password) {
        //     errors.cridential = "User does not exist";
        // } 
        // else {
        //     errors.cridential = "Invalid username and password";
        // }
        // return errors;
        let users = [{ id: 1, username: 'test1234', password: 'test1234', firstName: 'Test', lastName: 'User' }];
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call
            setTimeout(() => {

                // authenticate
                if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
                    // get parameters from post request
                    let params = JSON.parse(opts.body);

                    // find if any user matches login credentials
                    let filteredUsers = users.filter(user => {
                        return user.username === params.username && user.password === params.password;
                    });

                    if (filteredUsers.length) {
                        // if login details are valid return user details
                        let user = filteredUsers[0];
                        let responseJson = {
                            id: user.id,
                            username: user.username,
                            firstName: user.firstName,
                            lastName: user.lastName
                        };
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) });
                    } else {
                        // else return error
                        reject('Username or password is incorrect');
                    }

                    return;
                }

                // get users
                if (url.endsWith('/users') && opts.method === 'GET') {
                    // check for fake auth token in header and return users if valid, this security 
                    // is implemented server side in a real application
                    if (opts.headers && opts.headers.Authorization === `Basic ${window.btoa('test:test')}`) {
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(users)) });
                    } else {
                        // return 401 not authorised if token is null or invalid
                        resolve({ status: 401, text: () => Promise.resolve() });
                    }

                    return;
                }

                // pass through any requests not handled above
                realFetch(url, opts).then(response => resolve(response));

            }, 500);
        });
    }
    }

    return(
       <div className="loginform">
            <div className="register-top1 pb-lg-4">
                <form className="register-wthree" onSubmit={submitForm} noValidate>
                    <div className="form-group">
                        { errors.cridential && (<div className="row"><div className="col-md-12 mb-4"><p className="error">{errors.cridential}</p></div></div>) }
                        <div className="row">
                            <div className="col-md-12 mb-4">
                                <label>User name</label>
                                <input autoComplete="off" onChange={handleChange} value={values.uname || ''} required className="form-control" type="text" name="uname" placeholder="User name" />
                                {errors.uname && (
                                    <p className="error">{errors.uname}</p>
                                )}
                            </div>
                            <div className="col-md-12 mb-4">
                                <label>Password</label>
                                <input autoComplete="off" onChange={handleChange} value={values.password || ''} required className="form-control" type="password" placeholder="Password" name="password" />
                                {errors.password && (
                                    <p className="error">{errors.password}</p>
                                )}
                            </div>
                            <div className="col-md-12 mt-4">
                                <button type="submit" className="btn btn-w3_pvt font-weight-bold text-uppercase bg-theme1 contact-sub">Login</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
       </div>
    )
}


export default Loginform;