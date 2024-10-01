import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar'

const Layout = () => {
  return (
    <div>
      <Navbar />

      <Outlet />

      <footer>2021</footer>
    </div>
  )
}

export default Layout
