import React, { useRef } from 'react';
import './Input.css';

function Input() {
  const todoNameRef = useRef();

  return (
    <input ref={todoNameRef} className='add-todo' type="text" placeholder='Add a todo' />
  );
}

export default Input;