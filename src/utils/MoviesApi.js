class MoviesApi {
  constructor(settings) {
    this._settings = settings;
  }
  getMovies() {
    return fetch(this._settings.baseUrl, {
      headers: this._settings.headers,
    }).then(this._checkResponse);
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

const baseUrl = "https://api.nomoreparties.co/beatfilm-movies";

export const moviesApi = new MoviesApi({
  baseUrl: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
