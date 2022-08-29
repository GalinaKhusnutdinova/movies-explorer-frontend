import FromBlock from "../FormBlock/FormBlock";
import "./Login.css";

import { useFormWithValidation } from "../../hooks/form";

export default function Login(props) {
  const { values, handleChange, errors } =
    useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();

    props.handleLogin({
      email: values.email,
      password: values.password,
    });
  };
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
      >
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
          
              <span className="register__message">
                {errors.email}
              </span>
            
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
