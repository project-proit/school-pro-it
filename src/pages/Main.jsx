import React, { useEffect, useState } from 'react'
import '../index.css'
import Promo from '../components/MainComponents/Promo/Promo';
import AboutSchool from '../components/MainComponents/AboutSchool/AboutSchool';
import SocialMediaQR from '../components/MainComponents/SocialMediaQR/SocialMediaQR';
import Table from '../components/MainComponents/TableProsCons/Table';
import VideoBlock from '../components/MainComponents/VideoBlock/VideoBlock';
import SliderReviews from '../components/MainComponents/SliderReviews/SliderReviews';

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
        <Table />
        <VideoBlock />
        {/* <SliderReviews /> */}
      </div>
    </div>
  )
}
export default Main