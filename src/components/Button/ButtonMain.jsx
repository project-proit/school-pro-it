import React from 'react'
import "./Button.css"

const ButtonMain = ({ size = 'medium', color = 'primary', children, onClick }) => {
  return (
    <div>
        <button className={`button ${size} ${color}`} onClick={onClick}>
            {children}
        </button>
    </div>
  )
}

export default ButtonMain
