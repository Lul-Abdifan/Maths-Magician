import React from 'react';

function Calculator() {
  return (
    <div className="container">
      <div className="screen">0</div>
      <div className="calculator">
        <table>
          <tr>
            <td>AC</td>
            <td>+/-</td>
            <td>%</td>
            <td className="orange-tag">÷</td>
          </tr>
          <tr>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td className="orange-tag">x</td>
          </tr>
          <tr>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td className="orange-tag">-</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td className="orange-tag">+</td>
          </tr>
          <tr>
            <td colSpan="2">0</td>
            <td>.</td>
            <td className="orange-tag">=</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Calculator;
