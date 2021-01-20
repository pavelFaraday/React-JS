// 2) add javaScript  Logic tO html
// Everithing in {} is javascript Code
// We put {} into component's html code, for adding JS logic to Html

import React from 'react';

function myFun() {
  
  const sayHello = () => {
    alert('Hello');
  };

  let counter = 156686;
  let myPara = 'It is variable in Paragraph with React.';

  return (
    <div>
      <h1>Hello World</h1>
      <p>{myPara}</p>
      <button onClick={sayHello}>Hello</button> 
      <input type='text' value={counter}></input> 
    </div>
  );
}

export default myFun;