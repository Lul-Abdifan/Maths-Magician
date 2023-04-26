import React from "react";
import buttonsData from "./buttonsData";

function Calculator() {
  return (
    <div className="container">
      <div className="screen"></div>
      <div className="calculator">
        <div className="table">
          {buttonsData.map((button) => (
            <button
              key={button.value}
              type="button"
              className={button.className}
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
