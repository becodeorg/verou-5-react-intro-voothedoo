import React from 'react';
import './Input.css';

function Input({ todoNameRef }) {
  return (
    <input ref={todoNameRef} className='add-todo' type="text" placeholder='Add a todo' />
  );
}

export default Input;