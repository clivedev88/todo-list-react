import React, { useEffect, useState } from 'react'
import TodoList from './components/TodoList'
import tarefas from './data/tarefas.json'
import TodoInput from './components/TodoInput';
import Todo from './components/TodoItem/Todo';
import Filter from './components/Filter';
import Button from './components/Button/Button';

const App = () => {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(tarefas)
  }, []);

  return (
    <div className='h-full mx-5'>
      <h1 className='text-2xl font-bold mb-4 text-center'>Minhas Tarefas</h1>
      <TodoInput />;
      <Todo />
      <TodoList todos={todos} />
      <Filter />
      <Button />
    </div>
  )
}

export default App;