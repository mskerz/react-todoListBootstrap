import React, { useState } from 'react'
import './todoinput.css'
import { IoMdAdd } from "react-icons/io";

const TodoInput = ({addTodo}) => {
    const [newtodo,setNewTodo] = useState('');


    function saveTodo(todo) {
        
        if(!todo){
            alert('ระบุสิ่งที่จะทำ')
          
          return;
        }
        addTodo(todo);
        setNewTodo('');
    }


  return (
    <div>
       <div className="mb-2">
        <div className="d-flex flex-row">
        <input value={newtodo} onChange={(e)=>setNewTodo(e.target.value)} className="form-control col-md-4"  type="text" />
        <button onClick={()=>saveTodo(newtodo)} className="btn btn-primary btn-dark"><IoMdAdd/></button>
        </div>
            
       </div>

    </div>
  )
}

export default TodoInput