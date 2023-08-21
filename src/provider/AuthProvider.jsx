import React, { useState } from 'react';
import AuthContext from '../context/AuthContext';

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(true);

  // const value = useMemo(() => ({ isAuth, setIsAuth }), [isAuth]);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
