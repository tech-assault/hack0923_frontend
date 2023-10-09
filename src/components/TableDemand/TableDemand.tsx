import { FC } from "react";
import styles from "./TableDemand.module.css";
import { useSelector } from "../../hooks/useSelector";
import { useGetProductsQuery } from "../../redux/slices/API";

const TableDemand: FC = () => {

  const formatDate = (date: Date): string => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
};

const timeFrom = useSelector((store) => store.MainPage.timeRange.from);

const timeTo = useSelector((store) => store.MainPage.timeRange.to);

const generateFormattedDatesBetween = (from: number, to: number): string[] => {
    const dates = [];

    const startDate = new Date(from);
    const endDate = new Date(to);

    for(let current = startDate; current <= endDate; current.setDate(current.getDate() + 1)) {
        dates.push(formatDate(current));
    }

    return dates;
}
const datesArray = generateFormattedDatesBetween(timeFrom, timeTo);

const {data, isLoading} = useGetProductsQuery();

console.log(data);

    
      const items = [
        {
          tk: "ТК 1",
          group: "Продукция собственного производства",
          category: "Кулинария «Лента»",
          subCategory: "Гриль",
          product: "Цыпленок гриль, весовой",
          demand: [
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
          ],
        },
        {
          tk: "ТК 1",
          group: "Продукция собственного производства",
          category: "Кулинария «Лента»",
          subCategory: "Гриль",
          product: "Цыпленок гриль, весовой",
          demand: [
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
          ],
        },
        {
          tk: "ТК 1",
          group: "Продукция собственного производства",
          category: "Кулинария «Лента»",
          subCategory: "Гриль",
          product: "Цыпленок гриль, весовой",
          demand: [
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
          ],
        },
        {
          tk: "ТК 1",
          group: "Продукция собственного производства",
          category: "Кулинария «Лента»",
          subCategory: "Гриль",
          product: "Цыпленок гриль, весовой",
          demand: [
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
          ],
        },
        {
          tk: "ТК 1",
          group: "Продукция собственного производства",
          category: "Кулинария «Лента»",
          subCategory: "Гриль",
          product: "Цыпленок гриль, весовой",
          demand: [
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
          ],
        },
        {
          tk: "ТК 1",
          group: "Продукция собственного производства",
          category: "Кулинария «Лента»",
          subCategory: "Гриль",
          product: "Говядина, весовой",
          demand: [
            "3 шт",
            "5 шт",
            "15 шт",
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
          ],
        },
        {
          tk: "ТК 1",
          group: "Продукция собственного производства",
          category: "Мясо",
          subCategory: "Гриль",
          product: "Цыпленок гриль, весовой",
          demand: [
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
          ],
        },
        {
          tk: "ТК 1",
          group: "Продукция собственного производства",
          category: "Кулинария «Лента»",
          subCategory: "Гриль",
          product: "Цыпленок гриль, весовой",
          demand: [
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
          ],
        },
        {
          tk: "ТК 1",
          group: "Продукция собственного производства",
          category: "Кулинария «Лента»",
          subCategory: "Гриль",
          product: "Цыпленок гриль, весовой",
          demand: [
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
          ],
        },
        {
          tk: "ТК 1",
          group: "Продукция собственного производства",
          category: "Кулинария «Лента»",
          subCategory: "Гриль",
          product: "Цыпленок гриль, весовой",
          demand: [
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
          ],
        },
        {
          tk: "ТК 1",
          group: "Продукция собственного производства",
          category: "Кулинария «Лента»",
          subCategory: "Гриль",
          product: "Цыпленок гриль, весовой",
          demand: [
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
          ],
        },
        {
          tk: "ТК 1",
          group: "Продукция собственного производства",
          category: "Кулинария «Лента»",
          subCategory: "Гриль",
          product: "Цыпленок гриль, весовой",
          demand: [
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
            "10 шт",
          ],
        },
      ];
   
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

    {items.map((item, index) => (
      <tr key={index} className={styles["table-revenue__name-container"]}>
        <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
          <input type="checkbox" className={styles.checkbox} />
        </th>
        <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
          {item.tk}
        </th>
        <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
          {item.group}
        </th>
        <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
          {item.category}
        </th>
        <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
          {item.subCategory}
        </th>
        <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
          {item.product}
        </th>
        <th className={`${styles["cell-item__container"]}`}>
          {datesArray.map((date, dateIndex) => (
            <th
              key={dateIndex}
              className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
            >
              {item.demand[dateIndex]}
            </th>
          ))}
        </th>
      </tr>
    ))}
  </tbody>
  </>
  );
}

export default TableDemand;