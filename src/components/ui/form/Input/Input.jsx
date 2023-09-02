import React from 'react';
import './Input.css';

// const Input = ({ classes, type, id, placeholder, validators,  required = true }) => {
const Input = (props) => {
  return (
    <input
      className={`form__input ${props.type === 'email' ? 'form__input_type_email' : ''}`}
      required={true}
      {...{ ...props, value: props.value ? props.value : ''}}
    />
  );
};

export default Input;
