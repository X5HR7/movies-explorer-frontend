import React, { useMemo, useState } from 'react';
import AuthContext from '../context/AuthContext';

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(true);

  const value = useMemo(() => ({
    isAuth,
    setIsAuth
  }), [isAuth]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
