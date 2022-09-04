import {BASE_URL} from '../utils/constants'

class MainApi {
  constructor(settings) {
    this._settings = settings;
  }
  getProfile() {
    return fetch(this._settings.baseUrl + "/users/me", {
      headers: this._headersJwt(),
      credentials: "include",
    }).then(this._checkResponse);
  }

  editProfile(data) {
    return fetch(this._settings.baseUrl + "/users/me", {
      method: "PATCH",
      headers: this._headersJwt(),
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    }).then(this._checkResponse);
  }

  getSaveMovies() {
    return fetch(this._settings.baseUrl + "/movies", {
      headers: this._headersJwt(),
      credentials: "include",
    }).then(this._checkResponse);
  }

  deleteMovies(id) {
    return fetch(this._settings.baseUrl + "/movies/" + id, {
      method: "DELETE",
      headers: this._headersJwt(),
    }).then(this._checkResponse);
  }
  deleteSave(id) {
    return fetch(this._settings.baseUrl + "/movies/" + id, {
      method: "DELETE",
      headers: this._headersJwt(),
    }).then(this._checkResponse);
  }
  addSave(data) {
    return fetch(this._settings.baseUrl + "/movies", {
      method: "POST",
      headers: this._headersJwt(),
      body: JSON.stringify({
        country: data.country || " ",
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: data.image.url || "",
        trailerLink: data.trailerLink || "нет",
        nameRU: data.nameRU || "нет",
        nameEN: data.nameEN || "нет",
        thumbnail: data.image.formats.thumbnail.url || data.thumbnail,
        movieId: data.id,
      }),
    }).then(this._checkResponse);
  }

  _headersJwt() {
    return {
      authorization: "Bearer " + localStorage.getItem("token"),
      ...this._settings.headers,
    };
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return res.json().then((data) => Promise.reject(data));
  }
}

// const baseUrl = `${window.location.protocol}${
//   process.env.REACT_APP_API_URL || "//localhost:3000"
// }`;



export const mainApi = new MainApi({
  baseUrl: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
