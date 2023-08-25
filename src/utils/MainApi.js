class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getUser() {
    return this._request('users/me', {
      method: 'GET',
      headers: this._headers
    });
  }

  updateUser(email, name) {
    return this._request('users/me', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        email,
        name
      })
    });
  }

  register(email, password, name) {
    return this._request('signup', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        email,
        password,
        name
      })
    });
  }

  login(email, password) {
    return this._request('signin', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        email,
        password
      })
    });
  }

  logout() {
    return this._request('signout', {
      method: 'POST',
      headers: this._headers
    });
  }

  getMovies() {
    return this._request('movies', {
      method: 'GET',
      headers: this._headers
    });
  }

  saveMovie(movie) {
    return this._request('movies', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        movie
      })
    });
  }

  deleteMovie(id) {
    return this._request(`movies/${id}`, {
      method: 'DELETE',
      headers: this._headers
    });
  }


  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(res.status);
    }
    return res.json();
  }

  _request(endpoint, options) {
    return fetch(`${this._baseUrl}/${endpoint}`, { ...options, credentials: 'include' })
      .then(this._getResponseData)
      .then(data => data.data);
  }
}

// eslint-disable-next-line
export default new MainApi({
  baseUrl: 'http://localhost:3001',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});
