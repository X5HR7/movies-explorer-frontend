import React, { useMemo, useState } from 'react';
import CurrentUserContext from '../context/CurrentUserContext';

const CurrentUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({
    user,
    setUser
  }), [user]);

  return (
    <CurrentUserContext.Provider value={value}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;
