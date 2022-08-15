import React from "react";
import "./MoviesCard.css"

import movies from "../../images/movies.png"

export default function MoviesCard(props) {
  return (
    <div className="card">
      <div className="card__info">
        <h3 className="card__name">В погоне за Бенкси</h3>
        <p className="card__time">27 минут</p>
      </div>
			<img className="card__img" src={movies} alt="обложка фильма" />
			{props.children}
    </div>
  );
}
