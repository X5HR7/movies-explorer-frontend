import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../../context/AuthContext';

const ProtectedRoute = ({ element: Component, ...props }) => {
  const { isAuth } = useContext(AuthContext);

  return (
    isAuth ? <Component {...props} /> : <Navigate to='/signin' replace />
  );
};

export default ProtectedRoute;
