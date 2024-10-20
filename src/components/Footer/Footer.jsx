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
                        <a href='https://wa.me/89649087760' target="_ blank"><p>Телефон: +7 964 908 77 60</p></a>
                        <a href='https://wa.me/89054592158' target="_ blank"><p>Телефон: +7 905 459 21 58</p></a>
                    </div>
                    <div className='partners'>
                        <h1>Партнёры</h1>
                        <div className='logos'>
                            <a href='https://shellpea.com/' target="_ blank"><img className='logo' src={Shellpea} alt='Shellpea'/></a>
                            <a href='https://www.edu.dunice.net/' target="_ blank"><img className='logo' src={Dunice} alt='Dunice'/></a>
                            <a href='https://oggetto.ru/' target="_ blank"><img className='logo' src={Oggetto} alt='Oggetto'/></a>
                        </div>
                    </div>
                </div>

                <div className='group-1'>
                    <div className='links'>
                        <h1>Ссылки на нас</h1>
                        <div className='icons'>
                            <a href='https://vk.com/proittaganrog' target="_ blank"><IoLogoVk className='ico' /></a>
                            <a href='https://t.me/school_pro_it' target="_ blank"><BiLogoTelegram className='ico'/></a>
                            <a href='https://wa.me/89649087760' target="_ blank"><FaWhatsapp className='ico' /></a>
                        </div>
                    </div>
                    <div className='developers'>
                        <p>Разработано командой</p>
                        <a href='https://vk.com/team404errornf' target="_ blank"><h2>Team404</h2></a>
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
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1344.6552271975127!2d38.941759444152126!3d47.20403422361061!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e3fd23c20a9a87%3A0xa9050147bf76417c!2z0JjQvdGB0YLQuNGC0YPRgiDQmtC-0LzQv9GM0Y7RgtC10YDQvdGL0YUg0KLQtdGF0L3QvtC70L7Qs9C40Lkg0Lgg0JjQvdGE0L7RgNC80LDRhtC40L7QvdC90L7QuSDQkdC10LfQvtC_0LDRgdC90L7RgdGC0Lg!5e0!3m2!1sru!2sru!4v1729428668082!5m2!1sru!2sru" 
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
                        <div><a href='https://proictis.sfedu.ru/' target="_ blank"><img className='logoOffice' src={LogoOffice} alt='LogoOffice' /></a></div>
                        <div><a href='https://sfedu.ru/' target="_ blank"><img className='logoSfedu' src={LogoSfedu} alt='LogoSfedu' /></a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
