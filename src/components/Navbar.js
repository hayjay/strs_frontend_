import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="container" style={{ marginTop:'1%'}}>
            <ul class="nav nav-tabs">
			<li class="nav-item">
				<Link class="nav-link active" to="/">Dashboard</Link>
			</li>
			<li class="nav-item dropdown">
				<a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Company</a>
				<div class="dropdown-menu">
				<a class="dropdown-item" href="create-company.html">Add Company</a>
				<a class="dropdown-item" href="single-company.html">View Single Company</a>
				{/* <!-- <a class="dropdown-item" href="#">Something else here</a> --> */}
				<div class="dropdown-divider"></div>
				<Link class="dropdown-item" to="/all-companies">All Companies</Link>
				</div>
			</li>
			
            <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Report</a>
                    <div class="dropdown-menu">
                    <a class="dropdown-item" href="create-report.html">Add Report</a>
                    <a class="dropdown-item" href="single-report.html">View Single Report</a>
                    <a class="dropdown-item" href="report-by-company.html">View Report By Company</a>

                    {/* <!-- <a class="dropdown-item" href="#">Something else here</a> --> */}
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="all-reports.html">All Reports</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">My Profile</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Logout</a>
                </li>
            </ul>
        </div>
    )
}

export default withRouter(Navbar);