import Todos from "./components/Todo-list/Todos/Todos";
import TodoForm from "./components/Todo-form/TodoForm";
import './App.css';
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState(['todo1', 'todo2']);
  return (
    <div className="App">
      <TodoForm />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
