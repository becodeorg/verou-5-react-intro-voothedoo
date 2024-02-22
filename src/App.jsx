import "./assets/styles/App.css";
import { Header, Main } from "./components";
import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const addTodoRef = useRef();
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    const todo = addTodoRef.current.value;
    if (todo === "") return;
    console.log(todo);
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: todo, complete: false }];
    });
  };

  return (
    <>
      <Header />
      <Main todos={todos} addTodo={addTodo} addTodoRef={addTodoRef} />
    </>
  );
}

export default App;
