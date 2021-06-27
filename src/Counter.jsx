import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(5);

  return(
    <React.Fragment>
      <p>The count is: {count} </p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </React.Fragment>
 );
};

export default Counter;


/* VERSION 1
import React from 'react';


const Counter = () => {
  const [count, setCount] = React.useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };



  return (
    <React.Fragment>
      <p>The count is: {count} </p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleIncrement}>Increment</button>

    </React.Fragment>
    
  )
}


export default Counter;
*/