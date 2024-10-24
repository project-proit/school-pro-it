import React, { useEffect, useState } from 'react';
import { RiUserForbidLine, RiUserSettingsLine, RiUserAddLine, RiUserHeartLine } from "react-icons/ri";
import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from "react-icons/hi2";
import AddUser from './AddUser';
import customAxios from "../../axios";
import { FiFilter } from "react-icons/fi";
import './Admin.css';
import EditUser from './EditUser';
import AdminNavBar1 from './AdminNavBar/AdminNavBar1';
import ColumnSelector from '../../components/Column-Selector/ColumnSelector';

const Applications = ( {setIsAuthenticated} ) => {
    const [records, setRecords] = useState([]);
    const [modalActive, setModalActive] = useState(false);
    const [editModalActive, setEditModalActive] = useState(false);
    const [currentRecord, setCurrentRecord] = useState(null);
    const [showFilter, setShowFilter] = useState(false);

    // Пагинация
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(10);

    const columns = [
        { key: 'fullName', label: 'Полное имя' },
        { key: 'typeOfLearning', label: 'Тип обучения' },
        { key: 'specialty', label: 'Направление' },
        { key: 'city', label: 'Город' },
        { key: 'status', label: 'Статус' },
        { key: 'age', label: 'Возраст' },
        { key: 'parentsName', label: 'ФИО родителя' },
        { key: 'phone', label: 'Телефон' },
        { key: 'email', label: 'Email' },
        { key: 'url', label: 'url' },
    ];

    // Перенос заявки в студенты
    const addStudent = (studentData) => {
        const confirmDelete = window.confirm("Вы действительно хотите добавить этого ученика?");
        if (confirmDelete) {
            return customAxios.post(`student/create`, studentData);
        }
        else {
            return Promise.reject('Пользователь отменил добавление');
        }
    };

    useEffect(() => {
        console.log("Состояние изменилось:", records);
    }, [records]);
    
    const handleAcceptClick = (record) => {
        if (record.status === 'Принят') return;  // Если уже принят, не делаем ничего
    
        const studentData = {
            fullName: record.fullName,
            typeOfLearning: record.typeOfLearning,
            specialty: record.specialty,
            city: record.city,
            age: record.age,
            parentsName: record.parentsName,
            phone: record.phone,
            email: record.email,
            url: record.url,
        };
    
        // Пытаемся добавить студента
        addStudent(studentData)
            .then(() => {
                // После успешного добавления студента, обновляем статус заявки
                return customAxios.put(`application/${record.id}`, { status: 'Принят' });
            })
            .then(() => {
                // Обновляем локальные записи
                setRecords(prevRecords =>
                    prevRecords.map(r =>
                        r.id === record.id ? { ...r, status: 'Принят' } : r
                    )
                );
                console.log("Состояние после изменения:", records);
            })
            .catch(err => {
                // Если ошибка (или отказ пользователя), выводим сообщение
                console.error("Ошибка при добавлении студента или обновлении статуса:", err);
            });
    };

    // фильтры, сортировка, выбор столбцов
    const [visibleColumns, setVisibleColumns] = useState(columns.map(col => col.key));
    const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
    const [filterTypeOfLearning, setFilterTypeOfLearning] = useState('Все');
    const [filterSpecialty, setFilterSpecialty] = useState('Все');

    useEffect(() => {
        customAxios.get(`application/get`)
            .then(res => setRecords(res.data));
    }, []);

    const addRecord = (newRecord) => {
        setRecords([...records, newRecord]);
    };

    const updateRecord = (updatedRecord) => {
        setRecords(records.map(record => 
            record.id === updatedRecord.id ? updatedRecord : record
        ));
    };

    const handleEditClick = (record) => {
        setCurrentRecord(record);
        setEditModalActive(true);
    };

    const deleteRecord = (id) => {
        const confirmDelete = window.confirm("Вы действительно хотите удалить данную анкету?");
        if (confirmDelete) {
            customAxios.delete(`application/delete/${id}`)
            .then(() => {
                setRecords(records.filter(record => record.id !== id));
            })
            .catch(err => {
                console.error("Ошибка при удалении записи:", err);
            });
        }
    };

    // Фильтрация по типу обучения и направлениям
    const filteredRecords = records.filter(record => {
        if (filterTypeOfLearning !== 'Все' && record.typeOfLearning !== filterTypeOfLearning) {
            return false;
        }
        if (filterSpecialty !== 'Все' && record.specialty !== filterSpecialty) {
            return false;
        }
        return true;
    });
    

    // Сортировка записей
    const sortedRecords = filteredRecords.sort((a, b) => {
        if (!sortConfig.key) return 0;
        const direction = sortConfig.direction === 'asc' ? 1 : -1;
        if (a[sortConfig.key] < b[sortConfig.key]) return -1 * direction;
        if (a[sortConfig.key] > b[sortConfig.key]) return 1 * direction;
        return 0;
    });

    const handleSort = (columnKey) => {
        let direction = 'asc';
        if (sortConfig.key === columnKey && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key: columnKey, direction });
    };
    

    // Пагинация записей после фильтрации и сортировки
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = sortedRecords.slice(indexOfFirstRecord, indexOfLastRecord);

    // Общее количество страниц
    const totalPages = Math.ceil(sortedRecords.length / recordsPerPage);

    // Обработчик изменения фильтра по типу обучения
    const handleFilterChange = (e) => {
        setFilterTypeOfLearning(e.target.value);
    };

    // Количество заявок в полугодовую школу
    const halfYearSchoolCount = records.filter(record => record.typeOfLearning === 'Полугодовая школа').length;

    // Количество заявок на интенсивы
    const intensivesCount = records.filter(record => record.typeOfLearning === 'Интенсивы').length;

    return (
        <div>
            <AdminNavBar1 />
            <div className='admin-page'>
                <div><h1>Заявки</h1></div>
                <div className='total-applications'>
                    <h4>Количество заявок всего: {records.length}</h4>
                    <h4>Количество заявок в полугодовую школу: {halfYearSchoolCount}</h4>
                    <h4>Количество заявок на интенсивы: {intensivesCount}</h4>
                </div>
                <div><button className='btn-add' onClick={() => setModalActive(true)}><RiUserAddLine /></button></div>
                <div className='selector-column' ><ColumnSelector 
                    columns={columns} 
                    visibleColumns={visibleColumns} 
                    setVisibleColumns={setVisibleColumns}
                /></div>
                <div className='table-container'>
                    <table className='table-admin'>
                        <thead>
                            <tr>
                                <th>#</th> 
                                <th>Act</th>
                                    {columns.map((col, i) => (
                                        visibleColumns.includes(col.key) && (
                                            <th key={i} onClick={() => handleSort(col.key)}>
                                                {col.key === 'typeOfLearning' ? (
                                                    <th key={i}>
                                                    Тип обучения
                                                    <div 
                                                    className='filter-container'
                                                    onMouseEnter={() => setShowFilter(true)} 
                                                    onMouseLeave={() => setShowFilter(false)}
                                                    >
                                                        <FiFilter className="filter-icon" />
                                                        <select 
                                                            className='type-of-lean-select'
                                                            value={filterTypeOfLearning}
                                                            onChange={handleFilterChange}
                                                            style={{ display: showFilter ? 'block' : 'none' }}
                                                        >
                                                            <option value="Все">Все</option>
                                                            <option value="Полугодовая школа">Полугодовая школа</option>
                                                            <option value="Интенсивы">Интенсивы</option>
                                                        </select>
                                                    </div>
                                                    </th>
                                                
                                                ) : (
                                                    <>
                                                        {col.label} {sortConfig.key === col.key && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                                                    </>
                                                )}
                                            </th>
                                        )
                                    ))}
                            </tr>
                        </thead>
                        <tbody>
                            {currentRecords.map((record, i) => (
                                <tr className='records' key={i}>
                                    <td>{indexOfFirstRecord + i + 1}</td>
                                    <td className='actions-btns'>
                                        <button className='icon-edit' onClick={() => handleEditClick(record)}><RiUserSettingsLine /></button>
                                        <button className='icon-del' onClick={() => deleteRecord(record.id)}><RiUserForbidLine /></button>
                                        <button className='icon-accept' onClick={() => handleAcceptClick(record)} disabled={record.status === 'Принят'}><RiUserHeartLine /></button>
                                    </td>
                                    {columns.map((col, j) => (
                                        visibleColumns.includes(col.key) && <td key={j}>{record[col.key]}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Кнопки пагинации */}
            <div className='pagination'>
                <HiOutlineArrowLongLeft className='arrows-for-pagination' onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}/>
                <span>Страница {currentPage} из {totalPages}</span>
                <HiOutlineArrowLongRight className='arrows-for-pagination' onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}/>
            </div>

            <AddUser active={modalActive} setActive={setModalActive} addRecord={addRecord} />
            <EditUser
                active={editModalActive}
                setActive={setEditModalActive}
                currentRecord={currentRecord}
                updateRecord={updateRecord}
            />
        </div>
    );
}

export default Applications;