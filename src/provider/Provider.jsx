import React from 'react';
import CurrentUserProvider from './CurrentUserProvider';
import PopupProvider from './PopupProvider';
import AuthProvider from './AuthProvider';

const Provider = ({ children }) => {
  return (
    <AuthProvider>
      <CurrentUserProvider>
        <PopupProvider>
          {children}
        </PopupProvider>
      </CurrentUserProvider>
    </AuthProvider>
  );
};

export default Provider;
