import React from 'react';
import './CheckBox.css';

const CheckBox = ({ id, text }) => {
  return (
    <div className='checkbox'>
      <input type='checkbox' id={id} className='checkbox__input' />
      <label htmlFor={id} className='link checkbox__label'>{text}</label>
    </div>
  );
};

export default CheckBox;
