import React from 'react';
import './Input.css';

const Input = ({ classes, type, id, placeholder, validators,  required = true }) => {
  return (
    <input
      type={type}
      id={id}
      placeholder={`Введите ${placeholder.toLowerCase()}`}
      className={`form__input ${classes} ${type === 'email' ? 'form__input_type_email' : ''}`}
      required={required}
      {...validators}
    />
  );
};

export default Input;
