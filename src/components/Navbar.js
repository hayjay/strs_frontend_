import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="container" style={{ marginTop:'1%'}}>
            <ul class="nav nav-tabs" style={{ width:'130%'}}>
                <li class="nav-item">
                    <Link class="nav-link active" to="/">Dashboard</Link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Companies</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Add Company</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">View Single Company</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Reports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">View Single Report</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Reports By Companies</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">My Profile</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Logout</a>
                </li>
            
            </ul>
        </div>
    )
}

export default withRouter(Navbar);