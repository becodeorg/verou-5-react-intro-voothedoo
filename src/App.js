import TodoForm from "./components/Todo-form/TodoForm";
import './App.css';
import Todo from "./components/Todo-list/Todos/Todo";

function App() {
  return (
    <div className="App">
      <TodoForm />
      <Todo />
    </div>
  );
}

export default App;
