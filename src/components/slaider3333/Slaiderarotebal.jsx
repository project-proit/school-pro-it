import React, { useState } from 'react';
import './Slaiderarotebal.css'

const ReviewsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const reviews = [
    [
      'Елена Викторовна',
      'Здравствуйте! Мы благодарим школу IT-COOL за увлекательные онлайн занятия, индивидуальные и в группе. Персональное мерси Екатерине и Владимиру...',
    ],
    [
      'Сергей Васильев',
      'Школа замечательная. Мы проходили курс "Программирование на Python". Развивает интерес к изучению программированию. Дает основные понятия в программировании...',
    ],
    [
      'Мария Андреевна',
      'В этой школе очень классные преподаватели, к каждому человеку сразу был найден индивидуальный подход! Старший сын изучает Python вместе с преподавателем...',
    ],
    [
      'Иван Иванов',
      'В этой школе очень классные преподаватели, к каждому человеку сразу был найден индивидуальный подход! Старший сын изучает Python вместе с преподавателем...',
    ],
    [
      'Анна Петрова',
      'Здравствуйте! Мы благодарим школу IT-COOL за увлекательные онлайн занятия, индивидуальные и в группе. Персональное мерси Екатерине и Владимиру...',
    ],
    [
      'Дмитрий Сидоров',
      'я ебал фронт',
    ],
  ];

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 3) % reviews.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? reviews.length - 3 : prevSlide - 3
    );
  };

  return (
    <div className="slider-container">
      <h2 className="slider-title">Отзывы о школе PRO IT</h2>
      <div className="slider">
        {reviews.slice(currentSlide, currentSlide + 3).map((review, index) => (
          <div key={index} className="review-card">
            <h3 className="review-author">{review[0]}</h3>
            <p className="review-text">{review[1]}</p>
          </div>
        ))}
      </div>
      <button className="prev-button" onClick={handlePrevSlide}>
        {'<'}
      </button>
      <button className="next-button" onClick={handleNextSlide}>
        {'>'}
      </button>
    </div>
  );
};

export default ReviewsSlider;