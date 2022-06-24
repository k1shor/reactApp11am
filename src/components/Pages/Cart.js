import React, { useEffect, useState } from 'react'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'
import { useSelector } from 'react-redux'

const Cart = () => {
    // const cart_items = JSON.parse(localStorage.getItem("cart_items"))

    const cart_items = useSelector(state => state.cart.cartItems)
    const [order_quantity, setOrderQuantity] = useState(0)
    const [order_total, setOrderTotal] = useState(0)
    useEffect(() => {
        console.log(cart_items)
        const quantity_array = cart_items.map(item => item.quantity)
        setOrderQuantity(quantity_array.reduce((acc, cur) => acc + cur))

        const price_array = cart_items.map(item => item.price * item.quantity)
        setOrderTotal(price_array.reduce((acc, cur) => acc + cur))
    }, [])

    return (
        <>
            <Nav />
            <div className='d-flex'>
                <div className='container mx-auto w-75'>
                    <table className="table my-5 w-75 shadow-lg table-striped table-hover text-center align-middle table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">SNO</th>
                                <th scope="col">Product Image</th>
                                <th scope="col">Product</th>
                                <th>Number</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart_items.map((item, i) => {
                                    return <tr>
                                        <td width={'5%'}>{i + 1}</td>
                                        <td width={'40%'}><img src={`http://localhost:5000/${item.image}`} alt={item.name} style={{ height: 200 }} /></td>
                                        <td width={'30%'}>
                                            <h4>{item.name}</h4>
                                            <h5>Rs. {item.price}</h5>
                                        </td>
                                        <td width={'15%'}>
                                            <div className='d-flex'>
                                                <button className='btn btn-warning'>-</button>
                                                <input type={'text'} value={item.quantity} readOnly className='form-control text-center' />
                                                <button className='btn btn-warning'>+</button>

                                            </div>
                                        </td>
                                        <td width={'5%'}>
                                            <button className='btn btn-danger'>Remove</button>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className='container p-3 w-25 mt-5 me-5'>
                    <h3>No. of items in the cart: {order_quantity}</h3>
                    <h3>Total Order Price: {order_total} </h3>
                    <hr />
                    <button className='btn btn-warning'>Confirm Order</button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Cart