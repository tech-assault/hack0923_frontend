import { FC } from 'react'

const Mall: FC = () => {

      function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        // const userEmail = email;
        // const userPassword = password;
        // handleLogin(userEmail, userPassword);
      }

    return (
<div>
    <div className="login">
      <p className="login__welcome">Выбор ТК</p>
      <form
        onSubmit={handleSubmit}
        id="login__form"
        className="login__form"
        noValidate
      >
        <input
          type="text"
          className="login__info login__info_form_title"
          id="title-input"
          placeholder="Email"
        //   minLength="6"
        //   maxLength="40"
        //   value={email}
        //   onChange={handleEmailChange}
          required
        />
        <span className="span title-input-error"></span>
        <input
          type="password"
          className="login__info login__info_form_subtitle"
          id="subtitle-input"
          placeholder="Пароль"
        //   minLength="6"
        //   maxLength="200"
        //   value={password}
        //   onChange={handlePasswordChange}
          required
        />
        <span className="span subtitle-input-error"></span>
        <button type="submit" className="login__button-save">
          Войти
        </button>
      </form>
    </div>
</div>
    )
}

export default Mall;