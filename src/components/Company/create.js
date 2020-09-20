import React, { Component } from 'react';
import PageTitle from '../partials/PageTitle';
import { companyCreate } from '../../Controllers/Company';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
class Create extends Component {
    constructor(props){
        super(props);
        this.state = this.initialState();
    }

    initialState = () => {
        return {
            company_name : '',
            company_name_error : '',
            sector : '',
            sector_error : '',
            email : '',
            email_error : '',
            phone : '',
            phone_error : '',
            website : '',
            website_error : '',
            office_address : '',
            office_address_error : '',
            is_loading : false
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    validateForm = () => {
        let error = false;
        let fields = ['company_name', 'sector', 'email', 'phone', 'website', 'address', 'description'];
        let field = '';
        let update = {};
        for (var i = 0; i < fields.length; i++) {
            field = fields[i] + "_error";
            if (!this.state[fields[i]]) {
                update[field] = "Please enter " + fields[i].split('_').join(' ');
                error = true;
            } else {
                update[field] = null;
            }
        }
        this.setState(update);
        return error
    }

    addCompany = (event) => {
        event.preventDefault();

        if(this.validateForm()) {
            return;
        } else {
            this.setState({
                is_loading:true
            });
            companyCreate(this.state)
                .then((response) => {
                    toast.success("Company Added Successfully!", {
                        position : toast.POSITION.TOP_RIGHT
                    });
                    //reset the form and set loading to false
                    this.initialState();
                }).catch((err) => {
                    toast.error(err, {
                        position : toast.POSITION.TOP_RIGHT
                    });
                    this.setState({
                        is_loading:false
                    });
                });

            
        }
    }

    render() {

        return (
            <div className="container" style={{ marginTop:'3%' }}>
            <PageTitle title="ADD NEW COMPANY"/>

            <div className="row">
                <div className="col-3">

                </div>
                
                <div className="col-5">
                    <form onSubmit={ this.addCompany }>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Company Name</label>
                            <input type="text" name="company_name" onChange={ this.handleChange } className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Company name"/>
                            { this.state.company_name_error ? <span className="text-danger">{ this.state.company_name_error }</span> : '' }
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Sector</label>
                            <select required className="custom-select" onChange={ this.handleChange } name="sector">
                                <option selected value="">Select One</option>
                                <option value="1">Finance & Accounting</option>
                                <option value="2">Agriculture</option>
                                <option value="3">Information Communication Technology</option>
                            </select>
                            { this.state.sector_error  ? <small className="text-danger"> { this.state.sector_error } </small> : '' }
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address"/>
                            { this.state.email_error ? <small className="text-danger"> { this.state.email_error } </small> : '' }
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Phone Number</label>
                            <input type="number" name="phone" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Phone number"/>
                            { this.state.phone_error ? <small className="text-danger"> { this.state.phone_error } </small> : '' }

                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Website</label>
                            <input type="text" name="website" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Website"/>
                            { this.state.website_error ? <small className="text-danger"> { this.state.website_error } </small> : '' }

                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Office Address</label>
                            <textarea name="office_address" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Office Address" name="" id="" cols="5" rows="2" ></textarea>
                            { this.state.office_address_error ? <small className="text-danger"> { this.state.office_address_error } </small> : '' }

                        </div>
                        
                        <center>
                                <button type="submit" className="btn btn-primary" disabled={this.state.is_loading}> { this.state.is_loading ? <span><i className="fa fa-spinner fa-spin"></i> Loading </span> : "Submit" } </button>
                        </center>
                    </form>

                </div>
                    
			</div>
            
        </div>
        )
        
    }
}

export default Create