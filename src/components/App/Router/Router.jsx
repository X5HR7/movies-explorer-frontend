import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/MainPage/MainPage';
import MoviesPage from '../../pages/MoviesPage/MoviesPage';
import SavedMoviesPage from '../../pages/SavedMoviesPage/SavedMoviesPage';
import ProfilePage from '../../pages/ProfilePage/ProfilePage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import RegisterPage from '../../pages/RegisterPage/RegisterPage';
import Error404Page from '../../pages/Error404Page/Error404Page';
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/movies' element={<ProtectedRoute element={MoviesPage} />} />
      <Route path='/saved-movies' element={<ProtectedRoute element={SavedMoviesPage} />} />
      <Route path='/profile' element={<ProtectedRoute element={ProfilePage} />} />
      <Route path='/signin' element={<PublicRoute element={LoginPage}/>} />
      <Route path='/signup' element={<PublicRoute element={RegisterPage}/>} />
      <Route path='*' element={<Error404Page />} />
    </Routes>
  );
};

export default Router;
