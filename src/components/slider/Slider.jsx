// import React, { useState } from 'react';
// import './Slider.css';
// const Slider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       name: 'Елена Викторовна',
//       text: 'Здравствуйте! Мы благодарим школу IT-COOL, за увлекательные онлайн занятия, индивидуальные и в группе. Персональное мерси Екатерине и Владимиру.',
//     },
//     {
//       name: 'Сергей Васильев',
//       text: 'Школа очень приятная. Мы проходили курс "Программирование на Python". Развивает интерес к изучению программирования. Даёт основные понятия в программировании...',
//     },
//     {
//       name: 'Мария Андреевна',
//       text: 'В этой школе очень классные преподаватели, и каждому человеку сразу был найден индивидуальный подход. Старший сын изучает Python вместе с преподавателем.',
//     },
//     {
//         name: 'Андрей Максимыч',
//         text: 'куда девали собаку-поводыря с сайта ?',
//       },
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prevSlide) =>
//       prevSlide === 0 ? slides.length - 1 : prevSlide - 1
//     );
//   };

//   return (
//     <div className="slider">
//       <div className="slider-container">
//         <div className="slide-wrapper">
//           <div className="slide" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
//             {slides.map((slide, index) => (
//               <div className="slide-content" key={index}>
//                 <h3>{slide.name}</h3>
//                 <p>{slide.text}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <button className="prev-btn" onClick={prevSlide}>
//         {'<'}
//       </button>
//       <button className="next-btn" onClick={nextSlide}>
//         {'>'}
//       </button>
//     </div>
//   );
// };

// export default Slider;