import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import First from './components/First'
import About from './components/Pages/About'
import Cart from './components/Pages/Cart'
import Contact from './components/Pages/Contact'
import Home from './components/Pages/Home'
import Products_page from './components/Pages/Products_page'
import Signin from './components/Pages/Signin'
import Signup from './components/Pages/Signup'
import Blogs from './components/Pages/Blogs'
import Count from './hooks/Count'
import FetchData from './hooks/FetchData'
import Main from './hooks/Main'

const MyRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/first' element={<First/>}/>
            {/* <Route path='/second' element={<Second/>}/> */}

            <Route path='/' element={<Home/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/register' element={<Signup/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/products' element={<Products_page/>}/>

            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/blogs' element={<Blogs/>}/>


            {/* hooks  */}
            <Route path='/count' element={<Count/>}/>
            <Route path='/fetchdata' element={<FetchData/>}/>
            <Route path='/main' element={<Main/>}/>

        </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes