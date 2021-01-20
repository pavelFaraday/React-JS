// 3) import files to another file 
import React, {useState} from 'react';
import Hello from './sayHello';


function MyFun() {
  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  };

  return (
    <div className='height_App'>
      <h1 className={isRed ? "red" : ""}>Change My Color!</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>
    </div>
  );
}

export default MyFun;