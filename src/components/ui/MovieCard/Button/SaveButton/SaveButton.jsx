import React from 'react';
import icon from '../../../../../assets/images/saved-button-icon.svg'

const SaveButton = ({ isLiked }) => {
  return (
    <button type='button' className={`button card__button ${isLiked ? 'card__button_type_saved' : ''}`}>
      {
        isLiked ?
          <img src={icon} alt='Сохранено' className='card__button-icon' />
          :
          'Сохранить'
      }
    </button>
  );
};

export default SaveButton;
