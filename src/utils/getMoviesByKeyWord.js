const getMoviesByKeyWord = (movies, key, includeShorts) => {
  const res = [];

  movies.forEach(movie => {
    const isKeyInNameRU = movie.nameRU?.toLowerCase().includes(key.toLowerCase());
    const isKeyInNameEN = movie.nameEN?.toLowerCase().includes(key.toLowerCase());

    if (isKeyInNameRU || isKeyInNameEN)
      res.push(movie);
  });

  if (includeShorts)
    return res.filter(movie => movie.duration <= 40);

  return res;
};

export default getMoviesByKeyWord;
