import React from 'react';

const Reports = () => {
    return (
        <div className="container" style={{ marginTop:'3%' }}>
            <div class="row justify-content-md-center">
                <div class="col-2">
                </div>
                <div class="col-md-auto">
                        <h4 style={{ color: '#007bff' }}>
                            Reports
                        </h4>
                </div>
                <div class="col-2">
                </div>
            </div>

            <div className="row">
                <div class="col-1">

                </div>
                
                <div class="col-10">
                <table class="table table-striped">
                            <thead>
                              <tr>
                                <th scope="col">S/N</th>
                                <th scope="col">Company</th>
                                <th scope="col">Report Type</th>
                                <th scope="col">Time</th>
                                <th scope="col">Assignee</th>
                                <th scope="col">Deadline</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">1</th>
                                <td>Microsoft Nigeria</td>
                                <td>Budget</td>
                                <td>9:00AM</td>
                                <td>Nurudeen Ajayi</td>
                                <td>March 03, 2022</td>

                              </tr>
                              <tr>
                                <th scope="row">2</th>
                                <td>Google</td>
                                <td>Education</td>
                                <td>12:45PM</td>
                                <td>Adeyele Rebecca</td>
                                <td>April 03, 2021</td>
                              </tr>
                              <tr>
                                <th scope="row">3</th>
                                <td>Apple</td>
                                <td>Technical</td>
                                <td>1:05:00PM</td>
                                <td>Jonh Maxwell</td>
                                <td>March 09, 2018</td>
                              </tr>
                              <tr>
                                <th scope="row">4</th>
                                <td>LinkedIn</td>
                                <td>Youth Empowerment</td>
                                <td>1:00PM</td>
                                <td>Akeem Tijani</td>
                                <td>March 03, 2022</td>
                              </tr>
                            </tbody>
                          </table>
                </div>
                    
			</div>
            
        </div>
    )
}

export default Reports