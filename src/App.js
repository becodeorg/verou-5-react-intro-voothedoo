import Todos from "./components/Todo-list/Todos/Todos";
import TodoForm from "./components/Todo-form/TodoForm";
import './App.css';
import { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const todoNameRef = useRef();
  const LOCAL_STORAGE_KEY = 'todoApp.todos';

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    console.log(localStorage);
  }, [todos]);

  const handleClick = () => {
    const name = todoNameRef.current.value;
    if (name === '') return;
    setTodos(prevTodos => [...prevTodos, { id: uuidv4(), name: name, complete: false }]);
    todoNameRef.current.value = null;
  };

  return (
    <div className="App">
      <TodoForm todoNameRef={todoNameRef} handleClick={handleClick} />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
