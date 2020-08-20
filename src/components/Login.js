//make this class a class based component because we would need to collect user data from the form
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Login extends Component {
    render() {
        return (
            <div className="container" style={containerStyle}>
                <center>
                    <h3>
                        ADMINISTRATORS LOGIN
                    </h3>
                </center>
                <div className="row justify-content-md-center">            
                    <div className="col-6">
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1" className="pull-left">Password</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Password"/>
                            </div>
                            <br/>
                            <center>
                                    <Link to="/all-companies" className="btn btn-primary">Login</Link>
                            </center>
                        </form>
                    </div>

                </div>
            </div>
        )
    }
}

const containerStyle = {
    marginTop:'10%'
}

export default withRouter(Login);  