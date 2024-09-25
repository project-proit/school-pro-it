import './index.css';
import React from 'react';
import AdminMain from './pages/AdminPage/AdminMain';
import Layout from './components/Layout';
import About from './pages/About'
import Main from './pages/Main'
import Intensives from './pages/Intensives'
import Specialties from './pages/Specialties'
import { Routes, Route } from 'react-router-dom';
import Notfoundpage from './pages/Notfoundpage';
import LayoutAdmin from './components/LayoutAdmin';
import AddUser from './pages/AdminPage/AddUser';

function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Main />} />
            <Route path='about' element={<About />} />
            <Route path='intensives' element={<Intensives />} />
            <Route path='specialties' element={<Specialties />} />
            <Route path='*' element={<Notfoundpage />} />
          </Route>
          <Route path='admin' element={<LayoutAdmin />}>
            <Route index element={<AdminMain />} />
            <Route path='add' element={<AddUser />} />
            <Route path='*' element={<Notfoundpage />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
