import React from 'react';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Promologo from './components/promologo/promologo.jsx';
import Promobutton from './promobutton/Promobutton.jsx';
import AboutSchool  from './components/aboutschool/AboutSchool';
// import Stats  from './components/statscircle/StatsCircle.jsx';
import SocialCard  from './components/socialcard/SocialCard.jsx';
import StatsLogo  from './components/statslogo/StatsLogo.jsx';
// import Slider  from './components/slider/Slider.jsx';
// import StatsWords  from './components/statswords/StatsWords';
import { Homepage } from './components/homepage/Homepage.jsx';
// import CarouselSize from './slaider3/Slaider3.jsx';
// import CarouselSize1 from './components/carusel1/Carusel1.jsx';
// import Video from './components/videoblock/VideoBlock.jsx';
import VideoWindow from'./components/videoblock/VideoBlock+'
import TileContainer from './components/tilecontainer/TileContainer.jsx'
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
      {/* <StatsWords/> */}
      {/* <Stats/> */}
      <SocialCard/>
      <StatsLogo/>
      {/* <Slider/> */}
      {/* <CarouselSize/> */}
      {/* <CarouselSize1/> */}
      {/* <Video/> */}
      <VideoWindow/>
      <TileContainer/>
    </div>
    
  );
}

export default App;
