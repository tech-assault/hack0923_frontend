import { FC, useState, useEffect, useMemo } from "react";
import styles from "./Mall.module.css";
import lenta_logo from "../../vendor/images/lenta_logo.svg";
import { useGetShopsQuery } from "../../redux/slices/API";
import { setFilterData } from "../../redux/slices/MainPage";
import { useDispatch } from "../../hooks/useDispatch";

type MallProps = {
  onClose: () => void;
};

const Mall: FC<MallProps> = ({ onClose }) => {

  const dispatch = useDispatch();


  const [selectedCity, setSelectedCity] = useState("");
  const [selectedId, setSelectedId] = useState("");

  const [isCityValid, setIsCityValid] = useState(true);
  const [isIdValid, setIsIdValid] = useState(true);

  const { data, isSuccess } = useGetShopsQuery()

  const storeCities = useMemo(() => {
    if (isSuccess && data.data) {
        const uniqueCities = new Set(data.data.map(shop => shop.city));
        return [...uniqueCities];
    } else {
        return [];
    }
}, [isSuccess, data]);

  const storeIds = useMemo(() => {
    if (isSuccess && data.data) {
        if (selectedCity) {
            // Если город выбран, фильтруем магазины по этому городу
            return data.data.filter(shop => shop.city === selectedCity).map(shop => shop.store);
        } else {
            // Если город не выбран, возвращаем все магазины
            return data.data.map(shop => shop.store);
        }
    } else {
        return [];
    }
}, [isSuccess, data, selectedCity]);

  const [dropdownVisibleCity, setDropdownVisibleCity] = useState(false);
  const [dropdownVisibleId, setDropdownVisibleId] = useState(false);

  const [filteredCities, setFilteredCities] = useState<string[]>([]);
  const [filteredIds, setFilteredIds] = useState<string[]>([]);

  const [idErrorMessage, setIdErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    setFilteredCities(storeCities);
  }, [storeCities]);

  useEffect(() => {
    setFilteredIds(storeIds);
  }, [storeIds]);

  function handleCityClick(city: string) {
    setSelectedCity(city);
    setDropdownVisibleCity(false);
  }

  function handleIdClick(id: string) {
    setSelectedId(id);
    // Проверяем наличие свойства data и наличие массива data внутри объекта data
    if (data && data.data) {
        const correspondingCity = data.data.find(shop => shop.store === id)?.city;
        if (correspondingCity) {
            setSelectedCity(correspondingCity);
        }
    }

    setDropdownVisibleId(false);
}


  const handleCityInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCity(e.target.value);
    setFilteredCities(
      storeCities.filter((city) =>
        city.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
    if (!e.target.checkValidity()) {
      setIsCityValid(false);
      setIdErrorMessage(e.target.validationMessage);
    } else {
      setIdErrorMessage(null);
      setIsCityValid(true);
    }
  };

  const handleIdInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedId(e.target.value);
    setFilteredIds(storeIds.filter((id) => id.includes(e.target.value)));

    if (!e.target.checkValidity()) {
      setIsIdValid(false);
      setIdErrorMessage(e.target.validationMessage);
    } else {
      setIdErrorMessage(null);
      setIsIdValid(true);
    }
  };

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    dispatch(setFilterData({
      sku: selectedId,
      group: '',       
      category: '',   
      subcategory: '', 
      uom: 0  
  }));
    onClose();
   
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
              minLength={28}
              maxLength={35}
              value={selectedCity}
              onChange={handleCityInputChange}
              onClick={() => setDropdownVisibleCity(!dropdownVisibleCity)}
              className={`${styles.login__info} ${styles.login__info_form_title} ${!isCityValid ? styles.login__info_type_invalid : ''}`}
              placeholder="Поиск.."
              required
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

          <p className={`${styles["login__title-input"]} ${styles["login__title-input_type_up"]}`}>Id торгового комплекса</p>
          <div className={styles["city-selector"]}>
            <input
              type="text"
              minLength={28}
              maxLength={35}
              value={selectedId}
              onChange={handleIdInputChange}
              onClick={() => setDropdownVisibleId(!dropdownVisibleId)}
              className={`${styles.login__info} ${styles.login__info_form_subtitle} ${!isIdValid ? styles.login__info_type_invalid : ''}`}
              placeholder="Поиск.."
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
          <button type="submit" className={styles["login__button-save"]} disabled={!isIdValid || !isCityValid}>
            Перейти к данным
            </button> 
        </form>
      </div>
    </div>
  );
};

export default Mall;
