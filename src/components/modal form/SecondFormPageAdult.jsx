import React, { useState } from 'react'
import "./Form.css";

const SecondFormPageAdult = ({ formData, setFormData }) => {
  const [errors, setErrors] = useState({})
  const handleSubmit = (e) => {
      e.preventDefault()
      const validationErrors = {}
      if(!formData.fullName.trim()) {
          validationErrors.fullName = "name is required"
      }

      if(!formData.age.trim()) {
          validationErrors.age = "age is required"
      }
  
      if(!formData.email.trim()) {
          validationErrors.email = "email is required"
      } else if(!/\S+@\S+\.\S+/.test(formData.email)){
          validationErrors.email = "email is not valid"
      }

      setErrors(validationErrors)
  
      if(Object.keys(validationErrors).length === 0) {
          alert("Form Submitted successfully")
      }
  
    }
  return (
    <div className='form1'>
    <div className='header1'><h1>Оставьте ваши данные <br/> чтобы, мы связались с вами!</h1></div>
    <form onSubmit={handleSubmit}>
        <div>
        <input type='text' placeholder='Ваш телефон' name='phone'
        value={formData.phone}
        className='btn-type-of-learning'
        onChange={(event) =>
          setFormData({ ...formData, phone: event.target.value })
        } required/>
        {errors.phone && <span>{errors.phone}</span>}

        <input type='text' placeholder='Ваш email' name='age'
        value={formData.email}
        className='btn-type-of-learning'
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        } required/>
        {errors.email && <span>{errors.email}</span>}

        <input type='text' placeholder='Ссылка на соцсети' name='url'
        value={formData.url}
        className='btn-type-of-learning'
        onChange={(event) =>
          setFormData({ ...formData, url: event.target.value })
        } required/>
        {errors.url && <span>{errors.url}</span>}
        
        <p>Нажимая кнопку, Вы даете согласие на обработку персональных данных</p>
        </div>
    </form>
  </div>
  )
}

export default SecondFormPageAdult
