import React from 'react';

function Hello() {
    const sayHello = () => {
      alert('Hello');
    };
  
    return (
      <div>
        <h3>This is sayHello's Component.</h3>
        <button onClick={sayHello}>Hello</button>
      </div>
    );
  }
  
  export default Hello;