import React, { useEffect, useState } from 'react'
import '../index.css'
import Promo from '../components/MainComponents/Promo/Promo';

const Main = () => {
  return (
    <div className='content'>
      {/* Main
      <button onClick={() => setModalActive(true)}>Click me</button>
      <Form active={modalActive} setActive={setModalActive} />
      <h1>Hello</h1> */}
      <Promo />
    </div>
  )
}

export default Main
