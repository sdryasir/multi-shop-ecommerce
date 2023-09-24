import React from 'react'
import Topbar from '../components/Topbar'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import Features from '../components/Features'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Offer from '../components/Offer'
import Vendor from '../components/Vendor'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
        <Topbar/>
        <Navbar/>
        <Carousel/>
        <Features/>
        <Categories/>
        <Products/>
        <Offer/>
        <Vendor/>
        <Footer/>
        <a href="#" className="btn btn-primary back-to-top"><i className="fa fa-angle-double-up"></i></a>
    </>
  )
}

export default Home