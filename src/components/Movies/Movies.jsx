import React from 'react'
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";


// import HeaderAuth from "../HeaderAuth/HeaderAuth";
import './Movies.css';

export default function Movies() {
  const isClick = false;
  return (
    <main className='movies'>
      <SearchForm />
      <Preloader isOpen="true"/>
      <MoviesCardList>
      <MoviesCard>
        <button
          type="button"
          aria-label="сохранить"
          className={`card__button card__button${
            isClick && "_active"
          }`}
        >{`${isClick ? "" : "Сохранить"}`}</button>
      </MoviesCard>
      <MoviesCard>
        <button
          type="button"
          aria-label="сохранить"
          className={`card__button card__button${
            isClick && "_active"
          }`}
        >{`${isClick ? "" : "Сохранить"}`}</button>
      </MoviesCard>
      <MoviesCard>
        <button
          type="button"
          aria-label="сохранить"
          className={`card__button card__button${
            isClick && "_active"
          }`}
        >{`${isClick ? "" : "Сохранить"}`}</button>
      </MoviesCard>
      <MoviesCard>
        <button
          type="button"
          aria-label="сохранить"
          className={`card__button card__button${
            isClick && "_active"
          }`}
        >{`${isClick ? "" : "Сохранить"}`}</button>
      </MoviesCard>
      <MoviesCard>
        <button
          type="button"
          aria-label="сохранить"
          className={`card__button card__button${
            isClick && "_active"
          }`}
        >{`${isClick ? "" : "Сохранить"}`}</button>
      </MoviesCard>
      
      </MoviesCardList>
      <div className='movies__more'>
        <button type='button' className='movies__button'>Ещё</button>
      </div>
      
    </main>
  )
}

