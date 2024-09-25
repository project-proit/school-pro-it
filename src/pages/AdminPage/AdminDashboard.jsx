import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineUserDelete } from "react-icons/ai";
import { RiUserSettingsLine } from "react-icons/ri";
import AddUser from './AddUser';
import axios from 'axios';
import './Admin.css';

const AdminDashboard = () => {
    const [records, setRecords] = useState([]);
    const [modalActive, setModalActive] = useState(false);

    const columns = [
        { key: 'id', label: 'ID' },
        { key: 'fullName', label: 'Полное имя' },
        { key: 'typeOfLearning', label: 'Тип обучения' },
        { key: 'scecialty', label: 'Направление' },
        { key: 'parentsName', label: 'ФИО родителя' },
        { key: 'phone', label: 'Телефон' },
        { key: 'email', label: 'Email' }
    ];

    useEffect(() => {
        axios.get('http://localhost:4000/api/student')
            .then(res => {
                setRecords(res.data);
            });
    }, []);

    const addRecord = (newRecord) => {
        setRecords([...records, newRecord]); // Добавить нового пользователя в таблицу
    };

    return (
        <div className='admin-page'>
            <button onClick={() => setModalActive(true)}>Add+</button>
            <table>
                <thead>
                    <tr>

                        {columns.map((col, i) => (
                            <th key={i}>{col.label}</th>
                        ))}
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        records.map((record, i) => (
                            <tr key={i}>
                                {columns.map((col, j) => (
                                    <td key={j}>{record[col.key]}</td>
                                ))}
                                <td><button><RiUserSettingsLine /></button>
                                <button><AiOutlineUserDelete /></button>
                                </td>
                                {/* <td><button><AiOutlineUserDelete /></button></td> */}
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <AddUser active={modalActive} setActive={setModalActive} addRecord={addRecord} />
        </div>
    );
}

export default AdminDashboard;
