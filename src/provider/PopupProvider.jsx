import React, { useState } from 'react';
import PopupContext from '../context/PopupContext';

const PopupProvider = ({ children }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopupFailed, setIsPopupFailed] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  return (
    <PopupContext.Provider value={{
      isPopupOpen,
      setIsPopupOpen,
      isPopupFailed,
      setIsPopupFailed,
      popupMessage,
      setPopupMessage
    }}>
      {children}
    </PopupContext.Provider>
  );
};

export default PopupProvider;
