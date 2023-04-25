import React, { useState } from 'react';
import calculate from '../logic/calculate';
import buttonsData from './buttonsData';

function Calculator() {
  const [calcData, setcalcData] = useState({
    total: 0,
    next: null,
    operation: null,
  });
  const handleClick = (btn) => {
    const data = calculate(calcData, btn);
    setcalcData(data);
  };
  return (
    <div className="container">
      <div className="screen">
        {calcData.next || calcData.operation || calcData.total || '0'}
      </div>
      <div className="calculator">
        <div className="table">
          {buttonsData.map((button) => (
            <button
              key={button.value}
              type="button"
              className={button.className}
              onClick={() => handleClick(button.value)}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
