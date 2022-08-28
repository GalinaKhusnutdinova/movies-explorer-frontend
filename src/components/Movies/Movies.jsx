import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./Movies.css";
import TextMessage from "../TextMessage/TextMessage";
import { useState } from "react";
import { clickMoreMovies, renderNumberFilm } from "../../utils/setNamberMovies";
import { useCurrentWidth } from '../../hooks/useCurrentWidth'

export default function Movies(props) {
  // const currentUser = React.useContext(CurrentUserContext);
  const windowWidth = useCurrentWidth();
  console.log(windowWidth)
  const [numberFilmsMore, setNumberFilmsMore] = useState(
    renderNumberFilm(windowWidth)
  );

  function clickMoreMoies() {
    setNumberFilmsMore(numberFilmsMore + clickMoreMovies(windowWidth));
  }

  function handleCliclSaveButton(film) {
    console.log(film);
    props.onMoviesClickSave(film);

  }

  return (
    <main>
      <section className="movies">
        <SearchForm changeCheckbox={props.changeCheckbox} onGetMovies={props.onGetMovies} />
        <TextMessage isOpen={props.textOpen} message={props.message} />
        <Preloader isOpen={props.isOpen} />
        <MoviesCardList>
          {props.filterMovies.slice(0, numberFilmsMore).map((film) => {
            const isSaved = props.savedMovies.some((savedMovie) => {
              return savedMovie.movieId === film.id
                ? (film._id = savedMovie._id)
                : "";
            });
            return (
              <MoviesCard film={film} key={film.id} images={film.image.url}>
                <button
                  onClick={() => handleCliclSaveButton(film)}
                  type="button"
                  aria-label="сохранить"
                  className={`card__button card__button${isSaved && "_active"}`}
                >
                  {`${isSaved ? "" : "Сохранить"}`}
                </button>
              </MoviesCard>
            );
          })}
        </MoviesCardList>
        <div
          className={`movies__more movies__more_${
            props.buttomMoviesMore && "open"
          }`}
        >
          {numberFilmsMore < props.filterMovies.length && (
            <button
              onClick={clickMoreMoies}
              type="button"
              className="movies__button"
            >
              Ещё
            </button>
          )}
        </div>
      </section>
    </main>
  );
}
