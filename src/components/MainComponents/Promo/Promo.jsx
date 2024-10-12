import React, { useEffect, useState } from 'react'
import photoback from'../../../assets/photoback.png'
import './Promo.css';
import ButtonMain from '../../Button/ButtonMain';
import { PiTriangleLight } from "react-icons/pi";
import { Link } from 'react-router-dom';
import Form from '../../modal form/Form.jsx'


const Promo = () => {
    useEffect(() => {
        const header = document.querySelector('.header');
        const content = document.querySelector('.content');
        
        const updatePadding = () => {
            if (header && content) {
                content.style.paddingTop = `${header.offsetHeight}px`;
            }
        };
    
        updatePadding(); // Устанавливаем начальное значение
    
        window.addEventListener('resize', updatePadding);
        
        return () => {
            window.removeEventListener('resize', updatePadding);
        };
    }, []);
    const [modalActive, setModalActive] = useState(false);

  return (
    <div id="Main" className='container-promo'>
        <div className='content'>
            <div className='promo-text-and-btns'>
                <div className='promo-text'>
                    <h1>Погрузимся в мир <br/>информационных <br/>технологий вместе!</h1>
                    <p>Возрастная категория 12+</p>
                </div>
                <div className='btns'>
                    <div>
                        <ButtonMain ize="medium" color="primary" onClick={() => setModalActive(true)}>
                            Записаться
                        </ButtonMain>
                    </div>
                    <div>
                        <Link to='#Video'>
                            <div className='video-btn-and-text'>
                                <div className='btn-vid'><button className='btn-video'><PiTriangleLight className='btn-triangle' /></button></div>
                                <div><p>Посмотрите видео про учебу в нашей школе</p></div>
                            </div>
                        </Link>
                    </div>
                </div>
                <Form active={modalActive} setActive={setModalActive} />
            </div>
            <div className='promo-img'>
                <img className='img-back' src={photoback} alt='photoback'/>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Promo
