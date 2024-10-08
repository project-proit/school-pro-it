import React from 'react';
import './SocialMediaQR.css';
import qrcodeVK from '../../../assets/qrcodeVK.png'
import qrcodeTG from '../../../assets/qrcodeTG.png'
import ButtonMain from '../../Button/ButtonMain';

const SocialMediaQR = () => {
  return (
    <div className="container-social-media">
        <div className='title-cards'><h1>Следите за нашими результатами в социальных сетях!</h1></div>
        <div className='cards'>
        <div className="card">

            <h2>Школа ПРО IT в ВК</h2>
            <a href='https://vk.link/proittaganrog'><p>@tproittaganrogf</p></a>
            <div className="qrcode">
                <img src={qrcodeVK} alt="QR-код" />
            </div>
            <p>Откройте камерой</p>
            <ButtonMain size="small" color="secondary">Подписаться</ButtonMain>

        </div>
        <div className='line'></div>
        <div className="card">
            <h2>Школа ПРО IT в ТГ</h2>
            <a href='https://t.me/school_pro_it'><p>@school_pro_it</p></a>
            <div className="qrcode">
            <img src={qrcodeTG} alt="QR-код" />
            </div>
            <p>Откройте камерой</p>
            <ButtonMain size="small" color="secondary">Подписаться</ButtonMain>
        </div>
        </div>
    </div>
  )
}

export default SocialMediaQR
