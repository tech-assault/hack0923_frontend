import { FC } from "react";
import styles from "./Table.module.css";

const Table: FC = () => {
  //удалить эти константы

  const dates = [
    "23.09.2023",
    "24.09.2023",
    "25.09.2023",
    "26.09.2023",
    "27.09.2023",
    "28.09.2023",
    "29.09.2023",
    "30.09.2023",
    "31.09.2023",
    "01.10.2023",
    "02.10.2023",
    "03.10.2023",
    "04.10.2023",
  ];

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
    <div className={styles.scrollable}>
      <table className={styles.table}>
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
            <th className={`${styles["cell-item__container"]}`}>
              {dates.map((date, dateIndex) => (
                <th key={dateIndex} className={styles["cell-item__data"]}>
                  {date}
                </th>
              ))}
            </th>
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
                {dates.map((date, dateIndex) => (
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
      </table>
    </div>
  );
};

export default Table;
