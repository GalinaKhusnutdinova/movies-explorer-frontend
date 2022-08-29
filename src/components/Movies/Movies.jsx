import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./Movies.css";
import TextMessage from "../TextMessage/TextMessage";
import { useState } from "react";
import { clickMoreMovies, renderNumberFilm } from "../../utils/setNamberMovies";
import { useCurrentWidth } from "../../hooks/useCurrentWidth";
import { useEffect } from "react";

export default function Movies({
  setMovies,
  changeCheckbox,
  onGetMovies,
  textOpen,
  message,
  isOpen,
  filterMovies,
  savedMovies,
  buttonMoviesMore,
  onMoviesClickSave,
  checkboxStatusMovies
  // setCheckboxStatusMovies
}) {
  useEffect(() => {
    setMovies(JSON.parse(localStorage.getItem("saveMovies")));
  }, [setMovies]);

  const windowWidth = useCurrentWidth();
  const [numberFilmsMore, setNumberFilmsMore] = useState(
    renderNumberFilm(windowWidth)
  );

  function clickMoreFilms() {
    setNumberFilmsMore(numberFilmsMore + clickMoreMovies(windowWidth));
  }

  function handleClickSaveButton(film) {
    onMoviesClickSave(film);
  }

  return (
    <main>
      <section className="movies">
        <SearchForm checked={checkboxStatusMovies} changeCheckbox={changeCheckbox} onGetMovies={onGetMovies} />
        <TextMessage isOpen={textOpen} message={message} />
        <Preloader isOpen={isOpen} />
        <MoviesCardList>
          {filterMovies.slice(0, numberFilmsMore).map((film) => {
            const isSaved = savedMovies.some((savedMovie) => {
              return savedMovie.movieId === film.id
                ? (film._id = savedMovie._id)
                : "";
            });
            return (
              <MoviesCard film={film} key={film.id} images={film.image.url || film.image}>
                <button
                  onClick={() => handleClickSaveButton(film)}
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
          className={`movies__more movies__more_${buttonMoviesMore && "open"}`}
        >
          {numberFilmsMore < filterMovies.length && (
            <button
              onClick={clickMoreFilms}
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
