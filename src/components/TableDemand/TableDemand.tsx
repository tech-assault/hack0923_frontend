import { FC } from "react";
import styles from "./TableDemand.module.css";
import { useSelector } from "../../hooks/useSelector";
import { useGetProductsQuery } from "../../redux/slices/API";
import { generateFormattedDatesBetween } from "../../utils/functions";


const TableDemand: FC = () => {

  const timeFrom = useSelector((store) => store.MainPage.timeRange.from);

  const timeTo = useSelector((store) => store.MainPage.timeRange.to);

  const datesArray = generateFormattedDatesBetween(timeFrom, timeTo);

  const selectedShop = useSelector(store => store.MainPage.filters)

  const { data, isLoading } = useGetProductsQuery({
    store: selectedShop.shops,
    group: selectedShop.group,
    category: selectedShop.category,
    subcategory: selectedShop.subcategory,
    sku: selectedShop.sku,
  })


  const items = !isLoading && data ? data.data : [];

  return (
    <>
      <thead className={styles["table-revenue"]}>
        <tr className={styles["table-revenue__name-container"]}>
          <th className={`${styles["cell-name"]} ${styles[""]}`}>
            <input type="checkbox" className={styles.checkbox} />
          </th>
          <th className={styles["cell-name"]}>ТК</th>
          <th className={styles["cell-name"]}>Группа</th>
          <th className={styles["cell-name"]}>Категория</th>
          <th className={styles["cell-name"]}>Подкатегория</th>
          <th className={styles["cell-name"]}>Товар</th>
          <th className={styles["cell-name"]}>Спрос дата/шт</th>
        </tr>
      </thead>
      <tbody className={styles["table-item"]}>

        <tr className={styles["table-revenue__name-container"]}>
          <th
            className={`${styles["cell-name"]} ${styles["cell-item"]}`}
          ></th>
          <th
            className={`${styles["cell-name"]} ${styles["cell-item"]}`}
          ></th>
          <th
            className={`${styles["cell-name"]} ${styles["cell-item"]}`}
          ></th>
          <th
            className={`${styles["cell-name"]} ${styles["cell-item"]}`}
          ></th>
          <th
            className={`${styles["cell-name"]} ${styles["cell-item"]}`}
          ></th>
          <th
            className={`${styles["cell-name"]} ${styles["cell-item"]}`}
          ></th>
          <td className={`${styles["cell-item__container"]}`}>
            {datesArray.map((date, dateIndex) => (
              <div key={dateIndex} className={styles["cell-item__data"]}>
                {date}
              </div>
            ))}
          </td>
        </tr>

        {items.map((item) => (
          <tr key={item.sku} className={styles["table-revenue__name-container"]}>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              <input type="checkbox" className={styles.checkbox} />
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              {selectedShop.shops}
            </th>

            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              {item.group}
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              {item.category}
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              {item.subcategory}
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              {item.sku}
            </th>
            <td className={`${styles["cell-item__container"]}`}>
              {datesArray.map((date, dateIndex) => (
                <div
                  key={dateIndex}
                  className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
                >
                  {item.uom}
                </div>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
}

export default TableDemand;