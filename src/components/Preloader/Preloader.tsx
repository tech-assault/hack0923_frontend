import styles from "./Preloader.module.css";
import preloader from "../../vendor/images/preloader.png";

const Preloader = () => {
    return (
        <div className={styles.preloader}>
           <img src={preloader} className={styles.image} alt="Лента Прелоадер" />
           <p  className={styles.paragraph}>Загрузка данных...</p>
        </div>
    )
};

export default Preloader
