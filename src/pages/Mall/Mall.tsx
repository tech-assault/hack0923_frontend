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
        <p className='login__title-input'>Город</p>
        <input
          type="text"
          className="login__info login__info_form_title"
          id="title-input"
          placeholder="Москва"
        //   minLength="6"
        //   maxLength="40"
        //   onChange={handleEmailChange}
          required
        />
        <span className="span title-input-error"></span>

        <p className='login__title-input'>Id торгового комплекса</p>
        <input
          type="password"
          className="login__info login__info_form_subtitle"
          id="subtitle-input"
          placeholder="aa12bbb345"
        //   minLength="6"
        //   maxLength="200"
        //   onChange={handlePasswordChange}
          required
        />
        <span className="span subtitle-input-error"></span>
        <button type="submit" className="login__button-save">
        Перейти к данным
        </button>
      </form>
    </div>
</div>
    )
}

export default Mall;