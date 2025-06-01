import React from 'react'
import Todo from '../TodoItem'

const TodoList = ({ todos }) => {
  return (
    <ul>
        {todos.map(todo => {
            return <Todo key={todo.id} tarefa={todo} />
        })}
    </ul>
  );
};

export default TodoList
