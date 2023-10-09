import { FC } from "react";
import styles from "./TableQuality.module.css";
import { useGetProductsQuery } from "../../redux/slices/API";

const TableQuality: FC = () => {
    
  const {data, isLoading} = useGetProductsQuery();

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
      <th className={styles["cell-name"]}>Ед. изм.</th>
      <th className={`${styles["cell-name"]} ${styles["cell-name_type_week"]}`}>День</th>
      <th className={`${styles["cell-name"]} ${styles["cell-name_type_week"]}`}>Неделя</th>
    </tr>
  </thead>
  <tbody className={styles["table-item"]}>

    <tr className={`${styles["table-revenue__name-container"]} ${styles["table-revenue_type_more-size"]}`}>
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
        <th
         className={`${styles["cell-name"]} ${styles["cell-item"]}`}
      ></th>
      <td className={styles["cell-item__container"]}>
          <div className={styles["cell-item__data"]}>
            Продажа факт
          </div>
          <div className={styles["cell-item__data"]}>
           Прогноз
          </div>
      </td>
      <td className={styles["cell-item__container"]}>
          <div className={styles["cell-item__data"]}>
          Продажа факт
          </div>
          <div className={styles["cell-item__data"]}>
          Прогноз
          </div>
      </td>
    </tr>
    {items.map((item, index) => (
       <tr  key={index} className={`${styles["table-revenue__name-container"]} ${styles["table-revenue_type_more-size"]}`}>
        <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
          <input type="checkbox" className={styles.checkbox} />
        </th>
        <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
          
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
        <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
          {item.uom}
        </th>
        <td className={`${styles["cell-item__container"]}`}>
            <div
              className={`${styles["cell-item"]} ${styles["cell-item__unit"]}`}
            >
            {/* {item.day.sale.unit} */}
            </div>
            <div
              className={`${styles["cell-item"]} ${styles["cell-item__amount"]}`}
            >
              {/* {item.day.sale.amount} */}
            </div>
            <div
              className={`${styles["cell-item"]} ${styles["cell-item__unit"]}`}
            >
            {/* {item.day.forecast.unit} */}
            </div>
            <div
              className={`${styles["cell-item"]} ${styles["cell-item__amount"]}`}
            >
              {/* {item.day.forecast.amount} */}
            </div>
        </td>

        <td className={`${styles["cell-item__container"]}`}>
            <div
              className={`${styles["cell-item"]} ${styles["cell-item__unit"]}`}
            >
            {/* {item.week.sale.unit} */}
            </div>
            <div
              className={`${styles["cell-item"]} ${styles["cell-item__amount"]}`}
            >
              {/* {item.week.sale.amount} */}
            </div>
            <div
              className={`${styles["cell-item"]} ${styles["cell-item__unit"]}`}
            >
            {/* {item.week.forecast.unit} */}
            </div>
            <div
              className={`${styles["cell-item"]} ${styles["cell-item__amount"]}`}
            >
              {/* {item.week.forecast.amount} */}
            </div>
        </td>
      </tr>
    ))}
  </tbody>
  </>
  );
}

export default TableQuality;