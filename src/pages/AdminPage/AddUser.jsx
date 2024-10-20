import React, { useState } from 'react';
import customAxios from "../../axios";
import './Admin.css';

const AddUser = ({ active, setActive, addRecord }) => {
  const [formData, setFormData] = useState({
    typeOfLearning: "",
    fullName: "",
    age: "",
    city: "",
    status: "",
    specialty: "",
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
      customAxios.post('application/create', formData)
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
          <h2>Добавить заявку!</h2>
          <form onSubmit={handleSubmit} className='form-add'>
            <input
                placeholder='ФИО'
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className='modal-input'
                required
            />
            <select 
                name="status" 
                id="status" 
                value={formData.status}
                onChange={handleChange}>
                <option value="">Статус</option>
                <option value="Новая">Новая</option>
                <option value="На рассмотрении">На рассмотрении</option>
                <option value="Принят">Принят</option>
                <option value="Не принят">Не принят</option>
            </select>
            <select 
                name="specialty" 
                id="specialty" 
                value={formData.specialty}
                onChange={handleChange}
                required>
                <option value="">Направление</option>
                <option value="Таганрог">Искусственный интеллект</option>
                <option value="Web-разработка">Web-разработка</option>
                <option value="Мобильная разработка">Мобильная разработка</option>
                <option value="Проектирование нейроинтерфейсов">Проектирование нейроинтерфейсов</option>
                <option value="Квантовые сети">Квантовые сети</option>
                <option value="Интернет вещей (умный дом)">Интернет вещей (умный дом)</option>
                <option value="3D-печать и прототипирование">3D-печать и прототипирование</option>
                <option value="Робототехника">Робототехника</option>
            </select>
            <input
                placeholder='ФИО родителя'
                type="text"
                name="parentsName"
                value={formData.parentsName}
                onChange={handleChange}
                className='modal-input'
                required
            />
            <input
                placeholder='Возраст'
                type="text"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className='modal-input'
                required
            />
            <select 
                name="typeOfLearning" 
                id="typeOfLearning" 
                value={formData.typeOfLearning}
                onChange={handleChange}
                required>
                <option value="">Тип обучения</option>
                <option value="Интенсивы">Интенсивы</option>
                <option value="Полугодовая школа">Полугодовая школа</option>
            </select>
            <select 
                name="city" 
                id="city" 
                value={formData.city}
                onChange={handleChange}
                required>
                <option value="">Выберите город</option>
                <option value="Таганрог">Таганрог</option>
                <option value="Ростов-на-Дону">Ростов-на-Дону</option>
                <option value="Ейеск">Ейеск</option>
                <option value="Другой">Другой</option>
            </select>
            <input
                type="tel"
                name="phone"
                placeholder='Телефон'
                value={formData.phone}
                onChange={handleChange}
                className='modal-input'
                required
            />
            <input
                type="email"
                name="email"
                placeholder='Email'
                value={formData.email}
                onChange={handleChange}
                className='modal-input'
                required
            />
            <input
                type="url"
                name="url"
                placeholder='Ссылка на соцсети'
                value={formData.url}
                onChange={handleChange}
                className='modal-input'
                required
            />
            <div className='buttons-form-add'>
                <button className='btn-submit'type="submit">Добавить</button>
                <button className='btn-cancel' onClick={() => setActive(false)}>Закрыть</button>
            </div>
          </form>
        </div>
    </div>
  </div>
  )
}

export default AddUser