import React from 'react';
import './Popup.css';
import doneIcon from '../../../assets/images/icon_done.svg';
import failIcon from '../../../assets/images/icon_failed.svg';

const Popup = ({ isOpen, setIsOpen, isFailed = false, successText = 'Операция выполнена успешно' }) => {
  const handleCloseOnEscape = event => {
    if (event?.key?.toLowerCase() === 'escape') {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    if (isOpen)
      document.addEventListener('keydown', handleCloseOnEscape);
    else
      document.removeEventListener('keydown', handleCloseOnEscape);

    return () => {
      document.removeEventListener('keydown', handleCloseOnEscape);
    };
  }, [isOpen]);

  const closePopup = () => {
    setIsOpen(false);
  };

  const handlePopupClick = event => {
    event.stopPropagation();
  };


  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`} onClick={closePopup}>
      <div className='popup__container' onClick={handlePopupClick}>
        <button type='button' onClick={closePopup} className='button popup__button-close'></button>
        <img
          src={isFailed ? failIcon : doneIcon}
          alt={isFailed ? 'Произошла ошибка' : 'Операция выполнена успешно'}
          className='popup__image'
        />
        <p className='popup__text-message'>
          {isFailed ? 'Что-то пошло не так! Попробуйте ещё раз.' : successText}
        </p>
      </div>
    </div>
  );
};

export default Popup;
