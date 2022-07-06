import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../api/userApi'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'
import { userOrder } from '../reducers/actions/orderAction'

const UserProfile = () => {
    const { user, token } = isAuthenticated()

    const orderStore = useSelector(state => state.userOrder)
    const orders = orderStore.order

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(userOrder(user._id, token))
    }, [])
    return (
        <>
            <Nav />
            <div className='container mx-auto my-5'>
<h4 className='text-center mt-5 border-bottom border-3'>Order History</h4>
                <table className='table mt-5 shadow-lg'>
                    <thead>
                        <tr>
                            <td>SNO.</td>
                            <td>No. of items</td>
                            <td>Products</td>
                            <td>Total Amount</td>
                            <td>Status</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders &&
                            orders.map((item, i) => {
                                return <tr>
                                    <td>{i + 1}</td>
                                    <td>
                                        {item.orderItems.length}
                                    </td>
                                    <td>
                                        {
                                            item.orderItems.map(product => {
                                                return <h6>{product.product.product_name}-Rs. {product.product.product_price}</h6>
                                            })}
                                    </td>
                                    <td>Rs. {item.total_price}</td>
                                    <td>{item.status}</td>
                                    <td>
                                        <Link to={`/orderdetails/${item._id}`}>View Details</Link></td>
                                </tr>
                            })

                        }
                    </tbody>
                </table>
            </div>

            <Footer />

        </>
    )
}

export default UserProfile