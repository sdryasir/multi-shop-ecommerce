import React from 'react'
import Topbar from '../components/Topbar'
import Navbar from '../components/Navbar'
import Breadcrumb from '../components/Breadcrumb'
import ShopList from '../components/ShopList'
import Footer from '../components/Footer'

function Shop() {
  return (
    <>
        <Topbar/>
        <Navbar/>
        <Breadcrumb/>
        <ShopList/>
        <Footer/>
    </>
  )
}

export default Shop