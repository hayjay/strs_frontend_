import React from 'react';

const AddCompany = () => {
    return (
        <div className="container" style={{ marginTop:'3%' }}>
            <div className="row justify-content-md-center">
                <div className="col-2">
                </div>
                <div class="col-md-auto">
                        <h4 style={{ color: '#007bff' }}>
                            ADD COMPANY
                        </h4>
                </div>
                <div className="col-2">
                </div>
            </div>

            <div className="row">
                <div className="col-3">

                </div>
                
                <div className="col-5">
                    <form>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Company Name</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Company name"/>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Sector</label>
                            <select className="custom-select">
                                <option selected>Select One</option>
                                <option value="1">Finance & Accounting</option>
                                <option value="2">Agriculture</option>
                                <option value="3">Information Communication Technology</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address"/>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Phone Number</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Phone number"/>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Website</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Website"/>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Office Address</label>
                            <textarea className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Office Address" name="" id="" cols="5" rows="2" ></textarea>
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

export default AddCompany