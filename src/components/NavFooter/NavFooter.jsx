import React from 'react'
import Navbar from '../ui/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../ui/Footer/Footer'

const NavFooter = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default NavFooter