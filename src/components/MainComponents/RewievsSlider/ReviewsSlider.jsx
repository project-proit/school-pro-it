import React, { useState } from 'react';
import './ReviewsSlider.css';
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";

const ReviewsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const reviews = [
    [
      'Елена Викторовна',
      'Мы с сыном решили попробовать курс по веб-разработке. Учеба в Школе ПРО IT — это отличный старт для тех, кто хочет познакомиться с миром IT. Очень нравится формат занятий, преподаватели всегда поддерживают и помогают разобраться с трудными темами.',
    ],
    [
      'Сергей Васильевич',
      'Моя дочь всегда увлекалась компьютерами, и мы решили записаться на курс по разработке игр. Удивительно, как за короткое время она уже смогла создать свою простую игру! Школа ПРО IT помогает ребятам раскрыть потенциал и заинтересовать их в IT-сфере.',
    ],
    [
      'Мария Андреевна',
      'Прекрасная школа! Мой сын прошел курс по созданию мобильных приложений. Преподаватели доступно объясняют материал и помогают ученикам разбираться с задачами. Это не просто теория — дети учатся на практике!',
    ],
    [
      'Иван Иванов',
      'Школа ПРО IT — отличный выбор для моего сына. Мы записались на курс по основам программирования, и уже через несколько занятий я заметил, как его интерес к математике и логике усилился. Отличное место для тех, кто хочет научиться программировать!',
    ],
    [
      'Анна Николаевна',
      'Моя дочь уже второй год учится в Школе ПРО IT и всегда в восторге от занятий. Мы прошли курс по созданию сайтов. Очень нравится, что обучение проводится в удобное время, а уровень преподавания на высоте!',
    ],
    [
      'Дмитрий Владимирович',
      'Проходили курс по робототехнике. Школа ПРО IT — это действительно место, где дети не просто изучают материал, а применяют его на практике. Сын в восторге, и уже интересуется следующими курсами!',
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
                <div><h3 className="review-author">{review[0]}</h3></div>
                <div><p className="review-text">{review[1]}</p></div>
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
