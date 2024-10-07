import React, { useEffect, useState } from 'react'
import Form from '../components/modal form/Form';
import '../index.css'

const Main = () => {
  useEffect(() => {
    const header = document.querySelector('.header');
    const content = document.querySelector('.content');
    
    if (header && content) {
      content.style.paddingTop = `${header.offsetHeight}px`;
    }

    // Следим за изменением размеров хедера
    window.addEventListener('resize', () => {
      if (header && content) {
        content.style.paddingTop = `${header.offsetHeight}px`;
      }
    });
  }, []);

    const [modalActive, setModalActive] = useState(false);
  return (
    <div className='content'>
      Main
      <button onClick={() => setModalActive(true)}>Click me</button>
      <Form active={modalActive} setActive={setModalActive} />
      <h1>Hello</h1>
    </div>
  )
}

export default Main
