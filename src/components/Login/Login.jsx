import FromBlock from "../FormBlock/FormBlock";
import "./Login.css";

import { useFormWithValidation } from "../../hooks/form";
import { useState } from "react";

export default function Login(props) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    props.handleLogin({
      email: values.email,
      password: values.password,
    });
  };

  function handleChange2(e) {
    handleChange(e);

    if (isValid) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }
  return (
    <section className="register">
      <FromBlock
        title="Рады видеть!"
        formName="login"
        buttonText="Войти"
        subtitle="Ещё не зарегистрированы?"
        toLink="/signup"
        namelink="Регистрация"
        handleSubmit={handleSubmit}
        isOpen={props.isOpen}
        message={props.message}
        disabled={disabled}
        isValid={disabled ? '' : 'non-disabled'}
      >
        <label className="register__label">
          E-mail
          <input
            className="register__item"
            name="email"
            type="email"
            id="email"
            required
            minLength="2"
            maxLength="40"
            value={values.email || ""}
            onChange={handleChange2}
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
            maxLength="20"
            value={values.password || ""}
            onChange={handleChange2}
          />
          <span className="register__message">{errors.password}</span>
        </label>
      </FromBlock>
    </section>
  );
}
