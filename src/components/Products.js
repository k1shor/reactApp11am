import React from 'react'
import MyComponent from '../hooks/MyComponent'
import './product.css'

const Products = () => {
    return (
        <>
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 my-5">
                <MyComponent image='./mobile_img/img1.png' title='Card title' description='this is description'/>
                
                <div className="col">
                    <div className="card shadow-lg mb-3">
                        <img src="./mobile_img/img1.png" className="card-img-top custom-product-image" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">Card title</h5>
                            <buttton className='btn btn-success'>View Details</buttton>
                        </div>
                    </div>
                </div>
                <MyComponent image="./mobile_img/img2.jpg" title='title' description=''></MyComponent>
                <div className="col">
                    <div className="card shadow-lg mb-3">
                        <img src="./mobile_img/img2.jpg" className="card-img-top custom-product-image" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">Card title</h5>
                            <buttton className='btn btn-success'>View Details</buttton>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow-lg mb-3">
                        <img src="./mobile_img/img3.jpg" className="card-img-top custom-product-image" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">Card title</h5>
                            <buttton className='btn btn-success'>View Details</buttton>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow-lg mb-3">
                        <img src="./mobile_img/img1.png" className="card-img-top custom-product-image" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">Card title</h5>
                            <buttton className='btn btn-success'>View Details</buttton>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow-lg mb-3">
                        <img src="./mobile_img/img2.jpg" className="card-img-top custom-product-image" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">Card title</h5>
                            <buttton className='btn btn-success'>View Details</buttton>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow-lg mb-3">
                        <img src="./mobile_img/img3.jpg" className="card-img-top custom-product-image" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">Card title</h5>
                            <buttton className='btn btn-success'>View Details</buttton>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow-lg mb-3">
                        <img src="./mobile_img/img1.png" className="card-img-top custom-product-image" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">Card title</h5>
                            <buttton className='btn btn-success'>View Details</buttton>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow-lg mb-3">
                        <img src="./mobile_img/img2.jpg" className="card-img-top custom-product-image" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">Card title</h5>
                            <buttton className='btn btn-success'>View Details</buttton>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Products