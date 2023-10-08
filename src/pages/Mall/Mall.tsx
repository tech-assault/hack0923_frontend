import { FC, useState, useEffect } from "react";
import styles from "./Mall.module.css";
import { cities, ids } from "../../constants/constants";
import lenta_logo from "../../vendor/images/lenta_logo.svg";
import { useDispatch } from "../../hooks/useDispatch";
import { useSelector } from "../../hooks/useSelector";
import { fetchStores } from "../../redux/thunks/storesThunks";

type MallProps = {
  onClose: () => void;
};

const Mall: FC<MallProps> = ({ onClose }) => {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedId, setSelectedId] = useState("");

  const [dropdownVisibleCity, setDropdownVisibleCity] = useState(false);
  const [dropdownVisibleId, setDropdownVisibleId] = useState(false);

  const [filteredCities, setFilteredCities] = useState(cities);
  const [filteredIds, setFilteredIds] = useState(ids);

  const [idErrorMessage, setIdErrorMessage] = useState<string | null>(null);

  const dispatch = useDispatch();

  const stores = useSelector((state) => state.stores.stores);

  console.log(stores, 'STORES');
  const loading = useSelector((state) => state.stores.loading);
  const error = useSelector((state) => state.stores.error);

  useEffect(() => {
    dispatch(fetchStores());
  }, [dispatch]);

  function handleCityClick(city: string) {
    setSelectedCity(city);
    setDropdownVisibleCity(false);
  }

  function handleIdClick(id: string) {
    setSelectedId(id);
    setDropdownVisibleId(false);
  }

  const handleCityInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCity(e.target.value);
    setFilteredCities(
      cities.filter((city) =>
        city.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const handleIdInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedId(e.target.value);
    setFilteredIds(ids.filter((id) => id.includes(e.target.value)));

    if (!e.target.checkValidity()) {
      setIdErrorMessage(e.target.validationMessage);
    } else {
      setIdErrorMessage(null);
    }
  };

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // handleLogin(userEmail, userPassword);
  }

  return (
    <div className={styles["page-mall"]}>
      <img
        src={lenta_logo}
        className={`${styles.logo} ${styles.logo_type_mall}`}
        alt="Лента лого"
      />

      <div className={styles.login}>
        <button
          onClick={onClose}
          className={styles.elements__image}
          type="button"
          aria-label="Закрытие попапа"
        ></button>
        <p className={styles.login__welcome}>Выбор ТК</p>
        <form
          onSubmit={handleSubmit}
          id="login__form"
          className={styles.login__form}
        >
          <p className={styles["login__title-input"]}>Город</p>
          <div className={styles["city-selector"]}>
            <input
              type="text"
              value={selectedCity}
              onChange={handleCityInputChange} // добавлен обработчик
              onClick={() => setDropdownVisibleCity(!dropdownVisibleCity)}
              className={`${styles.login__info} ${styles.login__info_form_title}`}
              placeholder="Москва"
            />

            {dropdownVisibleCity && (
              <div className={styles["city-dropdown"]}>
                {filteredCities.map((city) => (
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

          <p className={styles["login__title-input"]}>Id торгового комплекса</p>
          <div className={styles["city-selector"]}>
            <input
              type="text"
              minLength={6}
              maxLength={200}
              value={selectedId}
              onChange={handleIdInputChange}
              onClick={() => setDropdownVisibleId(!dropdownVisibleId)}
              className={`${styles.login__info} ${styles.login__info_form_subtitle}`}
              placeholder="fst56jk90drt2"
              required
            />
            {dropdownVisibleId && (
              <div className={styles["city-dropdown"]}>
                {filteredIds.map((id) => (
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

          {idErrorMessage && (
            <span className={styles.span}>{idErrorMessage}</span>
          )}
          <button type="submit" className={styles["login__button-save"]}>
            Перейти к данным
          </button>
        </form>
      </div>
    </div>
  );
};

export default Mall;
