import React from 'react';
import { FaCheck } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import './Table.css';

const Table = () => {
  return (
    <div className='container-pros-cons'>
        <div className='title-pros-cons'><h1>У нас есть интенсивы! </h1></div>
        <div className="table-container">
            <table className="comparison-table">
                <thead>
                    <tr>
                        <th>Критерий</th>
                        <th>Интенсив</th>
                        <th>Полугодовая школа</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Кол-во напрвлений</td>
                        <td>7</td>
                        <td>9</td>
                    </tr>
                    <tr>
                        <td>Мини-группы</td>
                        <td><FaCheck /></td>
                        <td><IoCloseSharp className="mark-no" /></td>
                    </tr>
                    <tr>
                        <td>Онлайн занятия</td>
                        <td><FaCheck /></td>
                        <td><FaCheck /></td>
                    </tr>
                    <tr>
                        <td>Проекты</td>
                        <td>Личные</td>
                        <td>Командные</td>
                    </tr>
                    <tr>
                        <td>Время обучения</td>
                        <td>2 месяца</td>
                        <td>6 месяцев</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Table
