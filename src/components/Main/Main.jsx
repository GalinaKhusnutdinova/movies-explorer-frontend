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
// import { NavLink } from "react-router-dom";

function Main() {
  return (
    <main className="project">
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </main>
  );
}

export default Main;
