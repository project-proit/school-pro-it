import React, { useState } from 'react';
import "./Form.css";
import ZeroFormPage from './ZeroFormPage';
import FirstFormPage from './FirstFormPage';
import SecondFormPageAdult from './SecondFormPageAdult';
import ThirdFormPage from './ThirdFormPage';
import SecondFormPageMinor from './SecondFormPageMinor';

const Form = ({active, setActive, children}) => {
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
  const [page, setPage] = useState(0);
  const FormTitles = ["1", "2", "3", "4"];

  const PageDisplay = () => {
    if (page === 0) {
      return <ZeroFormPage formData={formData} setFormData={setFormData} />;
    }
    else if (page === 1 ) {
      return <FirstFormPage formData={formData} setFormData={setFormData} />;
    }
    else if (page === 2  && formData.age >= 18) {
      return <SecondFormPageAdult formData={formData} setFormData={setFormData} />;
    }
    else if (page === 2  && formData.age < 18) {
      return <SecondFormPageMinor formData={formData} setFormData={setFormData} />;
    }
    else if (page === 3){
      return <ThirdFormPage />;
    }
  }

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/student', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Форма успешно отправлена');
        setActive(false);
      } else {
        alert('Ошибка при отправке формы');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Ошибка при отправке формы');
    }
  }

  return (
    <div className={active ? 'modal active': 'modal'} onClick={() => setActive(false)}>
        <div className={active ? 'modal__content active': 'modal__content'} onClick={e => e.stopPropagation()}>
            {/* {children} */}
            <div>{PageDisplay()}</div>
            {page < FormTitles.length - 1 && (
            <div className='container__form'>
              <button className='btn-back'
                disabled={page === 0}
                onClick={() => {
                  setPage((currPage) => currPage - 1);
                }}
              >
                Назад
              </button>
              <button className='btn-next'
                onClick={() => {
                  if (page === FormTitles.length - 2) {
                    alert("FORM SUBMITTED");
                    setPage((currPage) => currPage + 1);
                    console.log(formData);
                    handleSubmit();
                  } else {
                    setPage((currPage) => currPage + 1);
                  }
                }}
              >
                 {page === FormTitles.length - 2 ? "Оставить заявку" : "Дальше"}
              </button>
            </div>
            )}
        </div>
    </div>
  )
}

export default Form
