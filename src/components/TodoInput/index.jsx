import React, { useState } from 'react'

const TodoInput = ({addTodo}) => {

  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const textoTarefa = inputValue.trim();
    if(!textoTarefa) return;

    addTodo(textoTarefa);
    setInputValue('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
        type="text"
        placeholder='Tarefa a fazer'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        />
        
        <button 
        type="submit"
        aria-label='Adicionar tarefa'>Adicionar tarefa</button>
      </form>
    </div>
  )
}

export default TodoInput
