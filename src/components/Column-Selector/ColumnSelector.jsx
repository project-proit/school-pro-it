import React from 'react';
import './ColumnSelector.css';

const ColumnSelector = ({ columns, visibleColumns, setVisibleColumns }) => {
    const handleToggleColumn = (key) => {
        setVisibleColumns((prev) => 
            prev.includes(key) ? prev.filter(col => col !== key) : [...prev, key]
        );
    };

    return (
        <div className="column-selector">
            {columns.map((col) => (
                <label className='check-box' key={col.key}>
                    <input 
                        type="checkbox"
                        checked={visibleColumns.includes(col.key)} 
                        onChange={() => handleToggleColumn(col.key)} 
                    />
                    {col.label}
                </label>
            ))}
        </div>
    );
};


export default ColumnSelector
