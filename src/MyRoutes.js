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
import UserConfirmation from './components/Pages/UserConfirmation'
import ForgetPassword from './components/Pages/ForgetPassword'
import ResetPassword from './components/Pages/ResetPassword'
import AdminDashboard from './components/Pages/AdminDashboard'
import AddCategory from './components/Pages/Admin/AddCategory'
import ViewCategories from './components/Pages/Admin/ViewCategories'
import CategoryDetails from './components/Pages/Admin/CategoryDetails'
import AdminRoute from './Route/AdminRoute'
import PrivateRoute from './Route/PrivateRoute'
import AddProduct from './components/Pages/Admin/AddProduct'

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/first' element={<First />} />
        {/* <Route path='/second' element={<Second/>}/> */}

        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/' element={<PrivateRoute />}>
          <Route path='/cart' element={<Cart />} />
        </Route>


        <Route path='/products' element={<Products_page />} />

        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blogs' element={<Blogs />} />

        <Route path='/email/confirmation/:token' element={<UserConfirmation />} />
        <Route path='/forgetpassword' element={<ForgetPassword />} />
        <Route path='/resetpassword/:token' element={<ResetPassword />} />

        <Route path='/' element={<AdminRoute />}>
          <Route path='/admin/dashboard' element={<AdminDashboard />} />
          <Route path='/admin/addcategory' element={<AddCategory />} />
          <Route path='/admin/viewcategory' element={<ViewCategories />} />
          <Route path='/admin/category/:id' element={<CategoryDetails />} />
          <Route path='/admin/addproduct' element={<AddProduct/>}/>
        </Route>

        {/* hooks  */}
        <Route path='/count' element={<Count />} />
        <Route path='/fetchdata' element={<FetchData />} />
        <Route path='/main' element={<Main />} />

      </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes