import React from 'react'
import Todo from '../TodoItem'

const TodoList = ({ todos, tarefaConcluida, removerTarefa }) => {
  return (
    <ul>
        {todos.map(todo => {
            return <Todo 
            key={todo.id} 
            tarefa={todo} 
            tarefaConcluida={tarefaConcluida}
            removerTarefa={removerTarefa}
            />
        })}
    </ul>
  );
};

export default TodoList
