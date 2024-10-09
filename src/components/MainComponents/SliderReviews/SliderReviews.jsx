import React from 'react';
import Slider from "react-slick";
import "./SliderReviews.css";

const testimonials = [
    {
        name: "Иван Иванов",
        text: "Отличная школа! Преподаватели очень профессиональные, материал подается доступно и интересно."
    },
    {
        name: "Мария Смирнова",
        text: "Очень довольна обучением в этой школе. Узнала много нового и получила хорошие навыки для работы."
    },
    {
        name: "Сергей Петров",
        text: "Замечательные курсы! Все объясняется на практике, что помогает лучше усваивать материал."
    },
    {
        name: "Анна Кузнецова",
        text: "Обучение проходит легко и понятно, а главное — полученные знания применимы на практике."
    }
];

const SliderReviews = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
    };

    return (
        <div className="slider-container">
            <h2>Отзывы о школе</h2>
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial">
                        <p className="testimonial-text">"{testimonial.text}"</p>
                        <p className="testimonial-name">— {testimonial.name}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default SliderReviews;
