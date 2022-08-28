class MainApi {
  constructor(settings) {
    this._settings = settings;
  }
  //qq
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

  // 
  getSaveMovies() {
    return fetch(this._settings.baseUrl + "/movies", {
      headers: this._headersJwt(),
      credentials: "include",
    }).then(this._checkResponse);
  }

  // addNewCard(item) {
  //   return fetch(this._settings.baseUrl + "/cards", {
  //     method: "POST",
  //     headers: this._headersJwt(),
  //     body: JSON.stringify({
  //       name: item.name,
  //       link: item.link,
  //     }),
  //   }).then(this._checkResponse);
  // }
  // //qq
  deleteMovies(id) {
    return fetch(this._settings.baseUrl + "/movies/" + id, {
      method: "DELETE",
      headers: this._headersJwt(),
    }).then(this._checkResponse);
  }
  //qq
  deleteSave(id) {
    return fetch(this._settings.baseUrl + "/movies/" + id, {
      method: "DELETE",
      headers: this._headersJwt(),
    }).then(this._checkResponse);
  }
  //qq
  addSave(data) {
    return fetch(this._settings.baseUrl + "/movies", {
      method: "POST",
      headers: this._headersJwt(),
      body: JSON.stringify({
        country: data.country || ' ',
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: data.image.url || "",
        trailerLink: data.trailerLink,
        nameRU: data.nameRU || "",
        nameEN: data.nameEN || "",
        thumbnail: data.image.formats.thumbnail.url,
        movieId: data.id,
      }),
    }).then(this._checkResponse);
  }
  // //qq
  // editAvatarProfile(data) {
  //   return fetch(this._settings.baseUrl + "/users/me/avatar", {
  //     method: "PATCH",
  //     headers: this._headersJwt(),
  //     body: JSON.stringify({
  //       avatar: data.avatar,
  //     }),
  //   }).then(this._checkResponse);
  // }

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
    // return Promise.reject(res);
    return res.json().then((data) => Promise.reject(data));
  }
}

const baseUrl = `${window.location.protocol}${
  process.env.REACT_APP_API_URL || "//localhost:3000"
}`;
// const baseUrl = `${'https://api.movies-lives.nomoredomains.xyz' || 'http://localhost:3000'}`;

export const mainApi = new MainApi({
  baseUrl: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
