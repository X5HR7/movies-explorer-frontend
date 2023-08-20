import React, { useState } from 'react';
import CurrentUserContext from '../context/CurrentUserContext';

const CurrentUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <CurrentUserContext.Provider value={{ user, setUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;
