import React from "react";
import "./MoviesCardList.css";

export default function MoviesCardList(props) {
  
  return (
    <section className={`movies-conteiner movies-conteiner_${props.name}`}>
			{props.children}
    </section>
  );
}
