import React, { Component } from 'react';
import PageTitle from './partials/PageTitle';

class AddCompany extends Component {
    constructor(props){
        super(props);
        this.state = {
            company_name : '',
            sector : '',
            email : '',
            phone : '',
            website : '',
            office_address : '',
            is_loading : false
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    addCompany = (event) => {
        event.preventDefault();
        
        this.setState({
            is_loading:true
        });
    }

    render() {

        return (
            <div className="container" style={{ marginTop:'3%' }}>
            <PageTitle title="ADD NEW COMPANY"/>

            <div className="row">
                <div className="col-3">

                </div>
                
                <div className="col-5">
                    <form>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Company Name</label>
                            <input type="text" name="company_name" onChange={this.handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Company name"/>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Sector</label>
                            <select required className="custom-select" onChange={this.handleChange} name="sector">
                                <option selected value="">Select One</option>
                                <option value="1">Finance & Accounting</option>
                                <option value="2">Agriculture</option>
                                <option value="3">Information Communication Technology</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address"/>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Phone Number</label>
                            <input type="number" name="phone" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Phone number"/>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Website</label>
                            <input type="text" name="website" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Website"/>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Office Address</label>
                            <textarea name="office_address" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Office Address" name="" id="" cols="5" rows="2" ></textarea>
                        </div>
                        
                        <center>
                                <button type="submit" className="btn btn-primary">Submit</button>
                        </center>
                    </form>

                </div>
                    
			</div>
            
        </div>
        )
        
    }
}

export default AddCompany