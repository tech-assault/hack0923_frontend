import { FC, useState } from "react";

const Mall: FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>("");

  function handleCityChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedCity(e.target.value);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
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
          <p className="login__title-input">Город</p>
          <select
            size={1}
            value={selectedCity}
            onChange={handleCityChange}
            className="login__info login__info_form_title"
            required
          >
            <option value="Москва">Москва</option>
            <option value="Санкт-Петербург">Санкт-Петербург</option>
            <option value="Саранск">Саранск</option>
            <option value="Екатеринбург">Екатеринбург</option>
            <option value="Пермь">Пермь</option>
            <option value="Ростов-на-дону">Ростов-на-дону</option>
            <option value="Самара">Самара</option>
            <option value="Владимир">Владимир</option>
            <option value="Нижний Новгород">Нижний Новгород</option>
            <option value="Пенза">Пенза</option>
            <option value="Петрозаводск">Петрозаводск</option>
            <option value="Мурманск">Мурманск</option>
          </select>
          <span className="span title-input-error"></span>

          <p className="login__title-input">Id торгового комплекса</p>
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
  );
};

export default Mall;
