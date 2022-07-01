import React, { useState, useEffect } from 'react'
import CheckoutProgress from '../CheckoutProgress'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify'

const Payment = () => {
    const cart_items = useSelector(state => state.cart.cartItems)
    let shipping_info = useSelector(state => state.cart.shipping_info)

    console.log(shipping_info)
    const [order_quantity, setOrderQuantity] = useState(0)
    const [order_total, setOrderTotal] = useState(0)


    useEffect(() => {
        if (cart_items.length > 0) {
            console.log(cart_items)
            const quantity_array = cart_items.map(item => item.quantity)
            setOrderQuantity(quantity_array.reduce((acc, cur) => acc + cur))

            const price_array = cart_items.map(item => item.price * item.quantity)
            setOrderTotal(price_array.reduce((acc, cur) => acc + cur))
        }
        else {
            setOrderQuantity(0)
            setOrderTotal(0)
        }
    }, [cart_items])


    return (
        <>
            <ToastContainer theme='colored' position='top-right' />
            <Nav />
            <CheckoutProgress ConfirmOrder Shipping Payment />
            



            <div className='d-flex'>
                <div className='container mx-auto' style={{ width: '65%' }}>
<h4 className='mt-5'>Payment Information</h4>
<div className='mx-auto w-100 text-start p-5 shadow'></div>


                    <h4 className='mt-5'>Shipping Information</h4>
                <div className='d-flex mx-auto w-100 text-start justify-content-evenly p-5 shadow'>
                <div className='shipping_ifo'>Shipping Address:
                    Street: {shipping_info.street}, <br />
                    City: {shipping_info.city}, <br />
                    Country: {shipping_info.country}<br />
                    Phone: {shipping_info.phone}
                </div>
                {
                    shipping_info.street2 &&
                    <div className='shipping_ifo'>Alternate Shipping Address:
                        Street: {shipping_info.street2}, <br />
                        City: {shipping_info.city}, <br />
                        Country: {shipping_info.country}<br />
                        Phone: {shipping_info.phone}
                    </div>

                }
                <div className='alternate-shipping_info'></div>
            </div>

<h4 className='mt-5'>Order Information</h4>
                    {cart_items.length > 0 ?
                        <table className="table mb-5 shadow-lg table-striped table-hover text-center align-middle table-bordered ">
                            <thead>
                                <tr>
                                    <th>SNO</th>
                                    <th>Product Image</th>
                                    <th>Product</th>
                                    <th>Unit Price</th>
                                    <th>Number</th>
                                    <th>Total Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart_items.map((item, i) => {
                                        return <tr>
                                            <td>{i + 1}</td>
                                            <td><img src={`http://localhost:5000/${item.image}`} alt={item.name} style={{ height: 200 }} /></td>
                                            <td>
                                                <h4>{item.name}</h4>
                                            </td>
                                            <td>
                                                <h5>Rs. {item.price}</h5>
                                            </td>
                                            <td>
                                                <h4>
                                                    {item.quantity}
                                                </h4>
                                            </td>
                                            <td><h4>
                                                Rs. {item.price * item.quantity}
                                            </h4></td>

                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                        :
                        <div className='alert alert-danger mt-5'>No items in cart</div>

                    }

                </div>
                <div className='container me-5' style={{ width: '20%' }}>
                    <div className='shadow-lg  p-3 mt-5'>
                        <p>Order Items: <br /><b className='fs-3'> {order_quantity}</b></p>
                        <p>Total Order Price: <br /><b className='fs-3'>Rs. {order_total}</b> </p>
                        <hr className='my-2' />

                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}

export default Payment