import { FC, useState } from "react";
import styles from "./Login.module.css";
import lenta_logo from '../../vendor/images/lenta_logo.svg'

const Login: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const [passwordErrorMessage, setPasswordErrorMessage] = useState<string | null>(null);
  const [emailErrorMessage, setEmailErrorMessage] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // const userEmail = email;
    // const userPassword = password;
    // handleLogin(userEmail, userPassword);
  }


  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
    if (!e.target.checkValidity()) {
      setIsEmailValid(false);
      setEmailErrorMessage(e.target.validationMessage);
    } else {
      setIsEmailValid(true);
      setEmailErrorMessage(null);
    }
}

function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
    if (!e.target.checkValidity()) {
      setIsPasswordValid(false);
      setPasswordErrorMessage(e.target.validationMessage);
    } else {
      setPasswordErrorMessage(null);
      setIsPasswordValid(true);
    }
}

  return (
    <div className={styles["page-login"]}>
      <div className={styles.login}>
      <img src={lenta_logo} className={`${styles.logo} ${styles.logo_type_login}`} alt="Лента лого" />
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
            type="email"
            className={`${styles.login__info} ${styles.login__info_form_title} ${!isEmailValid ? styles.login__info_type_invalid : ''}`}
            id="title-input"
            placeholder="login@gmail.com"
            onChange={handleEmailChange}
            required
          />
          <span className={styles.span}>{emailErrorMessage}</span> 

          <p className="login__title-input">Пароль</p>
          <input
            type="password"
            className={`${styles.login__info} ${styles.login__info_form_subtitle} ${!isPasswordValid ? styles.login__info_type_invalid : ''}`}
            id="subtitle-input"
            placeholder="••••••••"
              minLength={6}
              maxLength={12}
              onChange={handlePasswordChange}
            required
          />
          <span className={styles.span}>{passwordErrorMessage}</span>
          <button type="submit" className={styles["login__button-save"]}>
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
