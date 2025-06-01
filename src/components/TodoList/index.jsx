import React from 'react'
import Todo from '../TodoItem'

const TodoList = ({ todos, toggleComplete, deleteTodo }) => {
  return (
    <ul>
        {todos.map(todo => {
            return <Todo 
            key={todo.id} 
            tarefa={todo} 
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            />
        })}
    </ul>
  );
};

export default TodoList
