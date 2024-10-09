// App.js
import './index.css';
import React, { useState } from 'react'; // Импортируем useState
import AdminMain from './pages/AdminPage/AdminMain';
import About from './pages/About';
import Main from './pages/Main';
import Intensives from './pages/Intensives';
import Specialties from './pages/Specialties';
import { Routes, Route } from 'react-router-dom';
import Notfoundpage from './pages/Notfoundpage';
import AddUser from './pages/AdminPage/AddUser';
import Layout from './components/Layout/Layout';
import LayoutAdmin from './components/Layout/LayoutAdmin';
import AdminStudents from './pages/AdminPage/AdminStudents';
import Administrators from './pages/AdminPage/Administrators';
import EditUser from './pages/AdminPage/EditUser';
import AdminAuth from './pages/AdminPage/AdminAuth';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Устанавливаем начальное состояние

  return (
    <div>
      <Routes>
        {/* Публичные маршруты */}
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='about' element={<About />} />
          <Route path='intensives' element={<Intensives />} />
          <Route path='specialties' element={<Specialties />} />
          <Route path='*' element={<Notfoundpage />} />
        </Route>

        {/* Админ панель */}
        <Route path='/admin' element={<LayoutAdmin isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />}>
          <Route index element={<AdminMain setIsAuthenticated={setIsAuthenticated} />} /> {/* Передаем setIsAuthenticated */}
          <Route path='auth' element={<AdminAuth setIsAuthenticated={setIsAuthenticated} />} />
          <Route path='students' element={<AdminStudents />} />
          <Route path='administrators' element={<Administrators />} />
          <Route path='add' element={<AddUser />} />
          <Route path='edit/:id' element={<EditUser />} />
          <Route path='*' element={<Notfoundpage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
