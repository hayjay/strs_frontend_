import React from 'react';
import { Link } from 'react-router-dom';

const AllCompanies = () => {
    return (
        <div className="container" style={{ marginTop:'3%' }}>
            <div className="row justify-content-md-center">
                <div className="col-2">
                </div>
                <div className="col-md-auto">
                        <h4 style={{ color: '#333' }}>
                            ALL COMPANIES
                        </h4>
                </div>
                <div className="col-2">
                </div>
            </div>

            <div className="row">
                
                <div className="col">
                        <div className="card" style={{ width: '18rem' }}>
                            <Link to="/view-company/microsoft">
                                <div className="card-body">
                                    <h5 className="card-title">MICROSOFT NIGERIA</h5>
                                    <h6 className="card-subtitle mb-2 text-muted"><a href="">www.microsoft.com</a></h6>
                                    <p className="card-text">133, House 159 United States.</p>                            
                                    
                                </div>
                            </Link>
                        </div>
                </div>

                <div className="col">
                    <div className="card" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">GOOGLE INC.</h5>
                            <h6 className="card-subtitle mb-2 text-muted"><a href="">www.google.com</a></h6>
                            <p className="card-text">133, House 159 Bahrain.</p>                            

                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">APPLE LLC.</h5>
                            <h6 className="card-subtitle mb-2 text-muted"><a href="">www.apple.com</a></h6>
                            <p className="card-text">133, House 159 Bahrain.</p>                            

                        </div>
                    </div>
                </div>

                {/* <!-- <div className="col-4">col-4</div> --> */}
            </div>
            <br/><br/>
            <div className="row">
                
                    <div className="col">
                        <div className="card" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <h5 className="card-title">ALPHABETA LIMITED</h5>
                                <h6 className="card-subtitle mb-2 text-muted"><a href="">www.alphabeta.com</a></h6>
                                <p className="card-text">133, House 159 Bahrain.</p>                            
                            </div>
                        </div>
                    </div>
        
                    <div className="col">
                        <div className="card" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <h5 className="card-title">SAMSUNG MOBILE</h5>
                                <h6 className="card-subtitle mb-2 text-muted"><a href="">www.samsungmobile.com</a></h6>
                                <p className="card-text">42, Emak Street VI Lagos.</p>                            
                                
                            </div>
                        </div>
                    </div>
        
                    <div className="col">
                        <div className="card" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <h5 className="card-title">DELL NIGERIA</h5>
                                <h6 className="card-subtitle mb-2 text-muted"><a href="">www.dellnigeria.com</a></h6>
                                <p className="card-text">Block 31, United Kingdom.</p>
                                
                            </div>
                        </div>
                    </div>
        
                    {/* <!-- <div className="col-4">col-4</div> --> */}
                </div>
                    <br/><br/>
            <div className="row">
            
                <div className="col-4">
                    <div className="card" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            
                        </div>
                    </div>
                </div>
    
                <div className="col-4">
                    <div className="card" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            
                        </div>
                    </div>
                </div>
                {/* <!-- <div className="col-4">col-4</div> --> */}
            </div>
        </div>
    )
}

export default AllCompanies