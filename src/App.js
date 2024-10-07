import React from 'react';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Promologo from './components/promologo/promologo.jsx';
import Promobutton from './promobutton/Promobutton.jsx';
import AboutSchool  from './components/aboutschool/AboutSchool';

import SocialCard  from './components/socialcard/SocialCard.jsx';
import StatsLogo  from './components/statslogo/StatsLogo.jsx';


import { Homepage } from './components/homepage/Homepage.jsx';


import VideoWindow from'./components/videoblock/VideoBlock+'
import TileContainer from './components/tilecontainer/TileContainer.jsx'

import ReviewSlider from './components/slaider3333/Slaiderarotebal.jsx'
import ImageSlider from './components/sliderfoto/SliderFoto.jsx'
import './index.css';

const App = () => {
  return (
    <div className="container">
      <Navbar /> 
      <Header />
      <Promologo/>
      <Promobutton/>
      <AboutSchool/> 
      <Homepage/>
      
      
      <SocialCard/>
      
      
      
      <VideoWindow/>
      <TileContainer/>
      
      <ReviewSlider/>
      <ImageSlider/>
    </div>
    
  );
}

export default App;
