import React, { useState, useEffect } from 'react';
import plitka1 from '../../../assets/CardsSpecialties/sait.1.png';
import plitka2 from '../../../assets/CardsSpecialties/sait.2.png';
import plitka3 from '../../../assets/CardsSpecialties/sait.3.png';
import plitka4 from '../../../assets/CardsSpecialties/sait.4.png';
import plitka5 from '../../../assets/CardsSpecialties/sait.5.png';
import plitka6 from '../../../assets/CardsSpecialties/sait.6.png';
import plitka7 from '../../../assets/CardsSpecialties/sait.7.png';
import plitka8 from '../../../assets/CardsSpecialties/sait.8.png';
import plitka9 from '../../../assets/CardsSpecialties/sait.9.png';
import './CardsSpecialties.css';

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

const CardsSpecialties = () => {
  const tilesData = [
    { icon: plitka1,title: <p>Знакомство с языком программирования Python.Изучение современных библиотек и фреймворков. Написание программ в соответствии с выбранным заданием.
      </p>},
          { icon: plitka2,title:<p>Погружение в web-мир. После этого проекта вы больше не сможете спокойно смотреть на чужие сайты, потому что лучше вас их никто не разработает! Этот блок направлен на приобретение технических навыков в создании сайтов и их проектирование с нуля.
      </p>},
          { icon: plitka3,title: <p>Вы познакомитесь с Android разработкой и пройдёте путь от идеи до полноценного приложения. После проекта вам не придётся искать нужное приложение в Google play, ведь вы сделаете его сами!
      </p>},
          { icon: plitka4,title: <p>Знакомство с Python. Программирование устройств программного радио для подмены координат БПЛА* при помощи специализированных библиотек.
      </p>},
          { icon: plitka5,title: <p>На этом направлении вы научитесь управлять реальными предметами “силой мысли” и по итогу  создадите игру, где вместо джойстика будете использовать собственные мысли!
      </p>},
          { icon: plitka6,title: <p>Направление позволит разобраться, как интернет приходит в ваш дом и как обеспечить его безопасность с помощью одной из самых популярных операционных систем -- Linux. Реализовать максимальную надёжность такой защиты вы сможете, используя принципы квантовой криптографии (да-да, той самой)!
      </p>},
          { icon: plitka7,title: <p>На этом направлении вы узнаете, для чего можно использовать различные умные устройства, как их разрабатывать, где их можно применять и задействовать. Научитесь азам программирования на С++ и основам
      3D-моделирования.
      </p>},
          { icon: plitka8,title: <p>На этом направлении вы познакомитесь с 3D-моделированием и 3D-печатью. На занятиях вам будут доступны различные технологии: паяльное оборудование и работа с электронными компонентами, лазерная резка, токарный станок, фрезерный станок и целая мастерская  инструментов! Поработаем над прототипом устройств, которые помогут в работе с 3D-принтерами.
      </p>},
          { icon: plitka9,title: <p>Знакомство с азами программирования, 3D-моделирования, электроники. На этом направлении вы сможете создать собственного  робота
      </p>},
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % tilesData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? tilesData.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div id="Specialties" className="tile-container">
      <h2 className="title-cards-specialties">Ознакомьтесь с направлениями</h2>
      {isMobile ? (
        <div className="slider">
          <button onClick={handlePrev} className="slider-btn prev-btn">
            &#10094;
          </button>
          <div className="tile">
            <Tile icon={tilesData[currentIndex].icon} title={tilesData[currentIndex].title} />
          </div>
          <button onClick={handleNext} className="slider-btn next-btn">
            &#10095;
          </button>
        </div>
      ) : (
        <div className="tiles">
          {tilesData.map((tile, index) => (
            <Tile key={index} icon={tile.icon} title={tile.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CardsSpecialties;
