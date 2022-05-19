import React from 'react'
import Footer from './Layout/Footer'
import Nav from './Layout/Nav'
import Home from './Pages/Home'

const First = () => {
  return (
    <>
      <Nav/>

      <h2 className='custom-heading'>this is another heading</h2>
<Home/>      <Footer/>
      </>
  )
}

export default First