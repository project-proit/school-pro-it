import React, { useState } from 'react'
import Form from '../components/modal form/Form'

const Main = () => {
    const [modalActive, setModalActive] = useState(false);
  return (
    <div>
      Main
      <button onClick={() => setModalActive(true)}>Click me</button>
      <Form active={modalActive} setActive={setModalActive} />
    </div>
  )
}

export default Main
