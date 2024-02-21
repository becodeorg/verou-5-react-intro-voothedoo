import React from 'react';
import './Button.css';


function Button({ handleClick }) {
  return (
    <button onClick={handleClick} className='btn add-todo'>Add Todo</button>
  );
}

export default Button;