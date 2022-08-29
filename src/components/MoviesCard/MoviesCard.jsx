import React from "react";
import "./MoviesCard.css";

export default function MoviesCard({film, children, images}) {

  let filmUrl = `https://api.nomoreparties.co${images || ""}`;

  return (
    <div className="card">
      <div className="card__info">
        <h3 className="card__name">{film.nameRU || film.nameEN}</h3>
        <p className="card__time">{`${film.duration} минут`}</p>
      </div>
      <img className="card__img" src={filmUrl} alt="обложка фильма" />
      {children}
    </div>
  );
}
