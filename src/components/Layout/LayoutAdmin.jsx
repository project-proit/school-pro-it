// LayoutAdmin.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminNavBar0 from '../../pages/AdminPage/AdminNavBar/AdminNavBar0';
import AdminNavBar1 from '../../pages/AdminPage/AdminNavBar/AdminNavBar1';

const LayoutAdmin = ({ isAuthenticated, setIsAuthenticated }) => { // Принимаем setIsAuthenticated
  return (
    <div>
      {isAuthenticated ? (
        <AdminNavBar1 setIsAuthenticated={setIsAuthenticated} /> // Передаем setIsAuthenticated
      ) : (
        <AdminNavBar0 />
      )}

      <Outlet />

      <footer>2021</footer>
    </div>
  )
}

export default LayoutAdmin;
