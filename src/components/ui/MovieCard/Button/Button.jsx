import React from 'react';
import './Button.css';
import SaveButton from './SaveButton/SaveButton';
import DeleteButton from './DeleteButton/DeleteButton';

const Button = ({ isLiked, isOnSavedPage, likeMovie, deleteMovie }) => {
  return (
    <>
      {
        isOnSavedPage ?
          <DeleteButton deleteMovie={deleteMovie}/>
          :
          <SaveButton isLiked={isLiked} likeMovie={likeMovie} deleteMovie={deleteMovie}/>
      }
    </>
  );
};

export default Button;
