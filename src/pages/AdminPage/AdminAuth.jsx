import React, { useState } from 'react';
import './Admin.css';

const AdminAuth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4200/api/v1/auth/sign-in', { // Измените на правильный URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }), // Убираем username, если не требуется
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('authToken', data.token); // Сохраняем токен авторизации
        window.location.href = '/admin'; // Перенаправляем на страницу администратора
      } else {
        setError(data.error || 'Не удалось авторизоваться'); // Выводим сообщение об ошибке
      }
    } catch (error) {
      setError('Произошла ошибка при авторизации.');
    }
  };

  return (
    <div className='admin-auth'>
      <div className='admin-auth-content'>
        <form onSubmit={handleSubmit} className='form-auth-content'>
          <div className='all-content'>
            <h2>Авторизация администратора:</h2>
            <div className='auth-fields'>
              <div>
                <input 
                  placeholder='Ваш email'
                  type="text"
                  value={email}
                  className='form-auth-input'
                  onChange={(e) => setEmail(e.target.value)}
                  required // Поле обязательно для заполнения
                />
              </div>
              <div>
                <input 
                  placeholder='Ваш пароль'
                  type="password"
                  value={password}
                  className='form-auth-input'
                  onChange={(e) => setPassword(e.target.value)}
                  required // Поле обязательно для заполнения
                />
              </div>
              {error && <div className='text-error'>{error}</div>}
            </div>
            <button className='btn-auth-admin' type="submit">Войти</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminAuth;
