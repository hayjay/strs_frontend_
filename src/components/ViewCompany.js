import React from 'react';

const ViewCompany = () => {
    return (
        <div className="container" style={{ marginTop:'3%' }}>
            <div className="row justify-content-md-center">
                <div className="card" style={{ width: '48rem' }}>
                    <div className="card-body">
                        <center>
                                <h5 className="card-title">MICROSOFT LIMITED</h5>
                        </center>
                        <br/>
                        <h6 className="text-muted">Sector : <a href="">Technology</a></h6>
                        <h6 className="text-muted">Official email : <a href="">admin@microsoft.com</a></h6>
                        <h6 className="text-muted">Contact : <a href="">08033999449</a></h6>
                        <h6 className="text-muted"> Aaddress : <b>23, Akin Adeshola Street VI, Lagos.</b></h6>
                        <h6 className="text-muted">Website : <a href="">www.microsoft.com</a></h6>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default ViewCompany