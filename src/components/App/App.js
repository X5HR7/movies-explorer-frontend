import React, { useEffect, useState } from 'react';
import './App.css';
import Router from './Router/Router';
import Popup from '../ui/Popup/Popup';
import { checkAuth } from '../../services/auth.service';
import MainApi from '../../utils/MainApi';
import Preloader from '../ui/Preloader/Preloader';
import useAuth from '../../hooks/useAuth';
import useUser from '../../hooks/useUser';

const App = () => {
  const { isAuth, setIsAuth } = useAuth();
  const { setUser } = useUser();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    checkAuth()
      .then(res => {
        if (res) setIsAuth(true);
        else setIsAuth(false);
      })
      .finally(() => setIsLoading(false));
  }, [setIsAuth]);

  useEffect(() => {
    MainApi.getUser()
      .then(user => {
        if (user) setUser(user);
      })
      .catch(status => {
        console.log(`Ошибка: ${status}`);
      });
  }, [isAuth, setUser]);

  return (
    <div className='App'>
      <Popup />
      {isLoading ? <Preloader /> : <Router />}
    </div>
  );
};

export default App;
