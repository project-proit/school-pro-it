import customAxios from "../../axios";
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const EditStudent = ({ active, setActive, currentRecord, updateRecord }) => {
    const {id} = useParams();

  const [formData, setFormData] = useState({
      id: "",
      typeOfLearning: "",
      fullName: "",
      age: "",
      specialty: "",
      parentsName: "",
      phone: "",
      email: "",
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
        email: currentRecord.email || '',
        age: currentRecord.age || '',
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
    const mandatoryFields = ['fullName', 'typeOfLearning', 'specialty', 'parentsName', 'phone', 'email', 'age'];
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
      const response = await customAxios.put(`student/${formData.id}`, formData);
  
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
    <div>
      <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <h2>Изменить данные ученика!</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>ID</label>
              <input type="text" name="id" value={formData.id} className='modal-id' onChange={handleInputChange} disabled />
            </div>
            <input
              placeholder='ФИО'
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className='modal-input'
            />
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
              className='modal-input'
            />
            <input
              placeholder='Возраст'
              type="text"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              className='modal-input'
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
            <input
              type="text"
              name="phone"
              placeholder='Телефон'
              value={formData.phone}
              onChange={handleInputChange}
              className='modal-input'
            />
            <input
              type="email"
              name="email"
              placeholder='Email'
              value={formData.email}
              onChange={handleInputChange}
              className='modal-input'
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
    </div>
  )
}

export default EditStudent
