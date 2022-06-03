import React, { useState, useEffect } from 'react'
import { categoryDetails, viewCategories } from '../../api/categoryApi'
import { isAuthenticated } from '../../api/userApi'
import Footer from '../../Layout/Footer'
import Nav from '../../Layout/Nav'
import AdminSidebar from '../AdminSidebar'
import { useParams } from 'react-router-dom'

const CategoryDetails = () => {
    const { user } = isAuthenticated()
    const [category, setCategory] = useState([])
    const params = useParams()
    const category_id = params.id

    useEffect(() => {
        categoryDetails(category_id)
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setCategory(data)
                }
            })
    }, [])


    return (
        <>
            <Nav />
            <div className='row'>
                <div className='col-md-3'>

                    <AdminSidebar name={user.user_name} email={user.email} />
                </div>
                <div className='col-md-9'>
                    <div className='container p-5 mx-auto my-5'>
                        <label>Category Name: </label>
                        <h2>{category.category_name}</h2>
                        <button className='btn btn-warning' onClick={()=>{
                            document.getElementById("update").style.display = "block"
                        }}>UPDATE</button>
                        <button className='btn btn-danger'>DELETE</button>
                    </div>

                    <div className='update_part' id='update' style={{display:"none"}}>
                        <label htmlFor='category_name'>New Category Name:</label>
                        <input type={'text'} />
                        <button className='btn btn-update'>UPDATE</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default CategoryDetails