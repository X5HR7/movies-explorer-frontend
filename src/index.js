import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './provider/AuthProvider';
import CurrentUserProvider from './provider/CurrentUserProvider';
import PopupProvider from './provider/PopupProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CurrentUserProvider>
          <PopupProvider>
            <App />
          </PopupProvider>
        </CurrentUserProvider>
      </AuthProvider>
    </BrowserRouter>
  // </React.StrictMode>
);
