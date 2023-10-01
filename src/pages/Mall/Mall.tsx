import { FC, useState, useEffect } from "react";
import styles from "./Mall.module.css";
import { cities, ids } from "../../constants/constants";

const Mall: FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedId, setSelectedId] = useState<string>("");

  const [dropdownVisibleCity, setDropdownVisibleCity] = useState(false);
  const [dropdownVisibleId, setDropdownVisibleId] = useState(false);

  function handleCityClick(city: string) {
    setSelectedCity(city);
    setDropdownVisibleCity(false);
  }

  function handleIdClick(id: string) {
    setSelectedId(id);
    setDropdownVisibleId(false);
  }

  function handleIdInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSelectedId(e.target.value);
}

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // handleLogin(userEmail, userPassword);
  }

//Функция убирания выбора при нажатии на любое другое место, не относящееся к контейнеру с инпутом

  function handleClickOutside(e: MouseEvent) {
    const targetElement = e.target as Node;

    if (!document.querySelector(".city-selector")?.contains(targetElement)) {
      setDropdownVisibleCity(false);
      setDropdownVisibleId(false);
    }
  }
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    // Удаляем обработчик события при размонтировании компонента
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.login}>
      <p className={styles.login__welcome}>Выбор ТК</p>
      <form
        onSubmit={handleSubmit}
        id="login__form"
        className={styles.login__form}
        noValidate
      >
        <p className={styles["login__title-input"]}>Город</p>
        <div className={styles["city-selector"]}>
          <input
            type="text"
            value={selectedCity}
            onClick={() => setDropdownVisibleCity(!dropdownVisibleCity)}
            readOnly
            className={`${styles.login__info} ${styles.login__info_form_title}`}
            placeholder="Москва"
          />
          {dropdownVisibleCity && (
            <div className={styles["city-dropdown"]}>
              {cities.map((city) => (
                <div
                  key={city}
                  className={styles["city-dropdown__name"]}
                  onClick={() => handleCityClick(city)}
                >
                  {city}
                </div>
              ))}
            </div>
          )}
        </div>

        <span className={styles.span}></span>

        <p className={styles["login__title-input"]}>Id торгового комплекса</p>
        <div className={styles["city-selector"]}>
          <input
            type="text"
            value={selectedId}
            onChange={handleIdInputChange}
            onClick={() => setDropdownVisibleId(!dropdownVisibleId)}
            className={`${styles.login__info} ${styles.login__info_form_subtitle}`}
            placeholder="fst56jk90drt2"
          />
          {dropdownVisibleId && (
            <div className={styles["city-dropdown"]}>
              {ids.map((id) => (
                <div
                  key={id}
                  className={styles["city-dropdown__name"]}
                  onClick={() => handleIdClick(id)}
                >
                  {id}
                </div>
              ))}
            </div>
          )}
        </div>

        <span className={styles.span}></span>
        <button type="submit" className={styles["login__button-save"]}>
          Перейти к данным
        </button>
      </form>
    </div>
  );
};

export default Mall;
