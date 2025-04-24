import React, { useState } from 'react';
import './App.css'; 

const Counter = () => {

  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  const handleIncrease = () => {
    setCount(count + 1);
  };


  const handleDecrease = () => {
    setCount(count - 1);
  };


  const handleInputChange = (e) => {
    const value = Number(e.target.value); 
    if (Number(value)) {
      setInputValue(value); 
    }
  };


  const increaseByInput = () => {
    setCount(count + inputValue);
  };


  const decreaseByInput = () => {
    setCount(count - inputValue);
  };

  return (
    <section id='Main'>
    <div className="counter-container">
      <h1>Counter</h1>

      <div className="counter-box">
        <button onClick={handleDecrease}>-</button>
        <span>{count}</span>
        <button onClick={handleIncrease}>+</button>
      </div>

      <div className="input-section">
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
        />
        <div className="input-buttons">
          <button onClick={increaseByInput}>Artır</button>
          <button onClick={decreaseByInput}>Azalt</button>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Counter;
