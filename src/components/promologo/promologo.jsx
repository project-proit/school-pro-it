import React, { useState } from 'react';
import './promologo.css';
import photoback from '../../assets/photoback.png'

const Promologo = () => {
    return (
 <div> 
    <img className = 'promo' src={photoback} alt='LOGO' /> 
 </div>
    );
};
export default Promologo;