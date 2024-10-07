// AdminMain.js
import React, { useEffect, useState } from 'react';
import AdminAuth from './AdminAuth';
import Applications from './Applications';

const AdminMain = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Начальное состояние

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    setIsAuthenticated(!!authToken); // Проверка аутентификации при монтировании
  }, []);

  return (
    <div>
      <div>
        {isAuthenticated ? (
          <Applications setIsAuthenticated={setIsAuthenticated} /> // Передаем setIsAuthenticated, если это нужно
        ) : (
          <AdminAuth setIsAuthenticated={setIsAuthenticated} /> // Передаем setIsAuthenticated в AdminAuth
        )}
      </div>
    </div>
  );
}

export default AdminMain;
