import React from 'react';
import icon from '../../../../../assets/images/close-button-icon.svg';

const DeleteButton = ({ deleteMovie }) => {
  return (
    <button type='button' className='button card__button' onClick={deleteMovie}>
      <img src={icon} alt='Сохранено' className='card__button-icon card__button-icon_type_delete' />
    </button>
  );
};

export default DeleteButton;
