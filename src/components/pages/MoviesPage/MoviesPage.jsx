import React, { useCallback } from 'react';
import './MoviesPage.css';
import Header from '../../modules/Header/Header';
import SearchForm from '../../modules/SearchForm/SearchForm';
import MoviesCardList from '../../modules/MoviesCardList/MoviesCardList';
import Footer from '../../modules/Footer/Footer';
import Navigation from '../../modules/Navigation/Navigation';
import MoviesApi from '../../../utils/MoviesApi';
import { useFetch } from '../../../hooks/useFetch';
import Preloader from '../../ui/Preloader/Preloader';
import { getMovieData } from '../../../utils/movies';

const MoviesPage = () => {
  const { isLoading, data: movies, error } = useFetch(
    useCallback(() => MoviesApi.getMovies(), [])
  );

  return (
    <div className='movies-page'>
      <Header>
        <Navigation isLoggedIn={true} />
      </Header>
      <main className='main'>
        <SearchForm />
        {isLoading ?
          <Preloader />
          :
          <MoviesCardList movies={movies.map(movie => getMovieData(movie)).splice(0, 12)} isOnSavedPage={false} />
        }
      </main>
      <Footer />
    </div>
  );
};

export default MoviesPage;
