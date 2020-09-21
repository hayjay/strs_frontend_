import React from 'react'

const PageTitle = (props) => {
    return (
        <div className="row justify-content-md-center">
            <div className="col-2">
            </div>
            <div className="col-md-auto">
                    <h4 style={{ color: '#007bff' }}>
                        { props.title }
                    </h4>
            </div>
            <div className="col-2">
            </div>
        </div>
    )
}

export default PageTitle
