import React from "react";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <p className="portfolio__profil">Портфолио</p>
      <ul className="portfolio__websites">
        <li className="portfolio__site">
          <a
            className="portfolio__site-link"
            href="https://github.com/GalinaKhusnutdinova/how-to-learn"
            target="_blank"
            rel="noreferrer"
          >
            Статичный сайт <span className="profile__arrow">&#8599;</span>
          </a>
          <div className="portfolio__link-border"></div>
        </li>
        <li className="about-me__site">
          <a
            className="about-me__site-link"
            href="https://galinakhusnutdinova.github.io/russian-travel/index.html"
            target="_blank"
            rel="noreferrer"
          >
            Адаптивный сайт <span className="profile__arrow">&#8599;</span>
          </a>
          <div className="portfolio__link-border"></div>
        </li>
        <li className="portfolio__site">
          <a
            className="portfolio__site-link"
            href="http://khusnutdinova.student.nomoredomains.xyz"
            target="_blank"
            rel="noreferrer"
          >
            Одностраничное приложение <span className="profile__arrow">&#8599;</span>
          </a>
        </li>
      </ul>
    </section>
  );
}
