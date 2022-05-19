import React from 'react'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <>
            <Nav />
            <main class="form-signin w-50 mx-auto my-5 shadow-lg p-5 text-center">
                <form>
                    <img class="mb-4" src="./logo192.png" alt="" width="72" height="72" />
                    <h1 class="h3 mb-3 fw-normal">Register</h1>

                    <div class="form-floating mb-2">
                        <input type="text" class="form-control" id="floatingName" placeholder="Name" />
                        <label for="floatingName">Name</label>
                    </div>
                    <div class="form-floating mb-2">
                        <input type="date" class="form-control" id="floatingDate" placeholder="Date of Birth" />
                        <label for="floatingDate">Date of Birth</label>
                    </div>
                    
                        <label className='form-control text-start d-flex mb-2'>Gender:
                        {/* <div className='d-flex'> */}
                            <div class="form-check">
                                <input class="form-check-input mt-1 me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Male
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input  mt-1 me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Female
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input  mt-1 me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                <label class="form-check-label" for="flexRadioDefault3">
                                    Others
                                </label>
                            {/* </div> */}
                            </div>
                        </label>
                    


                    <div class="form-floating mb-2">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating mb-2">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Password</label>
                        </div>
                    <div class="form-floating mb-2">
                        <input type="password" class="form-control" id="floatingCPassword" placeholder="Confirm Password" />
                        <label for="floatingCPassword">Confirm Password</label>
                    </div>

                    <div class="checkbox mb-3 text-start">
                        <label>
                            <input type="checkbox" value="remember-me" /> I agree to terms and conditions.
                        </label>
                    </div>
                    <button class="w-100 btn btn-lg btn-primary" type="submit">Register</button>
                    Already have an account. <Link to='/signin'>Sign in</Link>


                    <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
                </form>
            </main>


            <Footer />
        </>
    )
}

export default Signup