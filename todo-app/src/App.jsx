import React, { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import './App.css';


function App() {
  const getInitialTodos = () => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  };

  const [todos, setTodos] = useState(getInitialTodos);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now().toString(),
      text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const activeCount = todos.filter(todo => !todo.completed).length;

  return (
    <div className="app">
      <h1 className="title">Todo App</h1>
      
      <TodoInput onAddTodo={addTodo} />
      <TodoList 
        todos={todos}
        filter={filter}
        onToggleTodo={toggleTodo}
        onDeleteTodo={deleteTodo}
      />
      {todos.length > 0 && (
        <Footer
          activeCount={activeCount}
          currentFilter={filter}
          onFilterChange={setFilter}
          onClearCompleted={clearCompleted}
        />
      )}
    </div>
  );
}

export default App;