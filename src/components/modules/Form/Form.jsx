import React from 'react';
import './Form.css';

const Form = ({ children, handleSubmit }) => {
  return (
    <form className='form' onSubmit={handleSubmit} noValidate={true}>
      {children}
    </form>
  );
};

export default Form;
