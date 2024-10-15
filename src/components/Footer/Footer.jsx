import React, { useEffect } from 'react';
import './Footer.css';
import { IoLogoVk } from "react-icons/io";
import { BiLogoTelegram } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import Shellpea from '../../assets/Shellpea.png';
import Dunice from '../../assets/Dunice.png';
import Oggetto from '../../assets/Oggetto.png';
import { MdLocationPin } from "react-icons/md";
import LogoSfedu from '../../assets/LogoSfedu.png';
import LogoOffice from '../../assets/LogoOffice.png';
import LogoSchool from '../../assets/LogoSchool.png';
import { useLocation } from 'react-router-dom';

function Footer() {
    const location = useLocation();

    useEffect(() => {
      if (location.hash) {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [location]);
  return (
    <div id='Contacts' className='footer'>
        <div className='footer-container'>
            <div className='content-left'>
                <div className='group-1'>
                    <div  className='contacts'>
                        <h1>Контакты</h1>
                        <p>Телефон: +7 988 234 56 78</p>
                        <p>Телефон: +7 988 234 56 78</p>
                    </div>
                    <div className='partners'>
                        <h1>Партнёры</h1>
                        <div className='logos'>
                            <a href='https://shellpea.com/'><img className='logo' src={Shellpea} alt='Shellpea'/></a>
                            <a href='https://www.edu.dunice.net/'><img className='logo' src={Dunice} alt='Dunice'/></a>
                            <a href='https://oggetto.ru/'><img className='logo' src={Oggetto} alt='Oggetto'/></a>
                        </div>
                    </div>
                </div>

                <div className='group-1'>
                    <div className='links'>
                        <h1>Ссылки на нас</h1>
                        <div className='icons'>
                            <a href='https://vk.com/proittaganrog'><IoLogoVk className='ico' /></a>
                            <a href='https://t.me/school_pro_it'><BiLogoTelegram className='ico'/></a>
                            <a><FaWhatsapp className='ico' /></a>
                        </div>
                    </div>
                    <div className='developers'>
                        <p>Разработано командой</p>
                        <a><h2>Team404</h2></a>
                    </div>
                </div>
            </div>

            <div className='line1'></div>
            <div className='contetn-right'>
                <div className='container-left'>
                    <div className='text-content'>
                        <MdLocationPin className='ico-location'/>
                        <h2>Где мы находимся</h2>
                    </div>
                    <div className='map'>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1267.1105390255289!2d38.933639924761984!3d47.2027179868336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e3fd22a645e35d%3A0xa14e62e43714cfd6!2z0JrQvtGA0L_Rg9GBINCT!5e0!3m2!1sru!2sru!4v1728142645994!5m2!1sru!2sru" 
                            width="700" 
                            height="475" 
                            style={{border:0}}
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade">     
                        </iframe>
                    </div>
                    <div className="logosFooter">
                        <div><img className='logoSchool' src={LogoSchool} alt='LogoSchool' /></div>
                        <div><a href='https://proictis.sfedu.ru/'><img className='logoOffice' src={LogoOffice} alt='LogoOffice' /></a></div>
                        <div><a href='https://sfedu.ru/'><img className='logoSfedu' src={LogoSfedu} alt='LogoSfedu' /></a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
