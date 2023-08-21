import React, { useCallback } from 'react';
import './SavedMoviesPage.css';
import Header from '../../modules/Header/Header';
import SearchForm from '../../modules/SearchForm/SearchForm';
import MoviesCardList from '../../modules/MoviesCardList/MoviesCardList';
import Footer from '../../modules/Footer/Footer';
import Navigation from '../../modules/Navigation/Navigation';
import { useFetch } from '../../../hooks/useFetch';
import MainApi from '../../../utils/MainApi';
import Preloader from '../../ui/Preloader/Preloader';

const SavedMoviesPage = () => {
  const { isLoading, data: movies, error } = useFetch(
    useCallback(() => MainApi.getMovies(), [])
  );

  return (
    <div className='saved-movies-page'>
      <Header>
        <Navigation isLoggedIn={true} />
      </Header>
      <main className='main'>
        <SearchForm />
        {isLoading ?
          <Preloader />
          :
          <MoviesCardList movies={movies} isOnSavedPage={true} />
        }
      </main>
      <Footer />
    </div>
  );
};

export default SavedMoviesPage;
