import React from 'react';
import './SubmitButton.css';

const SubmitButton = ({ classes, text, onClick, disabled = false }) => {
  return (
    <button
      type='submit'
      className={`button form__submit-button ${classes ? classes : ''}`}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default SubmitButton;
