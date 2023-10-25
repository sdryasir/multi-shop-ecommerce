import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from '../components/Topbar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function RootLayout() {
  return (
    <>
        <Topbar/>
        <Navbar/>
            <Outlet/>
        <Footer/>
    </>
  )
}

export default RootLayout