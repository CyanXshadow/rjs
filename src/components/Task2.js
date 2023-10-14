import React, { useState } from 'react';
import "./Task2CSS.css"

const Calculator = () => {
  const [expression, setExpression] = useState('');
  const [isNightMode, setNightMode] = useState(false);

  const handleButtonClick = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  const evaluateExpression = () => {
    try {
      const result = eval(expression);
      setExpression(result.toString());
    } catch (error) {
      setExpression('Error');
    }
  };

  const handleButtonClear = () => {
    setExpression("");
  };

  const toggleNightMode = () => {
    setNightMode(!isNightMode);
  };

  return (
    <div className={`calculator ${isNightMode ? 'night-mode' : ''}`}> 
      <div className={`display ${isNightMode ? 'night-mode-display' : ''}`}>{expression}
      <button className="night-mode-toggle" onClick={toggleNightMode}>
        {isNightMode ? 'Day Mode' : 'Night Mode'}
      </button>
      </div>
      <div className="buttons">
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
        <br />
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <br />
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <br />
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={evaluateExpression}>=</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <br />
        <button onClick={handleButtonClear} class="clear">Clear</button>
        <br/>
      </div>
    </div>
  );
};

export default Calculator;
