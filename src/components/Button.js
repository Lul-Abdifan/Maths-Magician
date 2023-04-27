import React from 'react';
import PropTypes from 'prop-types';
import buttonsData from './buttonsData';

function Button(props) {
  const { handleClick } = props;
  return (
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
  );
}
Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Button;
