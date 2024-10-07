import React, { useState } from 'react';
import './styles.css'; // Исправлено название файла на styles.css

const images = [
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
  'https://steamuserimages-a.akamaihd.net/ugc/2152216542729530558/C89D83E5CC03C9F90E7C4D0900D1516FE67A15C2/?imw=512&amp;imh=316&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true',
  'https://images.unsplash.com/photo-1618524437668-5657f6341d6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
];

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider-container">
      <div className="slider-header">
        <h2>Фотогалерея</h2>
      </div>
      <div className="slider-wrapper">
        <div
          className="slider-image"
          style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        ></div>
        <button className="slider-button prev" onClick={handlePrev}>
          {/* ... (ваш код для кнопки "предыдущее") */}
        </button>
        <button className="slider-button next" onClick={handleNext}>
          {/* ... (ваш код для кнопки "следующее") */}
        </button>
      </div>
      <div className="slider-nav">
        {images.map((_, index) => (
          <div
            key={index}
            className={`slider-nav-item ${
              index === currentImageIndex ? 'active' : ''
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
