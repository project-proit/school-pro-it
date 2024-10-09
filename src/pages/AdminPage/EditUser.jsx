import customAxios from "../../axios";
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './Admin.css';

const EditUser = ({ active, setActive, currentRecord, updateRecord }) => {
  const {id} = useParams();

  const [formData, setFormData] = useState({
      id: "",
      typeOfLearning: "",
      fullName: "",
      status: "",
      age: "",
      city: "",
      specialty: "",
      parentsName: "",
      phone: "",
      email: "",
      url: "",
    });

  useEffect(() => {
    if (currentRecord) {
      setFormData({
        id: currentRecord.id || '',
        fullName: currentRecord.fullName || '',
        typeOfLearning: currentRecord.typeOfLearning || '',
        specialty: currentRecord.specialty || '',
        parentsName: currentRecord.parentsName || '',
        phone: currentRecord.phone || '',
        status: currentRecord.status || '',
        email: currentRecord.email || '',
        age: currentRecord.age || '',
        city: currentRecord.city || '',
        url: currentRecord.url || '',
      });
    }
  }, [currentRecord]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateFormData = () => {
    const mandatoryFields = ['fullName', 'typeOfLearning', 'specialty', 'parentsName', 'phone', 'email', 'age', 'city', 'url', 'status'];
    for (let field of mandatoryFields) {
      if (!formData[field]) {
        alert(`Пожалуйста, заполните поле ${field}`);
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateFormData()) return;
    if (!formData.id) {
      alert('ID пользователя отсутствует. Невозможно обновить запись.');
      return;
    }
    console.log('Отправка данных:', formData);
    try {
      const response = await customAxios.put(`application/${formData.id}`, formData);
  
      if (response.status === 200) {
        const updatedRecord = response.data;
        updateRecord(updatedRecord); // Обновляем запись в таблице
        setActive(false); // Закрываем модальное окно
        alert('Данные пользователя обновлены успешно');
      } else {
        alert('Ошибка при обновлении данных пользователя');
      }
    } catch (error) {
      console.error('Error during form submission:', error.response || error);
      alert('Ошибка при отправке формы');
    }
  };

  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2>Изменить заявку!</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>ID</label>
            <input type="text" name="id" value={formData.id} onChange={handleInputChange} disabled />
          </div>
          <input
            placeholder='ФИО'
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
          />
          <select 
            name="status" 
            id="status" 
            value={formData.status}
            onChange={handleInputChange}>
            <option value="">Статус</option>
            <option value="Новая">Новая</option>
            <option value="На рассмотрении">На рассмотрении</option>
            <option value="Принят">Принят</option>
            <option value="Не принят">Не принят</option>
            <option value="На рассмотрении">На рассмотрении</option>
          </select>
          <select 
            name="specialty" 
            id="specialty" 
            value={formData.specialty}
            onChange={handleInputChange}>
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
            onChange={handleInputChange}
          />
          <input
            placeholder='Возраст'
            type="text"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
          />
          <select 
            name="typeOfLearning" 
            id="typeOfLearning" 
            value={formData.typeOfLearning}
            onChange={handleInputChange}>
            <option value="">Тип обучения</option>
            <option value="Интенсивы">Интенсивы</option>
            <option value="Полугодовая школа">Полугодовая школа</option>
          </select>
          <select 
            name="city" 
            id="city" 
            value={formData.city}
            onChange={handleInputChange}>
            <option value="">Выберите город</option>
            <option value="Таганрог">Таганрог</option>
            <option value="Ростов-на-Дону">Ростов-на-Дону</option>
            <option value="Ейеск">Ейеск</option>
            <option value="Другой">Другой</option>
          </select>
          <input
            type="text"
            name="phone"
            placeholder='Телефон'
            value={formData.phone}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder='Email'
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="url"
            placeholder='Ссылка на соцсети'
            value={formData.url}
            onChange={handleInputChange}
          />
          <div className="buttons-form-add">
            <button className='btn-submit' type="submit">Сохранить</button>
            <button className='btn-cancel' type="button" onClick={() => setActive(false)}>
            Отмена
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditUser
