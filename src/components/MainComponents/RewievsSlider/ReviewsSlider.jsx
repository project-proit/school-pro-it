import React, { useState } from 'react';
import './ReviewsSlider.css';
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";

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

  // Рассчитываем количество отзывов на экране в зависимости от ширины окна
  const reviewsPerPage = () => {
    if (window.innerWidth >= 1024) return 3; // Мониторы
    if (window.innerWidth >= 768) return 2;  // Планшеты
    return 1;  // Мобильные устройства
  };

  const [slidesToShow, setSlidesToShow] = useState(reviewsPerPage());

  // Обновляем количество отзывов при изменении ширины окна
  window.addEventListener('resize', () => {
    setSlidesToShow(reviewsPerPage());
  });

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + slidesToShow) % reviews.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? reviews.length - slidesToShow : prevSlide - slidesToShow
    );
  };

  return (
    <div className="slider-container1">
      <div className="slider-content-rev">
        <h2 className="slider-title">Отзывы о школе PRO IT</h2>
        <div className="slider-arrowcont">
          <IoMdArrowDropleft className="prev-button" onClick={handlePrevSlide} />
          <div className="slider">
            {reviews.slice(currentSlide, currentSlide + slidesToShow).map((review, index) => (
              <div key={index} className="review-card">
                <h3 className="review-author">{review[0]}</h3>
                <p className="review-text">{review[1]}</p>
              </div>
            ))}
          </div>
          <IoMdArrowDropright className="next-button" onClick={handleNextSlide} />
        </div>
      </div>
    </div>
  );
};

export default ReviewsSlider;
