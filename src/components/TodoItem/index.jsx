import React from 'react'

const Todo = ({ tarefa, toggleComplete, deleteTodo }) => {
  return (
    <li>
      <div>
        <input 
        type="text"
        checked={tarefa.finalizado}
        onChange={() => toggleComplete(tarefa.id)}
        />
        <span className={tarefa.finalizado ? 'line-through text-gray-400' : ''}>
      {tarefa.nome}
        </span>
      </div>
      <div>
        <button
        onClick={() => alert('Funcionalidade EDITAR a implementar')}
        >Edit</button>
        
        <button
        onClick={() => deleteTodo(tarefa.id)}
        >Deletar</button>
      </div>
    </li>
  );
};

export default Todo
