import React from 'react';
import './InputGroup.css';
import Input from '../Input/Input';

const InputGroup = ({ titleText, errorMessage, input }) => {

  return (
    <div className='form__input-group'>
      <label htmlFor={input.id} className='form__input-title'>{titleText}</label>
      <Input {...input} placeholder={`Введите ${titleText.toLowerCase()}`} />
      <p className='form__input-field'>{errorMessage}</p>
    </div>
  );
};

export default InputGroup;
