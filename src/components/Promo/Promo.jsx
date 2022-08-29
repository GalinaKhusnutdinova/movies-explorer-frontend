import React from "react";
import './Promo.css';
import img from "../../images/IMG.svg";

export default function Promo() {
  return (
    <section className="promo">
      <div className="promo__baner" >
        <h1 className="promo__title" >Учебный проект студента факультета Веб-разработки.</h1>
        <img className="promo__img"  src={img} alt="Картинка спираль" />
      </div>
    </section>
  )
}

