import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'
import Products from '../Products'

const Products_page = () => {
    return (
        <>
            <Nav />
            <div className='row'>
                <div className='col-md-3'>
                    <h4 className='mt-3'>Departments</h4>
                    <div className="form-check">
                        <input className="form-check-input mt-1 me-2" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">
                            Laptops
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input mt-1 me-2" type="checkbox" value="" id="flexCheckDefault1" />
                        <label className="form-check-label" for="flexCheckDefault1">
                            Mobiles
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input mt-1 me-2" type="checkbox" value="" id="flexCheckDefault2" />
                        <label className="form-check-label" for="flexCheckDefault2">
                            Camera
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input mt-1 me-2" type="checkbox" value="" id="flexCheckDefault3" />
                        <label className="form-check-label" for="flexCheckDefault3">
                            Beauty
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input mt-1 me-2" type="checkbox" value="" id="flexCheckDefault4" />
                        <label className="form-check-label" for="flexCheckDefault4">
                            Home
                        </label>
                    </div>

                    <h4 className='mt-3'>Deals</h4>
                        <li className='list-unstyled ms-4'><Link to="#" className='text-secondary fw-bold text-decoration-none'>Deals of the day</Link></li>
                        <li className='list-unstyled ms-4'><Link to="#" className='text-secondary fw-bold text-decoration-none'>Flash sale</Link></li>
                        <li className='list-unstyled ms-4'><Link to="#" className='text-secondary fw-bold text-decoration-none'>Popular Products</Link></li>


                </div>
                <div className='col-md-9'>
                    <Products />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Products_page