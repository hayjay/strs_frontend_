//make this class a class based component because we would need to collect user data from the form
import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { isAuthenticated, login } from '../Utility/utils';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



toast.configure()
class Login extends Component {
    constructor(props) {
        /*
            Call super props because we've implemented the constructor .. 
            call super(props) so as toavoid the undefined issue in the constructor 
            which could lead to bug while trying to access any of our class state properties
        **/
        super(props);
        this.state = {
            email : '',
            password : '',
            loading : false
        };
    }

    handleInputChange = (user_key_event) => {
        this.setState({
            // maps the name pro
            [user_key_event.target.name] : user_key_event.target.value
        });
    }

    submitLogin = (event) => {
        event.preventDefault();
        // trigger the loader while the application is processing the request
        //activate the loading spinner since user has clicked the submit button
        this.setState({ loading : true });
        
        login(this.state)
            .then((res) => {
                window.location = '/reports';
                toast.success("Login Successful!", {
                        position : toast.POSITION.TOP_RIGHT
                });
                this.setState({ loading : false })    
            })
            .catch((err) => {
                let message = err.response ? err.response.data ? err.response.data.message: err.response.status: err.message;
	    		toast.error(message, {
			    	position: toast.POSITION.TOP_RIGHT
			    });
			    this.setState({loading: false});
            });

    }
    
    render() {
        const userAuth = isAuthenticated();
        if(userAuth) {
            const { from } = this.props.location.state || { 
                from : { pathname : '/reports' } 
            }
            /**
             * If user is already authenticated then the application should redirect the user to where he was coming from.
             * Else if user isn't coming from anywhere in the application and maybe he just finished login in successfully then take the user to the reports page. Here system assumes that user is logged in
            */
            return <Redirect to={ from }/>
        }
        
        return (
            <div className="container" style={containerStyle}>
                <center>
                    <h3>
                        ADMINISTRATORS LOGIN
                    </h3>
                </center>
                <div className="row justify-content-md-center">            
                    <div className="col-6">
                        <form onSubmit={this.submitLogin}>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email</label>
                                <input type="email" className="form-control" onChange={this.handleInputChange} id="exampleInputEmail1" name="email" placeholder="Email"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1" className="pull-left">Password</label>
                                <input type="password" className="form-control" onChange={this.handleInputChange} id="exampleInputEmail1" name="password" placeholder="Password"/>
                            </div>
                            <br/>
                            <center>
                                    {/* <Link to="/all-companies" className="btn btn-primary">Login</Link> */}
                                    <button type="submit" className="btn btn-primary" id="login-submit" disabled={this.state.loading}> { this.state.loading ? <span>Loading..</span> : "Login"}</button>
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