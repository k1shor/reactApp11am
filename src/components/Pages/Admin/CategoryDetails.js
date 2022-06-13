import React, { useState, useEffect } from 'react'
import { categoryDetails, deleteCategory, updateCategory, viewCategories } from '../../api/categoryApi'
import { isAuthenticated } from '../../api/userApi'
import Footer from '../../Layout/Footer'
import Nav from '../../Layout/Nav'
import AdminSidebar from '../AdminSidebar'
import { Link, useNavigate, useParams } from 'react-router-dom'

const CategoryDetails = () => {
    const { user, token } = isAuthenticated()
    const [category, setCategory] = useState([])
    const params = useParams()
    const category_id = params.id
    const [error,setError] = useState('')
    const [success,setSuccess] = useState('')
// update
    const [newCategoryName, setNewCategoryName] = useState('')

    // delete
    const navigate = useNavigate()

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
    }, [success])

    const updateCategoryHandle = (e) => {
        e.preventDefault()
        updateCategory(category_id,newCategoryName, token)
        .then(data=>{
            if(data.error){
                setError(data.error)
                setSuccess('')
            }
            else{
                setSuccess('Category Updated Successfully')
                setError('')
                document.getElementById("update").style.display = "none"            
            }
        })
    }

    const deleteCategoryHandle = (e) => {
        e.preventDefault()
        deleteCategory(category_id,token)
        .then(data=>{
            if(data.error){
                setError(data.error)
                setSuccess('')
            }
            else{
                setSuccess('Category deleted Successfully')
                setError('')
                navigate('/admin/viewcategory')
            }
        })
    }
    
    const showError =()=>{
        if(error){
            return <div className='alert alert-danger'>{error}</div>
        }
    }
    const showSuccess =()=>{
        if(success){
            return <div className='alert alert-success'>{success}</div>
        }
    }


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
                        <button className='btn btn-danger' onClick={deleteCategoryHandle}>DELETE</button>
                    </div>
                    {showError()}
                    {showSuccess()}

                    <div className='update_part' id='update' style={{display:"none"}}>
                        <label htmlFor='category_name'>New Category Name:</label>
                        <input type={'text'} onChange={(e)=>setNewCategoryName(e.target.value)} 
                        value={newCategoryName}/>
                        <button className='btn btn-update' onClick={updateCategoryHandle}>UPDATE</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default CategoryDetails