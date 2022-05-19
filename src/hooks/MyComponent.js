import React from 'react'

const MyComponent = (props) => {
    return (
        <>
            <div className="col">
                <div className="card shadow-lg mb-3">
                    <img src={`${props.image}`} className="card-img-top custom-product-image" alt={`${props.title}`} />
                    <div className="card-body text-center">
                        <h5 className="card-title">{props.title}</h5>
                        <h5 className="card-title">{props.description}</h5>
                        <buttton className='btn btn-success'>View Details</buttton>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyComponent