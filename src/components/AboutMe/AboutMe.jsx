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
    </section>
  );
}
