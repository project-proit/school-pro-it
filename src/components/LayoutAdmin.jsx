import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminNavBar from '../pages/AdminPage/AdminNavBar/AdminNavBar';

const LayoutAdmin = () => {
  return (
    <div>
      <AdminNavBar />

      <Outlet />

      <footer>2021</footer>
    </div>
  )
}

export default LayoutAdmin

