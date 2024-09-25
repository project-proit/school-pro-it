import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Admin.css';

const AdminDashboard = () => {
    const [records, setRecords] = useState([]);

    // Задаём массив с выбранными полями в нужном порядке
    const columns = [
        { key: 'id', label: 'ID' },
        { key: 'fullName', label: 'Полное имя' },
        // { key: 'typeOfLearning', label: 'Тип обучения' },
        { key: 'specialty', label: 'Направление' },
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

    return (
        <div>
            <Link to='/'><button>Add+</button></Link>
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
                                <td>Up</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default AdminDashboard;
