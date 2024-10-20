// AdminNavBar1.js
import React, { useEffect, useRef, useState } from 'react';
import './AdminNavBar.css';
import LogoAdmin1 from '../../../assets/LogoAdmin1.png';
import LogoAdmin2 from '../../../assets/LogoAdmin2.png';
import { HiMenu } from "react-icons/hi";
import { Link, useNavigate } from 'react-router-dom';

const AdminNavBar1 = ({ setIsAuthenticated }) => { // Передаем setIsAuthenticated
  const [nav, setNav] = useState(false);
  const navigate = useNavigate(); // Для навигации
  let menuRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setNav(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []); // Добавляем пустой массив зависимостей, чтобы обработчик добавлялся только один раз

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Удаляем токен из локального хранилища
    if (setIsAuthenticated) {
      setIsAuthenticated(false); // Обновляем состояние аутентификации
    } else {
      console.error('setIsAuthenticated is not provided');
    }
    navigate('/admin'); // Перенаправляем на главную страницу
  };
  

  return (
    <div className='header'>
      <div className='header-content'>
        <div className='logos'>
          <img className='Logo' src={LogoAdmin1} alt='Logo1' />
          <img className='Logo2' src={LogoAdmin2} alt='Logo2' />
        </div>

        <div className='menu-1' ref={menuRef}>
          <Link className='hello' to=''>Hello, admin!</Link>
          <Link className='exit' to='/' onClick={handleLogout}>Выйти</Link>
          <div onClick={() => { setNav(!nav) }} className='btn-open-menu'><HiMenu className='icon-menu' /></div>
          <nav className={`dropdown__menu ${nav ? 'active' : 'inactive'}`}>
            <ul className='ul-open-menu'>
              <li><Link to='/admin' className="menu__item">Заявки</Link></li>
              <li><Link to='/admin/students' className="menu__item">Ученики</Link></li>
              <li><Link to='/admin/administrators' className="menu__item">Администраторы</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default AdminNavBar1;
