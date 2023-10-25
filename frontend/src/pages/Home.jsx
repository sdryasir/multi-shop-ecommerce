import React from 'react'
import Carousel from '../components/Carousel'
import Features from '../components/Features'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Offer from '../components/Offer'
import Vendor from '../components/Vendor'

function Home() {
  return (
    <>
        <Carousel/>
        <Features/>
        <Categories/>
        <Products/>
        <Offer/>
        <Vendor/>
        <a href="#" className="btn btn-primary back-to-top"><i className="fa fa-angle-double-up"></i></a>
    </>
  )
}

export default Home