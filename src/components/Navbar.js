import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { isAuthenticated } from '../Utility/utils';

class Navbar extends Component {
    render() {
        const navLinks = isAuthenticated() ? (
            <>
                <li className="nav-item">
                            <Link className="nav-link active" to="/dashboard">Dashboard</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/all-companies">Companies</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/add-company">Add Company</Link>
                </li>
                
                <li className="nav-item">
                    <Link className="nav-link" to="/reports">Reports</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/report/create">Add Report</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/report-by-company/microsoft">Reports By Companies</Link>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#">Logout</a>
                </li>
            </>
        ) : (
            <>
                <li className="nav-item">
                 <a className="nav-link" href="#">Signup</a>
                </li>
            </>
        )   

        return (
            <div className="container" style={{ marginTop:'1%'}}>
                <ul className="nav nav-tabs" style={{ width:'130%', marginLeft:'100px'}}>
                    {navLinks}
                </ul>
            </div>
        )
    }

}



export default Navbar;