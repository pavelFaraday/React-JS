import React from 'react';
import './App.css';

function Hello({name, message, numberLikes, btnValue}) {
  const sayHello = () => {
    alert(`Hey you, ${message}`);
  };

  return (
    <div className='bordRed'>
      <h3>{name}</h3>
      <p>{message}</p>
      <p>LIKES: {numberLikes}</p>
      <button onClick={sayHello}>{btnValue}</button>
    </div>
  );
} 

export default Hello;

/*  ------- OR -------
function Hello(props) {
  const sayHello = () => {
    alert('Hello');
  };

  return (
    <div className='bordRed'>
      <h3>{props.name}</h3>
      <p>{props.message}</p>
      <p>LIKES: {props.numberLikes}</p>
      <button onClick={sayHello}>Hello</button>
    </div>
  );
}
*/
  
