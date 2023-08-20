import React, { useCallback, useContext, useEffect } from 'react';
import './Popup.css';
import doneIcon from '../../../assets/images/icon_done.svg';
import failIcon from '../../../assets/images/icon_failed.svg';
import PopupContext from '../../../context/PopupContext';

const Popup = ({ successText = 'Операция выполнена успешно' }) => {
  const { isPopupOpen, setIsPopupOpen, isPopupFailed } = useContext(PopupContext);

  const handleCloseOnEscape = useCallback(event => {
    if (event?.key?.toLowerCase() === 'escape') {
      setIsPopupOpen(false);
    }
  }, [setIsPopupOpen])

  useEffect(() => {
    if (isPopupOpen)
      document.addEventListener('keydown', handleCloseOnEscape);
    else
      document.removeEventListener('keydown', handleCloseOnEscape);

    return () => {
      document.removeEventListener('keydown', handleCloseOnEscape);
    };
  }, [isPopupOpen, handleCloseOnEscape]);

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handlePopupClick = event => {
    event.stopPropagation();
  };


  return (
    <div className={`popup ${isPopupOpen ? 'popup_opened' : ''}`} onClick={closePopup}>
      <div className='popup__container' onClick={handlePopupClick}>
        <button type='button' onClick={closePopup} className='button popup__button-close'></button>
        <img
          src={isPopupFailed ? failIcon : doneIcon}
          alt={isPopupFailed ? 'Произошла ошибка' : 'Операция выполнена успешно'}
          className='popup__image'
        />
        <p className='popup__text-message'>
          {isPopupFailed ? 'Что-то пошло не так! Попробуйте ещё раз.' : successText}
        </p>
      </div>
    </div>
  );
};

export default Popup;
