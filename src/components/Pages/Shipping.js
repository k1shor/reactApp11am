import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import CheckoutProgress from '../CheckoutProgress'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'
import {Link} from 'react-router-dom'
import { isAuthenticated } from '../api/userApi'

const Shipping = () => {
    const {user} = isAuthenticated()
    let shipping_info = useSelector(state => state.cart.shipping_info)
    let cart_items = useSelector(state => state.cart.cartItems)
    let order_quantity = 0
    let order_total = 0

    useEffect(() => {
        if (cart_items.length > 0) {
            console.log(cart_items)
            const quantity_array = cart_items.map(item => item.quantity)
            order_quantity = quantity_array.reduce((acc, cur) => acc + cur)

            const price_array = cart_items.map(item => item.price * item.quantity)
            order_total = price_array.reduce((acc, cur) => acc + cur)
        }
        else {
            order_total = 0
            order_quantity = 0
        }
    }, [])

    return (
        <>
            <Nav />
            <CheckoutProgress Shipping />
            <div className='d-flex'>
                <form className='my-5 w-50 shadow-lg p-5 mx-auto'>
                    <label htmlFor='street'>Street</label>
                    <input type={'text'} id='street' className='form-control'/>
                    <label htmlFor='street2'>Street(Alternate)</label>
                    <input type={'text'} id='street2' className='form-control'/>
                    <label htmlFor='city'>City</label>
                    <input type={'text'} id='city' className='form-control'/>
                    <label htmlFor='country'>Country</label>
                    <input type={'text'} id='country' className='form-control'/>
                    <label htmlFor='phone'>Phone Number</label>
                    <input type={'text'} id='phone' className='form-control'/>
                    

                </form>
                <div className='container me-5' style={{ width: '20%' }}>
                    <div className='shadow-lg  p-3 mt-5'>
                        <p>Order Items: <br /><b className='fs-3'> {order_quantity}</b></p>
                        <p>Total Order Price: <br /><b className='fs-3'>Rs. {order_total}</b> </p>
                        <hr className='my-2' />
                        <Link to='/shipping'>
                            <button className='btn btn-warning'>To Shipping</button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default Shipping