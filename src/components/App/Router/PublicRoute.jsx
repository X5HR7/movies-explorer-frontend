import React, { useContext } from 'react';
import AuthContext from '../../../context/AuthContext';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ element: Component, ...props }) => {
  const { isAuth } = useContext(AuthContext);
  return (
    !isAuth ? <Component {...props} /> : <Navigate to='/movies' replace />
  );
};

export default PublicRoute;
