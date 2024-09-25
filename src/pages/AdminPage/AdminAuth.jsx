import React, { useState } from 'react';
import './Admin.css'

const AdminAuth = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('authToken', data.token);
        window.location.href = '/admin';
      } else {
        setError(data.error);
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
                    placeholder='Ваш username'
                    type="text"
                    value={username}
                    className='form-auth-input'
                    onChange={(e) => setUsername(e.target.value)}
                  />
              </div>
              <div>
                  <input 
                    placeholder='Ваш email'
                    type="text"
                    value={email}
                    className='form-auth-input'
                    onChange={(e) => setEmail(e.target.value)}
                  />
              </div>
              <div>
                  <input 
                    placeholder='Ваш пароль'
                    type="password"
                    value={password}
                    className='form-auth-input'
                    onChange={(e) => setPassword(e.target.value)}
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

export default AdminAuth
