import React from "react";
import "./AboutProject.css";

export default function AboutProject() {
  return (
    <section className="aboutProject">
      <h2 className="aboutProject__name">О проекте</h2>
      <div className="aboutProject__border"></div>
      <div className="aboutProject__stages">
        <div className="aboutProject__stages-container">
        <h3 className="aboutProject__title">
          Дипломный проект включал 5 этапов
        </h3>
        <p className="aboutProject__subtitle">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
        </div>
        <div className="aboutProject__stages-container">
        <h3 className="aboutProject__title">
          На выполнение диплома ушло 5 недель
        </h3>

        <p className="aboutProject__subtitle">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
        </div>
      </div>
      <ul className="aboutProject__listTime">
        <li className="aboutProject__list">1 неделя</li>
        <li className="aboutProject__list">4 недели</li>
        <li className="aboutProject__list">Back-end</li>
        <li className="aboutProject__list">Front-end</li>
      </ul>
    </section>
  );
}
