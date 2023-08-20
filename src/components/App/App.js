import React from 'react';
import './App.css';
import Router from './Router/Router';
import Popup from '../ui/Popup/Popup';
import AuthProvider from '../../provider/AuthProvider';
import PopupProvider from '../../provider/PopupProvider';
import CurrentUserProvider from '../../provider/CurrentUserProvider';

const App = () => {

  return (
    <AuthProvider>
      <CurrentUserProvider>
        <PopupProvider>
          <div className='App'>
            <Popup />
            <Router />
          </div>
        </PopupProvider>
      </CurrentUserProvider>
    </AuthProvider>
  );
};

export default App;
