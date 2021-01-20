// 3) import files to another file 
import React from 'react';
import Hello from './sayHello';


function myFun() {
  return (
    <div className='height_App'>
      <Hello name='Dev Ed' message='Good morning' numberLikes='128K' btnValue='Dev Says:' />  
      <Hello name='Mosh' message='Good Night' numberLikes='232K' btnValue='Mosh Says:' />  
      <Hello name='Winter is Coming' message='Happy Birthday' numberLikes='70K' btnValue='Winter Says:' />  
      <Hello name='Gulfo' message='Happy new Year' numberLikes='12K' btnValue='Gulfo Says:' />  
    </div>
  );
}

export default myFun;