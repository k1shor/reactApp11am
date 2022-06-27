import React, { useEffect, useState } from 'react'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'
import { useSelector, useDispatch } from 'react-redux'
import { removeItemFromCart } from '../reducers/actions/cartActions'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
    // const cart_items = JSON.parse(localStorage.getItem("cart_items"))

    const cart_items = useSelector(state => state.cart.cartItems)
    const [order_quantity, setOrderQuantity] = useState(0)
    const [order_total, setOrderTotal] = useState(0)

    const dispatch = useDispatch()
    
    useEffect(() => {
        if(cart_items.length>0){
            console.log(cart_items)
            const quantity_array = cart_items.map(item => item.quantity)
            setOrderQuantity(quantity_array.reduce((acc, cur) => acc + cur))
    
            const price_array = cart_items.map(item => item.price * item.quantity)
            setOrderTotal(price_array.reduce((acc, cur) => acc + cur))
        }
        else{
            setOrderQuantity(0)
            setOrderTotal(0)
        }
    }, [cart_items])

    const removeFromCart = (id) => {
        dispatch(removeItemFromCart(id))
        toast("item removed from cart")
    }

    return (
        <>
        <ToastContainer theme='colored' position='top-right'/>
            <Nav />
            <div className='d-flex'>
                <div className='container mx-auto' style={{ width: '65%' }}>
                   {cart_items.length> 0 ?
                    <table className="table my-5 shadow-lg table-striped table-hover text-center align-middle table-bordered ">
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
                                                <button className='btn btn-success'>+</button>

                                            </div>
                                        </td>
                                        <td width={'5%'}>
                                            <button className='btn btn-danger' onClick={()=>removeFromCart(item.product)}>
                                            <i class="bi bi-trash3"></i>
                                            </button>
                                        </td>
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
                        <p>Order Items: <br/><b className='fs-3'> {order_quantity}</b></p>
                        <p>Total Order Price: <br/><b className='fs-3'>Rs. {order_total}</b> </p>
                        <hr className='my-2' />
                        <button className='btn btn-warning'>Confirm Order</button>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Cart