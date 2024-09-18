import React, { useState } from 'react'
import "./Form.css";

const ZeroFormPage = ({ formData, setFormData }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleTypeOfLearning = (type, option) => {
    setFormData({ ...formData, typeOfLearning: type });
    setSelectedOption(option);
  };
  return (
    <div className='form0'>
      <div className='header1'><h1>Выберите формат обучения!</h1></div>
        <form>
          <div className='field'>
            <div className='first-field'>
              <p>Набор открыт</p>
              <button type='button' className={`btn-type-of-learning ${selectedOption === 'option1' ? 'selected' : ''}`} 
              onClick={() => handleTypeOfLearning("Полугодовая школа", "option1")}>
                Полугодовая школа
                {selectedOption === 'option1' && <span className='checkmark'>✔</span>}
              </button>
              <p>*Срок обучения 6 месяцев, 9 направлений</p>
              <p> {'\u00A0'} Цена: бесплатно</p>
            </div>
            <div className='second-field'>
              <p>Набор открыт</p>
              <div>
                <button type='button' className={`btn-type-of-learning ${selectedOption === 'option2' ? 'selected' : ''}`} 
                onClick={() => handleTypeOfLearning("Интенсивы", "option2")}>
                  Интенсивы
                  {selectedOption === 'option2' && <span className='checkmark'>✔</span>}
                </button>
              </div>
              <p>*Срок обучения 3 месяца, 7 направлений</p>
              <p> {'\u00A0'} Цена: 3500 руб / месяц</p>
            </div>
          </div>
          
        </form>
    </div>
  )
}

export default ZeroFormPage
