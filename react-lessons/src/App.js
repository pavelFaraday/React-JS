// 3) import files to another file 
import React from 'react';
import Hello from './sayHello';

function myFun() {
  return (
    <div>
      <h1>This is myFun's Component.</h1>
      <Hello/>  
    </div>
  );
}

export default myFun;