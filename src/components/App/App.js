import React from 'react';
import './App.css';
import Router from './Router/Router';
import Popup from '../ui/Popup/Popup';

const App = () => {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  return (
    <div className='App'>
      <Popup isOpen={isPopupOpen} setIsOpen={setIsPopupOpen} />
      <Router />
    </div>
  );
};

export default App;
