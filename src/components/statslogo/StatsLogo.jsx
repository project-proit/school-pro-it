import React, { useState } from 'react';
import './StatsLogo.css';
import photoback from '../../assets/StatsLog2.png'

const StatsLogo = () => {
    return (
 <div> 
    <img className = 'StatsLog2' src={photoback} alt='LOGO' /> 
 </div>
    );
};
export default StatsLogo;