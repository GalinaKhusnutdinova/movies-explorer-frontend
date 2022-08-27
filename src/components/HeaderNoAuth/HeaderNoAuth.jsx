import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../Header/Header";



export default function HeaderNoAuth() {
  return (
    <Header>
      <nav className="header__info">
        <NavLink to="/signup" className="header__link">
          Регистрация
        </NavLink>
        <NavLink to="/signin" className="header__link link-up">
          Войти
        </NavLink>
      </nav>
    </Header>
  );
}
