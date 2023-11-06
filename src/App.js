import './App.css';
import { TodoProvider } from './TodoContext';
import { AppUI } from './App/AppUI';
import React from 'react';

function App() {
  return (

    <TodoProvider>
    <AppUI />
  </TodoProvider>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edita el archivo <code>src/App.js</code> y guarda para recargar.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://platzi.com/reactjs"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
