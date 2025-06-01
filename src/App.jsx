import React, { useEffect, useState } from 'react'
import tarefas from './data/tarefas.json'
import TodoInput from './components/TodoInput/index';
import TodoList from './components/TodoList/index';
import Filter from './components/Filter/index';
import Button from './components/Button/Button';

const App = () => {

  const [todos, setTodos] = useState([]);

  const addTodo = (nome) => {
    const novaTarefa = {
      id: Date.now(),
      nome,
      finalizado: false,
    };
    setTodos([novaTarefa, ... todos]);
  };

  const tarefaConcluida = (id) => {
    setTodos(
      todos.map((todo) => 
      todo.id === id ? {...todo, finalizado: !todo.finalizado} : todo
      )
    );
  };

  const removerTarefa = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    setTodos(tarefas)
  }, []);

  return (
    <div>
      <h1>Minhas Tarefas</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList 
      todos={todos} 
      tarefaConcluida={tarefaConcluida}
      removerTarefa={removerTarefa}
      />
      <Filter />
      <Button />
    </div>
  )
}

export default App;