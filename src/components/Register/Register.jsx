import React from "react";
import FromBlock from "../FormBlock/FormBlock";
import "./Register.css";
import { useFormWithValidation } from "../../hooks/form";

export default function Register(props) {
  const { values, handleChange, errors } = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    let { name, email, password } = values;
    props.handleRegister({ name, email, password });
  };

  return (
    <section className="register">
      <FromBlock
        title="Добро пожаловать!"
        formName="register"
        buttonText="Зарегистрироваться"
        subtitle="Уже зарегистрированы?"
        toLink="/signin"
        namelink="Войти"
        handleSubmit={handleSubmit}
        isOpen={props.isOpen}
        message={props.message}
      >
        <label className="register__label">
          Имя
          <input
            className="register__item"
            name="name"
            type="text"
            id="name"
            required
            minLength="2"
            maxLength="40"
            value={values.name || ""}
            onChange={handleChange}
          />
          <span className="register__message">{errors.name}</span>
        </label>
        <label className="register__label">
          E-mail
          <input
            className="register__item"
            name="email"
            type="text"
            id="email"
            required
            minLength="2"
            maxLength="40"
            value={values.email || ""}
            onChange={handleChange}
          />
          <span className="register__message">{errors.email}</span>
        </label>
        <label className="register__label">
          Пароль
          <input
            className="register__item "
            name="password"
            type="password"
            id="password"
            required
            minLength="2"
            maxLength="200"
            value={values.password || ""}
            onChange={handleChange}
          />
          <span className="register__message">{errors.password}</span>
        </label>
      </FromBlock>
    </section>
  );
}
