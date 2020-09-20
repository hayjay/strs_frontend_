import React from 'react';

const AddCompany = () => {
    return (
        <div className="container" style={{ marginTop:'3%' }}>
            <div class="row justify-content-md-center">
                <div class="col-2">
                </div>
                <div class="col-md-auto">
                        <h4 style={{ color: '#007bff' }}>
                            ADD REPORT
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
                            <label for="exampleInputEmail1">Report Type</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Company name"/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Time</label>
                            <input type="time" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Time"/>
                            
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Assignee</label>
                            <select class="custom-select">
                                <option selected>Select One</option>
                                <option value="1">Nurudeen Ajayi</option>
                                <option value="2">Akeem Lawal</option>
                                <option value="3">Odugbesan Abimbola</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Deadline</label>
                            <input type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
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