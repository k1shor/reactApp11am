import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { isAuthenticated } from '../api/userApi'
import Card from '../Card'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'
import { orderDetail } from '../reducers/actions/orderAction'

const OrderDetails = () => {
    const { user, token } = isAuthenticated()
    const orderStore = useSelector(state => state.orderDetail)
    const order = orderStore.order
    const { order_id } = useParams()
    const dispatch = useDispatch()
    console.log(order)
    useEffect(() => {
        dispatch(orderDetail(order_id, token))
    }, [])

    return (
        <>

            <Nav />
            <div className='container my-5 mx-auto p-5 '>
                <h1 className='text-center'> Order Details</h1>
                <hr />
                {
                    order &&
                    <>
                        <h3>Order ID: <u>{order._id}</u></h3>
                        <h3>Total Price: <u>Rs. {order.total_price}</u></h3>
                        <h3>No. of items: <u>{order.orderItems.length}</u></h3>
                        <h3>Status: <u>{order.status}</u></h3>

                        <h3 className='text-start'>Order Items: </h3>
                        <div className='row row-cols-md-3'>
                            {
                                order.orderItems.map(item => {
                                    return <>
                                        <div class="col my-3">
                                            <div class="card shadow-lg">
                                                <img src={`http://localhost:5000/${item.product.product_image}`} class="card-img-top" alt={item.product.product_name} height={'150px'} />
                                                <div class="card-body text-center">
                                                    <h5 class="card-title">{item.product.product_name}</h5>
                                                    <h6>Rs. {item.product.product_price}</h6>
                                                    <p class="card-text text-truncate">{item.product.product_description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                })
                            }
                        </div>

                        <Link to ='/userprofile'><h4>Go Back</h4></Link>
                    </>
                }


            </div>

            <Footer />
        </>
    )
}

export default OrderDetails