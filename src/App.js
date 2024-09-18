import Navbar from './components/navbar/Navbar';
import './index.css';
import Form from "./components/modal form/Form"
import { useState } from 'react';

function App() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div>
      <Navbar />
      <button onClick={() => setModalActive(true)}>Click me</button>
      <Form active={modalActive} setActive={setModalActive} />
    </div>
  );
}

export default App;
