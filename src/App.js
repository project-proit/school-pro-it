import './index.css';
import React from 'react';
import AdminMain from './pages/AdminPage/AdminMain';

import About from './pages/About'
import Main from './pages/Main'
import Intensives from './pages/Intensives'
import Specialties from './pages/Specialties'
import { Routes, Route } from 'react-router-dom';
import Notfoundpage from './pages/Notfoundpage';
import AddUser from './pages/AdminPage/AddUser';
import Layout from './components/Layout/Layout';
import LayoutAdmin from './components/Layout/LayoutAdmin';
import AdminSpecialties from './pages/AdminPage/AdminSpecialties';
import AdminStudents from './pages/AdminPage/AdminStudents';
import Administrators from './pages/AdminPage/Administrators';
import EditUser from './pages/AdminPage/EditUser';

function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Main />} />
            <Route path='about' element={<About />} />
            <Route path='intensives' element={<Intensives />} />
            <Route path='specialties' element={<Specialties />} />
            <Route path='admin' element={<AdminMain />} />
            <Route path='add' element={<AddUser />} />
            <Route path='edit/:id' element={<EditUser />} />
            <Route path='*' element={<Notfoundpage />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
