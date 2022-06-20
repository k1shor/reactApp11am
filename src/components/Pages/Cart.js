import React from 'react'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'

const Cart = () => {
    return (
        <>
        <Nav/>

        

        <div className='container mx-auto'>
            <table className="table my-5 shadow-lg table-striped table-hover text-center">
                <thead>
                    <tr>
                        <th scope="col">SNO</th>
                        <th scope="col">Product Image</th>
                        <th scope="col">Product Description</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td><img src='./mobile_img/img1.png' alt='' style={{height:200}}/></td>
                        <td>
                            <h4>Real Me</h4>
                            <h5>Rs. 25,000</h5>
                            <h6>5inch display,Dual core processor, 6 gb ram, 1 tb storage</h6>
                        </td>
                        <td>
                            <button className='btn btn-warning me-1'>Update</button>
                            <button className='btn btn-danger'>Remove</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td><img src='./mobile_img/img2.jpg' alt='' style={{height:200}}/></td>
                        <td>
                            <h4>Samsung A31</h4>
                            <h5>Rs. 25,000</h5>
                            <h6>5inch display,Dual core processor, 6 gb ram, 1 tb storage</h6>
                        </td>
                        <td>
                            <button className='btn btn-warning me-1'>Update</button>
                            <button className='btn btn-danger'>Remove</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td><img src='./mobile_img/img3.jpg' alt='' style={{height:200}}/></td>
                        <td>
                            <h4>Samsung F22</h4>
                            <h5>Rs. 25,000</h5>
                            <h6>5inch display,Dual core processor, 6 gb ram, 1 tb storage</h6>
                        </td>
                        <td>
                            <button className='btn btn-warning me-1'>Update</button>
                            <button className='btn btn-danger'>Remove</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td><img src='./mobile_img/img1.png' alt='' style={{height:200}}/></td>
                        <td>
                            <h4>Real Me</h4>
                            <h5>Rs. 25,000</h5>
                            <h6>5inch display,Dual core processor, 6 gb ram, 1 tb storage</h6>
                        </td>
                        <td>
                            <button className='btn btn-warning me-1'>Update</button>
                            <button className='btn btn-danger'>Remove</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td><img src='./mobile_img/img1.png' alt='' style={{height:200}}/></td>
                        <td>
                            <h4>Real Me</h4>
                            <h5>Rs. 25,000</h5>
                            <h6>5inch display,Dual core processor, 6 gb ram, 1 tb storage</h6>
                        </td>
                        <td>
                            <button className='btn btn-warning me-1'>Update</button>
                            <button className='btn btn-danger'>Remove</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
            <Footer/>
        </>
    )
}

export default Cart