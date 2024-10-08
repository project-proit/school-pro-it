import React, { useState } from 'react';
import './styles.css'; // Исправлено название файла на styles.css
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";

const images = [
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
  'https://i.pinimg.com/originals/82/6c/03/826c0307bbc677137e56e9207f1099f6.jpg',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
  'https://steamuserimages-a.akamaihd.net/ugc/2152216542729530558/C89D83E5CC03C9F90E7C4D0900D1516FE67A15C2/?imw=512&amp;imh=316&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true',
  'https://i.pinimg.com/originals/07/00/ac/0700ac25e3d85d3d59ea0551806a29ce.jpg',
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
    <div className="sliderfoto-containerfoto">
      <div className="sliderfoto-header">
      <h2> Фотогалерея</h2>
      </div>
      <div className="sliderfoto-wrapper">
      <div> 
      <IoMdArrowDropleft className="sliderfoto-button-prev" onClick={handlePrev}/>
      </div>
        <div
          className="sliderfoto-image"
          style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        ></div>
         <div> 
       <IoMdArrowDropright className="sliderfoto-button-next" onClick={handleNext}/>
       </div>
      </div>
      <div className="sliderfoto-nav">
        {images.map((_, index) => (
          <div
            key={index}
            className={`sliderfoto-nav-item ${
              index === currentImageIndex ? 'active' : ''
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
