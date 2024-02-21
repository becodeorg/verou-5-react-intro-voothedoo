import React from 'react';
import Button from './Button/Button';
import Input from './Input/Input';
import './TodoForm.css';

function TodoForm({ todoNameRef, handleClick }) {
  return (
    <section className='todo-form'>
      <Input todoNameRef={todoNameRef} />
      <Button handleClick={handleClick} />
    </section>
  );
}

export default TodoForm;