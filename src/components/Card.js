import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ item }) => {
    return (
        <>

            <div class="col my-3">
                <div class="card shadow-lg">
                    <img src={`http://localhost:5000/${item.product_image}`} class="card-img-top" alt={item.product_name} height={'150px'} />
                    <div class="card-body text-center">
                        <h5 class="card-title">{item.product_name}</h5>
                        <h6>Rs. {item.product_price}</h6>
                        <p class="card-text text-truncate">{item.product_description}</p>
                        <Link to={`/product/${item._id}`}>
                            <button className='btn btn-warning'>View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card