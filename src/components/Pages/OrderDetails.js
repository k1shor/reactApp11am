import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { isAuthenticated } from '../api/userApi'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'
import { orderDetail } from '../reducers/actions/orderAction'

const OrderDetails = () => {
    const {order_id} = useParams()
    const {user, token} = isAuthenticated()
    const order = useSelector(state=>state.orderDetail)

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(orderDetail(order_id, token))
    },[])
  return (
    <>
    
    <Nav/>
    <div className='container'>
        <h1> Order Details</h1>

    </div>

    <Footer/>
    </>
  )
}

export default OrderDetails