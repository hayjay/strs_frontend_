import React from 'react'

const DashboardCard = (props) => {
    return (
        <div className="col">
                <div className="card" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <h6 className="card-subtitle mb-2 text-muted"><a href="">{props.count}</a></h6>
                            
                        </div>
                </div>
        </div>
    )    
}

export default DashboardCard
