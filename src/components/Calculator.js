import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Button from './Button';
import '../App.scss';

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
  const { total, next, operation } = calcData;
  return (
    <div className="full-calculator">
      <h2>Lets do some Mathematics</h2>
      <div className="container">
        <div className="screen">
          {total}
          {operation}
          {next}
        </div>
        <div className="calculator">
          <Button handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
