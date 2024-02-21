import React from 'react';
import './Button.css';


function Button() {
  const handleClick = () => {
    console.log('Clicked!');
  };

  return (
    <button onClick={handleClick} className='btn add-todo'>Add Todo</button>
  );
}

export default Button;