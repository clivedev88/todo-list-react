import React, { useEffect, useState } from 'react'
import TodoList from './components/TodoList'
import tarefas from './data/tarefas.json'

const App = () => {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(tarefas)
  }, []);

  return (
    <div className='h-full mx-5'>
      <h1 className='text-2xl font-bold mb-4 text-center'>Minhas Tarefas</h1>
      <TodoList todos={todos} />
    </div>
  )
}

export default App;