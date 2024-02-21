import React from 'react';
import './Todos.css';
import Todo from './Todo';

function Todos({ todos }) {
  return (
    todos.map(todo => <Todo todo={todo} />)

  );
}

export default Todos;