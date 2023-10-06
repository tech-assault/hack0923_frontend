import { useNavigate } from "react-router-dom";
import { FC } from "react";
import styles from "./Error.module.css";
import cat_error from "../../vendor/images/error.png";

const Error: FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <section className={styles.error}>
      <img src={cat_error} className={styles.error__image} alt="Кот" />
      <div className={styles.error__container}>
      <p className={styles.error__big}>404</p>
      <p className={styles.error__small}>
        Мы ничего не нашли. Проверьте корректность ссылки или перейдите на
        главную страницу
      </p>
      <button className={styles.error__link} onClick={handleGoBack}>
      На главную
      </button>
      </div>
    </section>
  );
};

export default Error;
