import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="container" style={{ marginTop:'1%'}}>
            <ul class="nav nav-tabs" style={{ width:'130%', marginLeft:'100px'}}>
                <li class="nav-item">
                    <Link className="nav-link active" to="/">Dashboard</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link" to="/all-companies">Companies</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link" to="/add-company">Add Company</Link>
                </li>
               
                <li class="nav-item">
                    <Link class="nav-link" to="/reports">Reports</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/report/create">Add Report</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/report-by-company/microsoft">Reports By Companies</Link>
                </li>
                {/* <li class="nav-item">
                    <a class="nav-link" href="#">My Profile</a>
                </li> */}
                <li class="nav-item">
                    <a class="nav-link" href="#">Logout</a>
                </li>
            
            </ul>

            {/* <div className="" style={{ position:'relative' }}>
                <input type="checkbox" id="switch" />
                <label for="switch">Switch</label>
            </div> */}
        </div>
    )
}

const switchButtonLabekStyle = {
    cursor: 'pointer',
	textIndent: '-9999px',
	width: '200px',
	height: '100px',
	background: 'grey',
	display: 'block',
	borderRadius: '100px',
	position: 'relative'
}


export default withRouter(Navbar);