import React, { useEffect, useState } from 'react'
import TodoInput from './TodoInput';
import TodoList from './TodoList';
function Todo() {

    const [todos, setTodos] = useState([]);
    const [id, setId] = useState(1);
    const [filter, setFilter] = useState('all');

    const filterTodo = todos.filter((todo) => {
        switch (filter) {
            case 'completed':
                return todo.is_complete;
            case 'incomplete':
                return !todo.is_complete;
            default:
                return true;
        }
    });

    // ฟังก์ชันเมื่อปุ่มถูกคลิก



    const addTodo = (todo) => {
        const newTodo = {
            id: id,
            todo: todo,
            is_complete: false
        }
        setTodos([...todos, newTodo]);
        setId(id + 1)

    }

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const toggleCompleted = (id) => {
        const completedTodos = todos.map((todo) => todo.id === id ? { ...todo, is_complete: !todo.is_complete } : todo)

        setTodos(completedTodos);
    }


    useEffect(()=>{
        const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(storedTodos);
        if (storedTodos.length > 0) {
            setId(storedTodos[storedTodos.length - 1].id + 1); // Update ID based on last todo
        }
    },[])

    useEffect(()=>{
        if (todos.length > 0) {
            localStorage.setItem('todos', JSON.stringify(todos));
        }

    },[todos])


    return (
        <div className="container">
            <div className="justify-content-center align-items-center">
                <h3>Todo App</h3>
                <div>


                    <TodoInput addTodo={addTodo} />
                    <div className="d-flex flex-row">
                        <div><button onClick={() => setFilter("all")} className={`btn btn-outline-dark ${filter === 'all' ? 'active' : ''}`}>All</button></div>
                        <div><button onClick={() => setFilter("completed")} className={`btn btn-outline-dark ${filter === 'completed' ? 'active' : ''}`} >Completed</button></div>
                        <div><button onClick={() => setFilter("incomplete")} className={`btn btn-outline-dark ${filter === 'incomplete' ? 'active' : ''}`}>Incomplete</button></div>
                    </div>
                    <TodoList todoList={filterTodo} deleteTodo={removeTodo} toggleComplete={toggleCompleted} />
                </div>
            </div>


        </div>

    )
}

export default Todo