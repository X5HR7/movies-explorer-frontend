import React from 'react';
import './InputGroup.css';
import Input from '../Input/Input';

const InputGroup = ({ titleText, inputType, inputId, errorMessage, validators }) => {
  return (
    <div className='form__input-group'>
      <label htmlFor={inputId} className='form__input-title'>{titleText}</label>
      <Input type={inputType} id={inputId} placeholder={titleText} validators={validators} />
      <p className='form__input-field'>{errorMessage}</p>
    </div>
  );
};

export default InputGroup;
