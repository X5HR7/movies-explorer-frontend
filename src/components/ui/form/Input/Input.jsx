import React from 'react';
import './Input.css';

const Input = ({ classes, type, id, placeholder, required = true }) => {
  return (
    <input
      type={type}
      id={id}
      placeholder={`Введите ${placeholder.toLowerCase()}`}
      className={`form__input ${classes} ${type === 'email' ? 'form__input_type_email' : ''}`}
      required={required}
    />
  );
};

export default Input;
