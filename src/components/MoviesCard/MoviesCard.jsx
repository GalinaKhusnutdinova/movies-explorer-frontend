import React from "react";
import "./MoviesCard.css";
import { CurrentUserContext } from "../../context/CurrentUserContext";
// import { useEffect } from "react";
// import movies from "../../images/movies.png";

export default function MoviesCard({film, children, handleCliclSaveButton}) {
  const currentUser = React.useContext(CurrentUserContext);

  // useEffect(()=>{
    console.log(555)
    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
const isSave = Object.keys(film).includes((owner) => owner === currentUser._id);
handleCliclSaveButton(isSave, film)
  // }, [currentUser, film, handleCliclSaveButton] )


  let filmUrl = `https://api.nomoreparties.co${film.image.url || ''}`;

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
