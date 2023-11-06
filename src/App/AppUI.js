import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoContext } from '../TodoContext';
import { Modal } from './Modal';
import { TodoForm } from '../TodoForm';
import React from 'react';



function AppUI() {
  const 
    {
      loading,
      error,
      searchTodos,
      onComplete,
      deleteTodo,
      openModal,
      setOpenModal,
    } = React.useContext(TodoContext);
  

  return (
    <>

      <TodoCounter /> 
      <TodoSearch />


              <TodoList>
        
              {loading && (
                <>
                  <TodosLoading />
                  <TodosLoading />
                  <TodosLoading />
                </>
              )}
       
              {error && <TodosError />} 
              {(!loading && searchTodos.length === 0) && <EmptyTodos />} 
      
              {searchTodos.map(todo => (
                <TodoItem 
                  key={todo.text} 
                  text={todo.text} 
                  completed={todo.completed}
                  onComplete={() => onComplete(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                />
              ))}
            </TodoList>
  
     <CreateTodoButton 
     setOpenModal={setOpenModal}
     />

     {openModal && (
        <Modal>
          <TodoForm />
       </Modal>
     )}
         
    </>
  );
}

export { AppUI };