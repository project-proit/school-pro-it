import React, { useState } from 'react';
import style from './Navbar.module.css';
import Logo from '../../assets/LogoSchool.png';
import LogoText from '../../assets/LogoOffice.png';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

	const [button, setButton] = useState(true);

	const showButton = () => {
		if(window.innerWidth <= 700) {
			setButton(false);
		} else {
			setButton(true)
		}
	};

	window.addEventListener('resize', showButton);

  return (
    <header className={style.header}>
      <div className='container'>
        <div className={style.box}>

            <div className={style.logo_image}>
              <img className={style.logo_school} src={Logo} alt='LOGO' />
              <img className={style.logo_office} src={LogoText} alt='Logo' />
            </div>
            <ul
              className={
                nav ? [style.menu, style.active].join(' ') : [style.menu]
              }
            >
              <li>
                <a href='##'>Главная</a>
              </li>
              <li>
                <a href='##'>Направления</a>
              </li>
              <li>
                <a href='##'>О школе</a>
              </li>
              <li>
                <a href='##' className={style.header_contacts}>Контакты</a>
              </li>
            </ul>
            <div onClick={() => setNav(!nav)} className={style.mobile_btn}>
              {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
            </div>
          </div>
          </div>

    </header>
  );
};

export default Navbar;