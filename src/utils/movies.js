const getMovieDuration = (movie) => {
  const durationValue = movie.duration.toString();
  const lastChar = Number(durationValue.at(-1));

  let word = 'минут';

  if (lastChar === 1)
    word += 'а';
  else if (lastChar > 1 && lastChar < 5)
    word += 'ы';

  return `${durationValue} ${word}`;
};

const getMovieSmallImage = (movie) => {
  const url = movie.image.formats.small?.url;
  return `https://api.nomoreparties.co${url}`;
};

const getMovieThumbnail = (movie) => {
  const url = movie.image.formats.thumbnail?.url;
  return `https://api.nomoreparties.co${url}`;
};

const getMovieImage = (movie) => {
  if (movie.image.formats.small)
    return getMovieSmallImage(movie);
  else
    return getMovieThumbnail(movie);
};

const getMovieData = (movie) => {
  return {
    country: movie.country,
    director: movie.director,
    duration: movie.duration,
    year: movie.year,
    description: movie.description,
    image: getMovieImage(movie),
    thumbnail: getMovieThumbnail(movie),
    movieId: movie.id,
    nameRU: movie.nameRU,
    nameEN: movie.nameEN
  };
};

export { getMovieData, getMovieDuration };
