import React from "react";
import './Promo.css';
// import logo from "../../images/logo.svg";
// import Header from "../Header/Header";
// import { NavLink } from "react-router-dom";

import img from "../../images/IMG.svg";

export default function Promo() {
  return (
    <section className="promo">
      {/* <Header>
        <nav className="header__info">
          <NavLink to="/signup" className="header__link">
            Регистрация
          </NavLink>
          <NavLink to="/signin" className="header__link link-up">
            Войти
          </NavLink>
        </nav>
      </Header> */}
      <div className="promo__baner" >
        <h1 className="promo__title" >Учебный проект студента факультета Веб-разработки.</h1>
        <img className="promo__img"  src={img} alt="Картинка спираль" />
      </div>
    </section>
  )
}

