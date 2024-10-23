import React, { useEffect, useState } from 'react';
import AdminNavBar1 from './AdminNavBar/AdminNavBar1';
import customAxios from "../../axios";
import './Admin.css';

const Administrators = () => {
  const [admins, setAdmins] = useState([]);
  const [newAdmin, setNewAdmin] = useState({ email: '', password: '', name: '' });

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const res = await customAxios.get('user/get');
        console.log('Статус ответа:', res.status);
        console.log('Ответ сервера:', res.data);

        if (Array.isArray(res.data)) {
          setAdmins(res.data);
        } else {
          console.error('Ошибка: данные администраторов отсутствуют или имеют неверный формат');
          setAdmins([]);
        }
      } catch (err) {
        console.error('Ошибка при получении списка администраторов:', err.response ? err.response.data : err.message);
      }
    };

    fetchAdmins();
  }, []);

  const registerAdmin = async () => {
    try {
      const res = await customAxios.post('auth/sign-up', newAdmin);
      console.log('Ответ сервера после регистрации:', res.data);
      alert('Администратор успешно зарегистрирован');
      setNewAdmin({ email: '', password: '', name: '' });

      const updatedRes = await customAxios.get('user/get');
      if (Array.isArray(updatedRes.data)) {
        setAdmins(updatedRes.data);
      }
    } catch (err) {
      console.error('Ошибка при регистрации администратора:', err.response ? err.response.data : err.message);
    }
  };

  const deleteAdmin = async (id) => {
    try {
      await customAxios.delete(`user/delete/${id}`);
      alert('Администратор удалён');
      setAdmins(admins.filter(admin => admin.id !== id));
    } catch (err) {
      console.error('Ошибка при удалении администратора:', err.response ? err.response.data : err.message);
    }
  };

  return (
    <div>
      <AdminNavBar1 />
      <div className='admin-page'>
        <div className='administratirs-page'>
          <div>
            <h2 className='title-admins'>Список администраторов:</h2>
            <ul className='list-admins'>
              {admins.length > 0 ? (
                admins.map((admin, index) => (
                  <li key={admin.id}>
                    {index + 1}. {admin.name} ({admin.email}) {admin.isCurrentUser && <strong>(Вы)</strong>}
                    {!admin.isCurrentUser && (
                      <button className='admin-delete' onClick={() => deleteAdmin(admin.id)}>Удалить</button>
                    )}
                  </li>
                ))
              ) : (
                <p>Администраторы не найдены!</p>
              )}
            </ul>
          </div>

          <div className='new-admin'>
            <h2 className='title-admins'>Добавить нового администратора!</h2>
            <input
              type="text"
              placeholder="Имя"
              value={newAdmin.name}
              className='modal-input-admin'
              onChange={(e) => setNewAdmin({ ...newAdmin, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              value={newAdmin.email}
              className='modal-input-admin'
              onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Пароль"
              value={newAdmin.password}
              className='modal-input-admin'
              onChange={(e) => setNewAdmin({ ...newAdmin, password: e.target.value })}
            />
            <button className='btn-new-admin' onClick={registerAdmin}>Зарегистрировать администратора</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Administrators;
