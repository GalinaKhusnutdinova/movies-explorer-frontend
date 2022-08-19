import React from "react";
import "./AboutMe.css";
import photo from "../../images/photo.jpeg";

export default function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-project__name">Студент</h2>
      <div className="about-project__border"></div>
      <article className="about-me__container">
        <div className="about-me__info">
          <h2 className="about-me__name">Галина</h2>
          <p className="about-me__title">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__subtitle">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <ul className="about-me__links">
            <li className="about-me__item">
              <a className="about-me__link" href="." target="_blank" rel="noreferrer" >
                Facebook
              </a>
            </li>
            <li className="about-me__item">
              <a className="about-me__link" href="https://github.com/GalinaKhusnutdinova" target="_blank" rel="noreferrer" >
                Github
              </a>
            </li>
          </ul>
        </div>
        <img className="about-me__img" src={photo} alt="фотот создателя сайта" />
      </article>
      {/* <p className="about-me__profil">Портфолио</p>
      <ul className="about-me__websites">
        <li className="about-me__site">
          <a className="about-me__site-link" href="https://github.com/GalinaKhusnutdinova/how-to-learn" target="_blank" rel="noreferrer" >Статичный сайт <span>&#8599;</span></a>
          <div className="about-me__link-border"></div>
        </li>
        <li className="about-me__site">
          <a className="about-me__site-link" href="https://galinakhusnutdinova.github.io/russian-travel/index.html" target="_blank" rel="noreferrer" >Адаптивный сайт <span>&#8599;</span></a>
          <div className="about-me__link-border"></div>
        </li>
        <li className="bout-me__site">
          <a className="about-me__site-link" href="http://khusnutdinova.student.nomoredomains.xyz" target="_blank" rel="noreferrer" >Одностраничное приложение <span>&#8599;</span></a>	
        </li>
      </ul> */}
    </section>
  );
}
