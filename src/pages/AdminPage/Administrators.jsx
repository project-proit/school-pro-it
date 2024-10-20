import React, { useEffect, useState } from 'react';
import AdminNavBar1 from './AdminNavBar/AdminNavBar1';
import customAxios from "../../axios";
import './Admin.css';

const Administrators = () => {
  const [admins, setAdmins] = useState([]); // Инициализируем пустым массивом
  const [newAdmin, setNewAdmin] = useState({ email: '', password: '', name: '' });

  useEffect(() => {
    // Функция для получения списка администраторов
    const fetchAdmins = async () => {
      try {
        const res = await customAxios.get('user/get');

        // Логируем статус ответа и данные
        console.log('Статус ответа:', res.status);
        console.log('Ответ сервера:', res.data);

        // Проверяем наличие данных и их структуру
        if (Array.isArray(res.data)) {
          setAdmins(res.data); // Устанавливаем массив администраторов
        } else {
          console.error('Ошибка: данные администраторов отсутствуют или имеют неверный формат');
          setAdmins([]); // Устанавливаем пустой массив
        }
      } catch (err) {
        console.error('Ошибка при получении списка администраторов:', err.response ? err.response.data : err.message);
      }
    };

    fetchAdmins(); // Вызов функции получения администраторов
  }, []);

  const registerAdmin = async () => {
    try {
      const res = await customAxios.post('auth/sign-up', newAdmin);
      console.log('Ответ сервера после регистрации:', res.data); // Лог ответа сервера
      alert('Администратор успешно зарегистрирован');
      setNewAdmin({ email: '', password: '', name: '' });

      // Обновляем список администраторов
      const updatedRes = await customAxios.get('user/get');
      if (Array.isArray(updatedRes.data)) {
        setAdmins(updatedRes.data); // Обновляем массив администраторов
      }
    } catch (err) {
      console.error('Ошибка при регистрации администратора:', err.response ? err.response.data : err.message);
    }
  };

  const deleteAdmin = async (id) => {
    try {
      await customAxios.delete(`user/delete/${id}`);
      alert('Администратор удалён');
      setAdmins(admins.filter(admin => admin.id !== id)); // Убираем удаленного администратора из списка
    } catch (err) {
      console.error('Ошибка при удалении администратора:', err.response ? err.response.data : err.message);
    }
  };

  return (
    <div>
      <AdminNavBar1 />
      <div className='admin-page'>
        <div>
          <h1>Список администраторов</h1>
          <ul>
            {admins.length > 0 ? (
              admins.map(admin => (
                <li key={admin.id}>
                  {admin.name} ({admin.email}) {admin.isCurrentUser && <strong>(Вы)</strong>}
                  {!admin.isCurrentUser && (
                    <button onClick={() => deleteAdmin(admin.id)}>Удалить</button>
                  )}
                </li>
              ))
            ) : (
              <p>Администраторы не найдены</p>
            )}
          </ul>
        </div>
        <div>
          <h2>Добавить нового администратора</h2>
          <input
            type="text"
            placeholder="Имя"
            value={newAdmin.name}
            className='modal-input'
            onChange={(e) => setNewAdmin({ ...newAdmin, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            value={newAdmin.email}
            className='modal-input'
            onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Пароль"
            value={newAdmin.password}
            className='modal-input'
            onChange={(e) => setNewAdmin({ ...newAdmin, password: e.target.value })}
          />
          <button onClick={registerAdmin}>Зарегистрировать администратора</button>
        </div>
      </div>
    </div>
  );
};

export default Administrators;
