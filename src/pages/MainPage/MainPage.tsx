import { FC, useEffect } from "react";
import styles from "./MainPage.module.css";
import FilterBar from "../../components/FilterBar/FilterBar";
import Table from "../../components/Table/Table";
import GraphTypeSelector from "../../components/GraphTypeSelector/GraphTypeSelector";
import { Link } from "react-router-dom";
import icon_logout from "./../../vendor/images/icon_logout.svg";
import Graph from "../../components/Graph/Graph";
import DaySelector from "../../components/DaySelector/DaySelector";
import icon_chart from "../../vendor/images/chart.svg";
import Mall from "../Mall/Mall";
import { useDispatch } from "../../hooks/useDispatch";
import { useSelector } from "../../hooks/useSelector";
import { closeMallPopup, openMallPopup } from "../../redux/slices/MainPage";

const MainPage: FC = () => {
  const isMallPopupVisible = useSelector(
    (store) => store.MainPage.isMallPopupVisible
  );
  const dispatch = useDispatch();
//   const [cities, setCities] = useState([]);

  useEffect(() => {
    dispatch(openMallPopup());
  }, [dispatch]);

  const handleClose = () => {
    dispatch(closeMallPopup());
  };

//   function loadCities() {
//     return mainApi
//       .getStores()
//       .then((res) => {
//         setCities(data);
//         localStorage.setItem("mall", res.token);
//       })
//       .catch((error) => {
//         console.log(error.message);
//         // setServerError(error); // Установка ошибки
//         throw error;
//       });
//   }

  return (
    <>
      {isMallPopupVisible ? (
        <Mall onClose={handleClose} />
      ) : (
        <main className={styles.container}>
          <FilterBar />
          <div className={styles.content}>
            <section className={styles.header}>
              <GraphTypeSelector />
              <Link className={styles.logout} to="./login">
                <img src={icon_logout} />
              </Link>
            </section>
            <Graph></Graph>
            <section className={styles.toolbar}>
              <DaySelector />
              <div className={styles.button__container}>
                <button
                  type="button"
                  className={`${styles.button_excel} ${styles.button_excel_type_blue}`}
                >
                  <img
                    src={icon_chart}
                    className={styles.icon_chart}
                    alt="Иконка графика"
                  />
                  График
                </button>
                <button type="button" className={styles.button_excel}>
                  Выгрузить в Excel
                </button>
              </div>
            </section>
            <Table />
          </div>
        </main>
      )}
    </>
  );
};

export default MainPage;
