const getMovieDuration = movie => {
  if (!movie) return 0;

  let res = '';
  const duration = movie.duration;

  const hours = Math.floor(duration / 60);

  if (hours) {
    let end = '';

    if (hours % 10 > 1 && hours % 10 < 5) end += 'а';
    else if (hours % 10 > 4 || hours % 10 === 0) end += 'ов';

    res += `${hours} час${end} `;
  }

  const minutes = duration - hours * 60;

  if (minutes) {
    let end = '';

    if (minutes % 10 === 1) end += 'а';
    else if (minutes % 10 > 1 && minutes % 10 < 5) end += 'ы';

    res += `${minutes} минут${end}`;
  }

  return res;
};

const getMovieSmallImage = movie => {
  const url = movie.image.formats.small?.url;
  return `https://api.nomoreparties.co${url}`;
};

const getMovieThumbnail = movie => {
  const url = movie.image.formats.thumbnail?.url;
  return `https://api.nomoreparties.co${url}`;
};

const getMovieImage = movie => {
  //в movie.image.formats не всегда есть поле small
  if (movie.image.formats.small) return getMovieSmallImage(movie);
  else return getMovieThumbnail(movie);
};

const getMovieData = movie => {
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
    nameEN: movie.nameEN,
    trailerLink: movie.trailerLink
  };
};

export { getMovieData, getMovieDuration };
