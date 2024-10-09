import React, { useState } from 'react';
import './styles.css'; // Исправлено название файла на styles.css
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";

const images = [
  'https://sun2-20.userapi.com/impg/E_GbSzLBiXWvOOvqjkJHtskjbt6cVaSeYBk0eg/-4L-MZORDyk.jpg?size=2560x1707&quality=95&sign=07a12ca2973c851fe72e1e4f1a7e9098&type=album',
  'https://sun9-68.userapi.com/impg/nLqd4qJ6WUOp2dkCvRnAw-UEJleEXttIx2M--A/mS5IJDv5L04.jpg?size=2560x1707&quality=95&sign=5c48cdb0ac07045b51919d62f9d72bb6&type=album',
  'https://sun9-47.userapi.com/impg/Tsl-8OfaEVD6H35kybCyZBCSXyd7Yui7eaPdDw/v_I76m9081s.jpg?size=2560x1707&quality=95&sign=e81bd61c5de91c4d0593b0b61f375072&type=album',
  'https://sun9-50.userapi.com/impg/nqLm6JyZxII6EY_5jEvKLwPVk6Jo68NTi6n-sA/4uOkZpaQjds.jpg?size=2560x1707&quality=95&sign=9413b37b2cbd06347124325c6f6e9367&type=album',
  'https://sun9-73.userapi.com/impg/IIKSteGpzw-QD12t-91zbfhEpjauhXu5nW5JKQ/AFhugPXCK1k.jpg?size=2560x1707&quality=95&sign=4bbbff3227a5ff0844acf4ec6b99bb1b&type=album',
  'https://sun9-49.userapi.com/impg/j3uNJmipdVhjLTKQAllRsoiPk2D5ZJmjU2i2zQ/TI9wnd2st_w.jpg?size=2560x1707&quality=95&sign=0ccaf0ebe7971c07589e116d336e7442&type=album',
  'https://sun9-72.userapi.com/impg/l9B92xRV1X_VSoJzLFCaOEZhuffw4QJFeTLf_g/p2ACOLW9_WQ.jpg?size=2560x1707&quality=95&sign=9026fd5da9f5d7ec024590cf5e1233f3&type=album',
  'https://sun9-14.userapi.com/impg/iG3HgHxkvXt_9iOA3M7uhTSM4ylup2h3CSBXUg/O-XfA7FDkZc.jpg?size=2560x1707&quality=95&sign=50f2c0c59bfc876f23b8cdcd1e0b3810&type=album',
  'https://sun9-28.userapi.com/impg/61GOlQduaFRHnl7o98_75k5OngdR_rTf67y4OA/V-eX0EJSgbI.jpg?size=2560x1707&quality=95&sign=4dc8e8b18f3e41562fde91dab86eb78d&type=album',
  
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
