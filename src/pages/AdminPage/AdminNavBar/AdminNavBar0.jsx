import React from 'react';
import './AdminNavBar.css';
import LogoAdmin1 from '../../../assets/LogoAdmin1.png';
import LogoAdmin2 from '../../../assets/LogoAdmin2.png';
import { HiArrowLongLeft } from "react-icons/hi2";
import { Link } from 'react-router-dom';

const AdminNavBar0 = () => {
  return (
    <div className='header'>
      <div className='header-content'>
        <div className='logos'>
            <img className='Logo' src={LogoAdmin1} alt='Logo1' />
            <img className='Logo2' src={LogoAdmin2} alt='Logo2' />
        </div>
        <div className='menu'>
          <Link to='/'><HiArrowLongLeft className='arrow-back-menu'/></Link>
          <Link to='/'>Главная</Link>
        </div>
      </div>
    </div>
  )
}

export default AdminNavBar0