import MoviesCard from "../MoviesCard/MoviesCard";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import TextMessage from "../TextMessage/TextMessage";
import "./SavedMovies.css";
import { useEffect } from "react";

export default function SavedMovies({
  filterSavedMoviesClick,
  handleMoviesDelete,
  savedMovies,
  filmsSaveFilter,
  message,
  textOpen,
  setFilmsSaveFilter,
  isOpen,
  changeCheckboxSaved,
}) {

  console.log('savedMovies', savedMovies)

  useEffect(()=> {
    localStorage.removeItem("filmsSaveFilter");
    let serialObj = JSON.stringify(savedMovies); //сериализуем obj
    localStorage.setItem("saveMovies", serialObj); //запишем его в хранилище по ключу

  }, [])

  

  function handleDelete(film) {
    handleMoviesDelete(film);
  }


  useEffect(() => {
    setFilmsSaveFilter(savedMovies);
  }, [savedMovies, setFilmsSaveFilter]);

  return (
    <main className="movies-saved">
      <SearchForm
        filtetrue="true"
        filterSavedMoviesClick={filterSavedMoviesClick}
        changeCheckbox={changeCheckboxSaved}
      />
      <TextMessage isOpen={textOpen} message={message} />
      <Preloader isOpen={isOpen} />
      <MoviesCardList name="saved">
        {filmsSaveFilter && filmsSaveFilter.map((film) => {
          return (  
            <MoviesCard
              film={film}
              key={film.movieId}
              images={film.image || film.image.url}
            >
              <button
                onClick={() => handleDelete(film)}
                type="button"
                aria-label="удалить"
                className="card__button card__button_delete "
              ></button>
            </MoviesCard>
          );
        })
        
        
        }
      </MoviesCardList>
    </main>
  );
}
