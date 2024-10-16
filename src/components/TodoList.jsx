import React from 'react'
import TodoItem from './TodoItem'
 
function TodoList({todoList,deleteTodo,toggleComplete}) {
    



  return (
    <div>
        { todoList.length !== 0 ?(
            todoList.map((todo) => (
                <TodoItem
                  key={todo.id}
                  item={todo}
                  deleteTodo={deleteTodo}
                  onToggleComplete={toggleComplete}
                />
              ))


        ): <div className="mt-4">

              <div className="h4 text-secondary">not have Todo</div>

          </div>
         

        }
    </div>
  )
}

export default TodoList