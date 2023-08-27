import React from 'react';
import './CheckBox.css';

const CheckBox = ({ id, text, value, setValue }) => {
  const toggleCheckBoxState = () => {
    setValue(prevValue => !prevValue);
  };

  return (
    <div className='checkbox'>
      <input
        id={id}
        type='checkbox'
        className='checkbox__input'
        value={value}
        checked={value}
        onChange={toggleCheckBoxState}
      />
      <label htmlFor={id} className='link checkbox__label'>
        {text}
      </label>
    </div>
  );
};

export default CheckBox;
