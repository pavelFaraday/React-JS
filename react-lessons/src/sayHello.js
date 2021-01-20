import React from 'react';
import './App.css';

function Hello() {
    const sayHello = () => {
      alert('Hello');
    };
  
    return (
      <div className='bordRed'>
        <h3>This is sayHello's Component.</h3>
        <button onClick={sayHello}>Hello</button>
      </div>
    );
  }
  
  export default Hello;