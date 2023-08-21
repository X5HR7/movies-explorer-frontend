import React from 'react';
import './Form.css';

const Form = ({ children, handleSubmit }) => {
  return (
    <form className='form' onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

export default Form;
