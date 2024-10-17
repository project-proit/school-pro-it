import React, { useEffect, useState } from 'react'
import '../index.css'
import Promo from '../components/MainComponents/Promo/Promo';
import AboutSchool from '../components/MainComponents/AboutSchool/AboutSchool';
import SocialMediaQR from '../components/MainComponents/SocialMediaQR/SocialMediaQR';
import Table from '../components/MainComponents/TableProsCons/Table';
import VideoBlock from '../components/MainComponents/VideoBlock/VideoBlock';
import CardsSpecialties from '../components/MainComponents/CardsSpecialties/CardsSpecialties';
import ReviewsSlider from '../components/MainComponents/RewievsSlider/ReviewsSlider';
import FotoSlider from '../components/MainComponents/FotoSlider/FotoSlider';

const Main = () => {
  return (
    <div className='content'>
      {/* Main
      <button onClick={() => setModalActive(true)}>Click me</button>
      <Form active={modalActive} setActive={setModalActive} />
      <h1>Hello</h1> */}
      <div className='main-content'>
        <Promo />
        <AboutSchool />
        <SocialMediaQR />
        <CardsSpecialties />
        <Table />
        <VideoBlock />
        <ReviewsSlider />
        <FotoSlider />
      </div>
    </div>
  )
}
export default Main