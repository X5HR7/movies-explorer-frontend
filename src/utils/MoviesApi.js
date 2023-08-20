class MoviesApi {
  constructor(baseUrl, options) {
    this.baseUrl = baseUrl;
    this.options = options;
  }

  getMovies() {
    return this._request(this.baseUrl, this.options);
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  _request(url, options) {
    return fetch(url, options).then(this._getResponseData);
  }
}

export default new MoviesApi('https://api.nomoreparties.co/beatfilm-movies', {});
