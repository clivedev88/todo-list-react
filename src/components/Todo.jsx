import React from 'react'

const Todo = ({ todo }) => {
  return (
    <li>
        <span>
      {todo.nome}
        </span>
    </li>
  );
};

export default Todo
