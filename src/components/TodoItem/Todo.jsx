import React from 'react'

const Todo = ({ todo }) => {
  return (
    <li className=''>
        <span>
      {todo.nome}
        </span>
    </li>
  );
};

export default Todo
