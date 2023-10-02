import { FC } from "react";
import styles from "./Login.module.css";

const Login: FC = () => {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // const userEmail = email;
    // const userPassword = password;
    // handleLogin(userEmail, userPassword);
  }

  return (
    <div className={styles["page-login"]}>
      <div className={styles.login}>
        <button
          className={styles.elements__image}
          type="button"
          aria-label="Закрытие попапа"
        ></button>
        <p className={styles.login__welcome}>Вход в систему</p>
        <form
          onSubmit={handleSubmit}
          id="login__form"
          className={styles.login__form}
        >
          <p className="login__title-input">Логин</p>
          <input
            type="text"
            className={`${styles.login__info} ${styles.login__info_form_title}`}
            id="title-input"
            placeholder="login@gmail.com"
            //   onChange={handleEmailChange}
            required
          />
          <span className={styles.span}></span>

          <p className="login__title-input">Пароль</p>
          <input
            type="password"
            className={`${styles.login__info} ${styles.login__info_form_subtitle}`}
            id="subtitle-input"
            placeholder="••••••••"
            //   minLength="6"
            //   maxLength="200"
            //   onChange={handlePasswordChange}
            required
          />
          <span className={styles.span}></span>
          <button type="submit" className={styles["login__button-save"]}>
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
