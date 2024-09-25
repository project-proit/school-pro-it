import React, { useEffect, useState } from 'react';
import AdminAuth from './AdminAuth';
import AdminDashboard from './AdminDashboard';

const AdminMain = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const authToken = localStorage.getItem('authToken');
        setIsAuthenticated(!!authToken);
    }, []);
    
  return (
    <div>
      {/* <AdminNavBar />
      <AdminAuth /> */}
      {/* <AdminNavBar /> */}
        <div>
            {isAuthenticated ? (
                <AdminDashboard />
            ) : (
                <AdminAuth />
            )}
        </div>
    </div>
  )
}

export default AdminMain