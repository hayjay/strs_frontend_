//make this class a class based component because we would need to collect user data from the form
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Login extends Component {
    render() {
        return (
            <div className="container" style="margin-top:10%;">
                <center>
                    <h3>
                        ADMINISTRATORS LOGIN
                    </h3>
                </center>
                <div className="row justify-content-md-center">            
                    <div className="col-6">
                        <form>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Password</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Password">
                            </div>
                            <br>
                            <center>
                                    <a href="all-companies.html" className="btn btn-primary">Login</a>
                            </center>
                        </form>
                    </div>

                </div>
            </div>
        )
    }
}