import React, { useEffect, useRef, useState } from 'react'
import './AdminNavBar.css';
import LogoAdmin1 from '../../../assets/LogoAdmin1.png';
import LogoAdmin2 from '../../../assets/LogoAdmin2.png';
import { HiMenu } from "react-icons/hi";
import { Link } from 'react-router-dom'

const AdminNavBar1 = () => {
  const [nav, setNav] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setNav(false);
      }
    }
    document.addEventListener("mousedown", handler);

    return() => {
      document.removeEventListener("mousedown", handler);
    }
  });

  return (
    <div className='header'>
      <div className='header-content'>
        <div className='logos'>
            <img src={LogoAdmin1} alt='Logo1' />
            <img src={LogoAdmin2} alt='Logo2' />
        </div>
        
        <div className='menu-1' ref={menuRef}>
          <Link className='hello' to=''>Hello, admin!</Link>
          <div  onClick={() => {setNav(!nav)}} className='btn-open-menu'><HiMenu className='icon-menu'/></div>
          <nav className={`dropdown__menu ${nav? 'active' : 'inactive'}`}>
            <ul className='ul-open-menu'>
              <li><Link to=''className="menu__item">Заявки</Link></li>
              <li><Link to='' className="menu__item">Ученики</Link></li>
              <li><Link to='' className="menu__item">Направления</Link></li>
              <li><Link to='' className="menu__item">Администраторы</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default AdminNavBar1
