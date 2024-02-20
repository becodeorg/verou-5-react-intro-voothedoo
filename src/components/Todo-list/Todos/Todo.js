import React from 'react';
import './Todo.css';

function Todo() {
  return (
    <>
      <div className='todo-div'>
        <input className='todos' type="checkbox" id='todo1' />
        <label htmlFor='todo1'>Learn React</label>
      </div>
      <div className='todo-div'>
        <input className='todos' type="checkbox" id='todo2' />
        <label htmlFor='todo2'>Be awesome</label>
      </div>
    </>

  );
}

export default Todo;