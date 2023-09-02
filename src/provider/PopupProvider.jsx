import React, { useMemo, useState } from 'react';
import PopupContext from '../context/PopupContext';

const PopupProvider = ({ children }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopupFailed, setIsPopupFailed] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const value = useMemo(() => ({
    isPopupOpen,
    setIsPopupOpen,
    isPopupFailed,
    setIsPopupFailed,
    popupMessage,
    setPopupMessage
  }), [isPopupOpen, isPopupFailed, popupMessage]);

  return (
    <PopupContext.Provider value={value}>
      {children}
    </PopupContext.Provider>
  );
};

export default PopupProvider;
