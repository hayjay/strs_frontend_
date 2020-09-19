import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const AddCompany = () => {
    return (
        <div className="container" style={{ marginTop:'3%' }}>
            <div class="row justify-content-md-center">
                <div class="col-2">
                </div>
                <div class="col-md-auto">
                        <h4 style={{ color: '#007bff' }}>
                            ADD COMPANY
                        </h4>
                </div>
                <div class="col-2">
                </div>
            </div>

            <div className="row">
                <div class="col-3">

                </div>
                
                <div class="col-5">
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Company Name</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Company name"/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Sector</label>
                            <select class="custom-select">
                                <option selected>Select One</option>
                                <option value="1">Finance & Accounting</option>
                                <option value="2">Agriculture</option>
                                <option value="3">Information Communication Technology</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address"/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Phone Number</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Phone number"/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Website</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Website"/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Office Address</label>
                            <textarea class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Office Address" name="" id="" cols="5" rows="2" ></textarea>
                        </div>
                        
                        <center>
                                <button type="submit" class="btn btn-primary">Submit</button>
                        </center>
                    </form>

                </div>
                    
			</div>
            
        </div>
    )
}

export default AddCompany