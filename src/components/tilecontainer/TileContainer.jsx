import React, { useState } from 'react';
import plitka1 from '../../assets/sait.1.png'
import plitka2 from '../../assets/sait.2.png'
import plitka3 from '../../assets/sait.3.png'
import plitka4 from '../../assets/sait.4.png'
import plitka5 from '../../assets/sait.5.png'
import plitka6 from '../../assets/sait.6.png'
import plitka7 from '../../assets/sait.7.png'
import plitka8 from '../../assets/sait.8.png'
import plitka9 from '../../assets/sait.9.png'
import './TileContainer.css'

const Tile = ({ icon, title }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  return (
    <div
      className={`tile ${isFlipped ? 'flipped' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="front">
        <img src={icon} alt={title} />
      </div>
      <div className="back">
        <p>{title}</p>
      </div>
    </div>
  );
};

const TileContainer = () => {
  const tilesData = [
    { icon: plitka1,title: <h1>Погрузимся в мир<br/> информационных<br/> технологий вместе!</h1>},
    { icon: plitka2,},
    { icon: plitka3,},
    { icon: plitka4,},
    { icon: plitka5,},
    { icon: plitka6,},
    { icon: plitka7,},
    { icon: plitka8,title: 'иди на хуй'},
    { icon: plitka9,title: 'Искусственный интеллект'},
  ];

  return (
    <div className="tile-container">
      <h2>Ознакомьтесь с направлениями</h2>
      <div className="tiles">
        {tilesData.map((tile, index) => (
          <Tile key={index} icon={tile.icon} title={tile.title} />
        ))}
      </div>
    </div>
  );
};

export default TileContainer;
