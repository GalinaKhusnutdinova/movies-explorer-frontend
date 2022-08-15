import React from "react";
import "./AboutProject.css";

export default function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="about-project__name">О проекте</h2>
      <div className="about-project__border"></div>
      <div className="about-project__stages">
        <div className="about-project__stages-container">
        <h3 className="about-project__title">
          Дипломный проект включал 5 этапов
        </h3>
        <p className="about-project__subtitle">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
        </div>
        <div className="about-project__stages-container">
        <h3 className="about-project__title">
          На выполнение диплома ушло 5 недель
        </h3>

        <p className="about-project__subtitle">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
        </div>
      </div>
      <ul className="about-project__listTime">
        <li className="about-project__list">1 неделя</li>
        <li className="about-project__list">4 недели</li>
        <li className="about-project__list">Back-end</li>
        <li className="about-project__list">Front-end</li>
      </ul>
    </section>
  );
}
