import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import Router from './Router/Router';
import Popup from '../ui/Popup/Popup';
import AuthContext from '../../context/AuthContext';
import { checkAuth } from '../../services/auth.service';
import MainApi from '../../utils/MainApi';
import CurrentUserContext from '../../context/CurrentUserContext';
import Preloader from '../ui/Preloader/Preloader';

const App = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const { setUser } = useContext(CurrentUserContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    checkAuth()
      .then(res => {
        if (res)
          setIsAuth(true);
        else
          setIsAuth(false);
      })
      .finally(() => setIsLoading(false));
  }, [setIsAuth]);

  useEffect(() => {
    MainApi.getUser()
      .then(user => {
        if (user) setUser(user);
      })
      .catch(err => {
        console.log(err);
      });
  }, [isAuth, setUser]);

  useEffect(() => {
    console.log('App render');

    // return () => {
    //   console.log('App unrender');
    // }
  }, []);

  return (
    <div className='App'>
      <Popup />
      {/*<Router />*/}
      {isLoading ?
        <Preloader />
        :
        <Router />
      }
    </div>
  );
};

export default App;
