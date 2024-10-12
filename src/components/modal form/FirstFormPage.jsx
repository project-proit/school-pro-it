import React, { useState } from 'react'
import "./Form.css";

const FirstFormPage = ({ formData, setFormData }) => {
    const [errors, setErrors] = useState({})
    const handleSubmit = (e) => {
        e.preventDefault()
      }
  return (
    <div className='form1'>
      <div className='header1'><h1>Запишитесь в Школу ПРО IT прямо сейчас!</h1></div>
      <form onSubmit={handleSubmit}>
          <input type='text' placeholder='ФИО' name='fullName'
          value={formData.fullName}
          required
          className='field__input'
          onChange={(event) =>
            setFormData({ ...formData, fullName: event.target.value })
          }/>
          
          <input type='text' placeholder='Возраст' name='age'
          value={formData.age}
          className='field__input'
          onChange={(event) =>
            setFormData({ ...formData, age: event.target.value })
          } required/>
         
          
          <select name="city" id="city" value={formData.city}
          className='btn-type-of-learning'
          onChange={(event) =>
            setFormData({ ...formData, city: event.target.value })
          } required>
              <option value="">Выберите город</option>
              <option value="Таганрог">Таганрог</option>
              <option value="Ростов-на-Дону">Ростов-на-Дону</option>
              <option value="Ейеск">Ейеск</option>
              <option value="Другой">Другой</option>
          </select>

          <select name="specialty" id="specialty" value={formData.specialty}
          className='btn-type-of-learning'
          onChange={(event) =>
            setFormData({ ...formData, specialty: event.target.value })
          } required>
              <option value="">Направление</option>
              <option value="ТагаИскусственный интеллектнрог">Искусственный интеллект</option>
              <option value="Web-разработка">Web-разработка</option>
              <option value="Мобильная разработка">Мобильная разработка</option>
              <option value="Проектирование нейроинтерфейсов">Проектирование нейроинтерфейсов</option>
              <option value="Квантовые сети">Квантовые сети</option>
              <option value="Интернет вещей (умный дом)">Интернет вещей (умный дом)</option>
              <option value="3D-печать и прототипирование">3D-печать и прототипирование</option>
              <option value="Робототехника">Робототехника</option>
          </select>

          <p>Обращаем ваше внимание, что занятия проводятся очно в г. Таганрог</p>
      </form>
    </div>
  )
}

export default FirstFormPage
