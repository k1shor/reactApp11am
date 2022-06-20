import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { productDetails, relatedProduct } from '../api/productApi'
import { isAuthenticated } from '../api/userApi'
import Card from '../Card'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'

const ProductDetails = () => {
    const params = useParams()
    const product_id = params.product_id

    const [product, setProduct] = useState({})
    const [error, setError] = useState('')
    const [relatedProducts, setRelatedProducts] = useState([])

    useEffect(() => {
        productDetails(product_id)
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                    setError(data.error)
                }
                else {
                    setProduct(data)
                }
            })
            .catch(error => console.log(error))

        relatedProduct(product_id)
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                    setError(data.error)
                }
                else {
                    setRelatedProducts(data)
                }
            })
            .catch(error => console.log(error))
    }, [params])

    const showError = () => {
        if (error) {
            return <div className='alert alert-danger'>{error}</div>
        }
    }

    return (
        <>
            <Nav />
            {showError()}
            <div className='container mx-auto m-5 p-5 d-flex shadow'>
                <div className='product-image mx-auto w-50 border-end border-3 text-center'>
                    <img src={`http://localhost:5000/${product.product_image}`} alt={product.product_name} height='300px' />
                </div>
                <div className='product-description mx-auto w-50 ps-5 pt-5'>
                    <h4>Item Name: {product.product_name}</h4>
                    <h5>Price: Rs.{product.product_price}</h5>
                    <p><b>Description:</b> {product.product_description}</p>
                    <p><b>Count in Stock:</b> {product.count_in_stock}</p>

                    {
                        isAuthenticated() && isAuthenticated().user.role === 1 ?
                            <Link to ={`/product/update/${product_id}`}><button className='btn btn-warning'>UPDATE PRODUCT</button></Link>
                            :
                            <button className='btn btn-warning'>ADD TO CART</button>
                    }



                </div>
            </div>

            <div className='container'>
                <h5>Related Products</h5>
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 my-5">
                    {
                        relatedProducts.slice(0,4).map(item => {
                            return <Card item={item} key={item._id} />
                        })
                    }
                </div>
            </div>

            <Footer />
        </>
    )
}

export default ProductDetails