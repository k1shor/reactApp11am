import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { findProducts } from '../api/productApi'
import Card from '../Card'
import Checkbox from '../Checkbox'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'

const Products_page = () => {
    const [products, setProducts] = useState([])
    const [sortBy, setSortBy] = useState('createdAt')
    const [order, setOrder] = useState('1')
    const [limit, setLimit] = useState(8)
    const [error, setError] = useState('')

    useEffect(() => {
        findProducts(sortBy, order, limit)
            .then(data => {
                if (data.error) {
                    setError(data.error)
                }
                else {
                    setProducts(data)
                }
            })
            .catch(err => console.log(err))
    }, [sortBy, order, limit])

    const showError = () => {
        if(error){
            return <div className='alert alert-danger'>{error}</div>
        }
    }

    return (
        <>
            <Nav />
            {showError()}
            <div className='row'>
                <div className='col-md-3'>
                    <h4 className='mt-3'>Departments</h4>
                    <Checkbox/>

                    <h4 className='mt-3'>Deals</h4>
                    <li className='list-unstyled ms-4'><Link to="#" className='text-secondary fw-bold text-decoration-none'>Deals of the day</Link></li>
                    <li className='list-unstyled ms-4'><Link to="#" className='text-secondary fw-bold text-decoration-none'>Flash sale</Link></li>
                    <li className='list-unstyled ms-4'><Link to="#" className='text-secondary fw-bold text-decoration-none'>Popular Products</Link></li>


                </div>
                <div className='col-md-9'>
                    <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
                        {
                            products.map(item => { return <Card item={item}/>})
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Products_page