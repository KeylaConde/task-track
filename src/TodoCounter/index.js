import { TodoContext } from '../TodoContext';
import './TodoCounter.css';
import React from 'react';

function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);

    return (
     <h1 className='TodoCounter'>You've done 
       <span> { completedTodos } </span>
        of 
       <span className='Total'>  { totalTodos }  </span>
        <span className='todos'> TASKS </span>
     </h1>
    );
  }

  export { TodoCounter };