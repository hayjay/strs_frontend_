import React from 'react';
import DashboardCard from './cards/DashboardCard';
const Dashboard = () => {
    return (
        <div className="container" style={{ marginTop:'3%', marginLeft:'15%' }}>
            <div className="row">
                <DashboardCard title="TOTAL COMPANY" count="3"/>
                <DashboardCard title="TOTAL REPORTS" count="10"/>
            </div>
            <br/><br/>
            <div className="row">
                
            </div>
        </div>
    )
}

export default Dashboard