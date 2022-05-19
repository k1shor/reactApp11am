import React from 'react'
import Nav from '../Layout/Nav'
import Footer from '../Layout/Footer'
import { Link } from 'react-router-dom'

const Signin = () => {
    return (
        <>
        <Nav/>
            <main class="form-signin w-50 mx-auto my-5 shadow-lg p-5 text-center">
                <form>
                    <img class="mb-4" src="./logo192.png" alt="" width="72" height="72" />
                    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

                    <div class="form-floating">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Password</label>
                    </div>

                    <div class="checkbox mb-3 text-start">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    Do not have an account. <Link to='/register'>Register</Link>


                    <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
                </form>
            </main>

<Footer/>
        </>
    )
}

export default Signin