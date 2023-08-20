import React, { useState } from 'react';
import PopupContext from '../context/PopupContext';

const PopupProvider = ({ children }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  const [isPopupFailed, setIsPopupFailed] = useState(false);

  return (
    <PopupContext.Provider value={{
      isPopupOpen,
      setIsPopupOpen,
      isPopupFailed,
      setIsPopupFailed
    }}>
      {children}
    </PopupContext.Provider>
  );
};

export default PopupProvider;
