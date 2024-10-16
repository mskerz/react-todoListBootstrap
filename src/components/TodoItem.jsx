import React from 'react'
import { FaTimes } from 'react-icons/fa';
import './todoinput.css'

export default function TodoItem({ item, deleteTodo, onToggleComplete }) {
    return (
        <div className="card border-0 mt-2" key={item.id} style={{ backgroundColor: item.is_complete ? '#e5e5e5' : 'white',  }}>
            <div className="card-body d-flex flex-row justify-content-between " >
                <div className=" d-flex flex-row ">
                    <input type="checkbox" onChange={() => onToggleComplete(item.id)} checked={item.is_complete} className="form-check-input" />
                    <label
                        className="form-check-label ms-3" // เพิ่มคลาส Bootstrap
                        style={{
                            textDecoration: item.is_complete ? 'line-through' : 'none',
                            color: item.is_complete ? '#6c757d' : 'black',
                        }}
                    >
                        {item.todo}
                    </label>

                </div>
                <a onClick={() => deleteTodo(item.id)} style={{ cursor: 'pointer', color: 'black' }}><FaTimes /></a>
                 
            </div>
        </div>
    )
}
