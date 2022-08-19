import Promo from "../Promo/Promo";
// import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
// import Header from "../Header/Header";
// import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import React from "react";
import "./Main.css";
import Portfolio from "../Portfolio/Portfolio";
import Header from "../Header/Header";
import { NavLink } from "react-router-dom";

function Main() {
  return (
    <>
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
      <main className="project">
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

export default Main;
