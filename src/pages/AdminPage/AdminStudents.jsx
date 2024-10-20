import React, { useEffect, useState } from 'react';
import { RiUserForbidLine, RiUserSettingsLine, RiUserAddLine } from "react-icons/ri";
import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from "react-icons/hi2";
import AddStudent from './AddStudent';
import customAxios from "../../axios";
import { FiFilter } from "react-icons/fi";
import './Admin.css';
import EditStudent from './EditStudent';
import AdminNavBar1 from './AdminNavBar/AdminNavBar1';
import ColumnSelector from '../../components/Column-Selector/ColumnSelector';

const AdminStudents = () => {
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
      { key: 'age', label: 'Возраст' },
      { key: 'parentsName', label: 'ФИО родителя' },
      { key: 'phone', label: 'Телефон' },
      { key: 'email', label: 'Email' },
  ];

  // фильтры, сортировка, выбор столбцов
  const [visibleColumns, setVisibleColumns] = useState(columns.map(col => col.key));
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [filterTypeOfLearning, setFilterTypeOfLearning] = useState('Все');

  useEffect(() => {
        customAxios.get(`student/get`)
          .then(res => setRecords(res.data));
  }, [])

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
      const confirmDelete = window.confirm("Вы действительно хотите удалить данного ученика?");
      if (confirmDelete) {
            customAxios.delete(`student/delete/${id}`)
              .then(() => {
                  setRecords(records.filter(record => record.id !== id));
              })
              .catch(err => {
                  console.error("Ошибка при удалении записи:", err);
              });
      }
  };

  // Фильтрация по типу обучения
  const filteredRecords = records.filter(record => {
      if (filterTypeOfLearning === 'Все') {
          return true;
      }
      return record.typeOfLearning === filterTypeOfLearning;
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
  
  // Количество заявок в полугодовую школу
  const halfYearSchoolCount = records.filter(record => record.typeOfLearning === 'Полугодовая школа').length;

  // Количество заявок на интенсивы
  const intensivesCount = records.filter(record => record.typeOfLearning === 'Интенсивы').length;

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
  
  return (
    <div>
      <AdminNavBar1 />
      <div className='admin-page'>
        <div><h1>Ученики</h1></div>
        <div className='total-applications'>
          <h4>Количество учеников всего: {records.length}</h4>
          <h4>Количество учеников полугодовой школы: {halfYearSchoolCount}</h4>
          <h4>Количество учеников унтенсивов: {intensivesCount}</h4>
        </div>
        <div><button className='btn-add' onClick={() => setModalActive(true)}><RiUserAddLine /></button></div>
        <div className='selector-column' ><ColumnSelector 
            columns={columns} 
            visibleColumns={visibleColumns} 
            setVisibleColumns={setVisibleColumns}
        /></div>
        <div className='table-container'>
            <table>
                <thead>
                    <tr>
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
                            <td className='actions-btns'>
                                <button className='icon-edit' onClick={() => handleEditClick(record)}><RiUserSettingsLine /></button>
                                <button className='icon-del' onClick={() => deleteRecord(record.id)}><RiUserForbidLine /></button>
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

    <AddStudent active={modalActive} setActive={setModalActive} addRecord={addRecord} />
    <EditStudent
        active={editModalActive}
        setActive={setEditModalActive}
        currentRecord={currentRecord}
        updateRecord={updateRecord}
    />
    </div>
  )
}

export default AdminStudents
