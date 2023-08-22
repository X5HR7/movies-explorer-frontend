import { useContext } from 'react';
import CurrentUserContext from '../context/CurrentUserContext';

const useUser = () => {
  return useContext(CurrentUserContext);
};

export default useUser;
