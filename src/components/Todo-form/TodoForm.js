import React from 'react';
import Button from './Button/Button';
import Input from './Input/Input';

import './TodoForm.css';

function TodoForm() {
  return (
    <section className='todo-form'>
      <Input />
      <Button />
    </section>
  );
}

export default TodoForm;