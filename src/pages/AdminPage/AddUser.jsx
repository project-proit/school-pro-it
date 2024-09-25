import React, { useState } from 'react';
import axios from 'axios';
import './Admin.css';

const AddUser = ({ active, setActive, addRecord }) => {
  const [formData, setFormData] = useState({
    typeOfLearning: "",
    fullName: "",
    age: "",
    city: "",
    scecialty: "",
    parentsName: "",
    phone: "",
    email: "",
    url: "",
  });

  const handleChange = (e) => {
      setFormData({
          ...formData,
          [e.target.name]: e.target.value
      });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      // Отправка данных на сервер
      axios.post('http://localhost:4000/api/student', formData)
      .then((response) => {
          addRecord(response.data); // Добавление записи в таблицу
          setActive(false); // Закрыть модальное окно после успешного добавления
      })
      .catch((error) => {
          console.error("There was an error adding the student!", error);
      });
  };

  return (
    <div className='admin-page'>
      <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <h2>Добавить пользователя</h2>
          <form onSubmit={handleSubmit}>
            <label>
                Полное имя:
                <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Направление:
                <input
                    type="text"
                    name="specialty"
                    value={formData.specialty}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                ФИО родителя:
                <input
                    type="text"
                    name="parentsName"
                    value={formData.parentsName}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Возраст:
                <input
                    type="text"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                ТИп обучения:
                <input
                    type="text"
                    name="typeOfLearning"
                    value={formData.typeOfLearning}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Город:
                <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Телефон:
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                url:
                <input
                    type="url"
                    name="url"
                    value={formData.url}
                    onChange={handleChange}
                    required
                />
            </label>
            
            <button type="submit">Добавить</button>
          </form>
          <button onClick={() => setActive(false)}>Закрыть</button>
        </div>
    </div>
    <h1>Hello</h1>
  </div>
  )
}

export default AddUser
