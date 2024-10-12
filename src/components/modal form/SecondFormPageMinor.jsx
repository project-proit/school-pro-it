import React, { useState } from 'react'
import "./Form.css";

const SecondFormPageMinor = ({ formData, setFormData }) => {
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
    <div className='header1'><h1>Оставьте данные родителя, чтобы мы связались с ним!</h1></div>
    <form onSubmit={handleSubmit}>
        <input type='text' placeholder='ФИО родителя' name='parentsName'
        value={formData.parentsName}
        className='btn-type-of-learning'
        onChange={(event) =>
          setFormData({ ...formData, parentsName: event.target.value })
        } required/>
        {errors.parentsName && <span>{errors.parentsName}</span>}

        <input type='text' placeholder='Телефон родителя' name='phone'
        value={formData.phone}
        className='btn-type-of-learning'
        onChange={(event) =>
          setFormData({ ...formData, phone: event.target.value })
        } required/>
        {errors.phone && <span>{errors.phone}</span>}

        <input type='text' placeholder='Email родителя' name='email'
        value={formData.email}
        className='btn-type-of-learning'
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        } required/>
        {errors.email && <span>{errors.email}</span>}
        
        <p>Нажимая кнопку, Вы даете согласие на обработку персональных данных</p>
    </form>
  </div>
  )
}

export default SecondFormPageMinor
