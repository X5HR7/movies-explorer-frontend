import React from 'react';
import './Button.css';
import SaveButton from './SaveButton/SaveButton';
import DeleteButton from './DeleteButton/DeleteButton';

const Button = ({ isLiked, isOnSavedPage }) => {
  return (
    <>
      {
        isOnSavedPage ?
          <DeleteButton />
          :
          <SaveButton isLiked={isLiked} />
      }
    </>
  );
};

export default Button;
