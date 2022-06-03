import React, { useState } from 'react'
import Nav from '../Layout/Nav'
import Footer from '../Layout/Footer'
import { Link, Navigate } from 'react-router-dom'
import { authenticate, isAuthenticated, signin } from '../api/userApi'

const Signin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)

    const {user} = isAuthenticated()


    const clickSubmit = (e) => {
        e.preventDefault()
        signin(email, password)
        .then(data=>{
            if(data.error){
                setError(data.error)
            }
            else{
                authenticate(data, ()=>{
                    setSuccess(true)
                })
            }
        })
        .catch(err=>console.log(err))
    }

    const showError = () => {
        if(error){
            return <div className='alert alert-danger'>{error}</div>
        }
    }

    const redirect = () => {
        if(success){
            if(user && user.role === 0){
                return <Navigate to = '/' />
            }
            if(user && user.role === 1){
                return <Navigate to = '/admin/dashboard'/>
            }
        }
    }

    return (
        <>
        <Nav/>
        {showError()}
        {redirect()}
            <main class="form-signin w-50 mx-auto my-5 shadow-lg p-5 text-center">
                <form>
                    <img class="mb-4" src="./logo192.png" alt="" width="72" height="72" />
                    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

                    <div class="form-floating">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e)=>{setEmail(e.target.value)}} />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
                        <label for="floatingPassword">Password</label>
                    </div>

                    <div class="checkbox mb-3 text-start">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button class="w-100 btn btn-lg btn-primary" type="submit" onClick={clickSubmit}>Sign in</button>
                    <Link to='/forgetpassword'>Forget Password</Link>
                    
                    Do not have an account. <Link to='/register'>Register</Link>


                    <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
                </form>
            </main>

<Footer/>
        </>
    )
}

export default Signin