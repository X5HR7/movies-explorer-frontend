import React, { useEffect, useState } from 'react';
import './MoviesPage.css';
import Header from '../../modules/Header/Header';
import SearchForm from '../../modules/SearchForm/SearchForm';
import MoviesCardList from '../../modules/MoviesCardList/MoviesCardList';
import Footer from '../../modules/Footer/Footer';
import Navigation from '../../modules/Navigation/Navigation';
import MoviesApi from '../../../utils/MoviesApi';
// import { useFetch } from '../../../hooks/useFetch';
import Preloader from '../../ui/Preloader/Preloader';
import { getMovieData } from '../../../utils/movies';
// import MainApi from '../../../utils/MainApi';
import useErrorPopup from '../../../hooks/useErrorPopup';
import getErrorMessage from '../../../utils/getErrorMessage';
import useCardCount from '../../../hooks/useCardCount';


const MoviesPage = () => {
  // const { isLoading, data: movies, error } = useFetch(
  //   useCallback(() => MoviesApi.getMovies(), [])
  // );
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const {visibleCardCount, calculateCardCount} = useCardCount();

  const showError = useErrorPopup();

  useEffect(() => {
    setIsLoading(true);
    MoviesApi.getMovies()
      .then(data => {
        setMovies(
          data.map(movie => getMovieData(movie))
        );
      })
      .catch(status => {
        showError(getErrorMessage(status));
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

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
          <MoviesCardList
            movies={movies.slice(0, visibleCardCount)}
            isOnSavedPage={false}
            handleClick={calculateCardCount}
          />
        }
      </main>
      <Footer />
    </div>
  );
};

export default MoviesPage;
