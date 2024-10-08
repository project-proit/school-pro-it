import React, { useEffect, useState } from 'react'
import '../index.css'
import Promo from '../components/MainComponents/Promo/Promo';
import AboutSchool from '../components/MainComponents/AboutSchool/AboutSchool';

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
      </div>
    </div>
  )
}

export default Main
