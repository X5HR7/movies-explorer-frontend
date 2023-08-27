const getMoviesByKeyWord = (movies, key, includeShorts) => {;
  const res = [];

  movies.forEach(movie => {
    const isKeyInNameRU = movie.nameRU?.toLowerCase().includes(key.toLowerCase());

    if (isKeyInNameRU)
      res.push(movie);
  });

  if (!includeShorts)
    return res.filter(movie => movie.duration > 52);

  return res;
};

export default getMoviesByKeyWord;
