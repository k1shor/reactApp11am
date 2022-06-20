import React from 'react'
import Carousel from '../Carousel'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'
import Products from '../Products'



const Home = () => {
  return (
    <>
      <Nav />
      <Carousel/>
      <Products/>
      <Footer />
    </>
  )
}

export default Home