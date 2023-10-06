import { FC } from "react";
import styles from "./Table.module.css";

const Table: FC = () => {
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
            <th
              className={`${styles["cell-item__container"]}`}
            >
              <th
                className={styles["cell-item__data"]}
              >
                23.09.2023
              </th>
              <th
                className={styles["cell-item__data"]}
              >
                24.09.2023
              </th>
              <th
                className={styles["cell-item__data"]}
              >
                25.09.2023
              </th>
              <th
                className={styles["cell-item__data"]}
              >
                26.09.2023
              </th>
              <th
                className={styles["cell-item__data"]}
              >
                27.09.2023
              </th>
              <th
                className={styles["cell-item__data"]}
              >
                28.09.2023
              </th>
              <th
                className={styles["cell-item__data"]}
              >
                29.09.2023
              </th>
              <th
                className={styles["cell-item__data"]}
              >
                30.09.2023
              </th>
            </th>
          </tr>

          <tr className={styles["table-revenue__name-container"]}>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              <input type="checkbox" className={styles.checkbox} />
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              ТК 1
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Продукция собственного производства
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Кулинария «Лента»
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Гриль
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Цыпленок гриль, весовой
            </th>
           <th
              className={`${styles["cell-item__container"]}`}
            >
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
            </th>
          </tr>

          <tr className={styles["table-revenue__name-container"]}>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              <input type="checkbox" className={styles.checkbox} />
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              ТК 1
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Продукция собственного производства
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Кулинария «Лента»
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Гриль
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Цыпленок гриль, весовой
            </th>
           <th
              className={`${styles["cell-item__container"]}`}
            >
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
            </th>
          </tr>

          <tr className={styles["table-revenue__name-container"]}>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              <input type="checkbox" className={styles.checkbox} />
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              ТК 1
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Продукция собственного производства
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Кулинария «Лента»
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Гриль
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Цыпленок гриль, весовой
            </th>
           <th
              className={`${styles["cell-item__container"]}`}
            >
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
            </th>
          </tr>

          <tr className={styles["table-revenue__name-container"]}>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              <input type="checkbox" className={styles.checkbox} />
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              ТК 1
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Продукция собственного производства
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Кулинария «Лента»
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Гриль
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Цыпленок гриль, весовой
            </th>
           <th
              className={`${styles["cell-item__container"]}`}
            >
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
            </th>
          </tr>

          <tr className={styles["table-revenue__name-container"]}>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              <input type="checkbox" className={styles.checkbox} />
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              ТК 1
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Продукция собственного производства
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Кулинария «Лента»
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Гриль
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Цыпленок гриль, весовой
            </th>
           <th
              className={`${styles["cell-item__container"]}`}
            >
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
            </th>
          </tr>

          <tr className={styles["table-revenue__name-container"]}>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              <input type="checkbox" className={styles.checkbox} />
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              ТК 1
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Продукция собственного производства
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Кулинария «Лента»
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Гриль
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Цыпленок гриль, весовой
            </th>
           <th
              className={`${styles["cell-item__container"]}`}
            >
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
            </th>
          </tr>

          <tr className={styles["table-revenue__name-container"]}>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              <input type="checkbox" className={styles.checkbox} />
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              ТК 1
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Продукция собственного производства
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Кулинария «Лента»
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Гриль
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Цыпленок гриль, весовой
            </th>
           <th
              className={`${styles["cell-item__container"]}`}
            >
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
            </th>
          </tr>

          <tr className={styles["table-revenue__name-container"]}>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              <input type="checkbox" className={styles.checkbox} />
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              ТК 1
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Продукция собственного производства
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Кулинария «Лента»
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Гриль
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Цыпленок гриль, весовой
            </th>
           <th
              className={`${styles["cell-item__container"]}`}
            >
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
            </th>
          </tr>

          <tr className={styles["table-revenue__name-container"]}>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              <input type="checkbox" className={styles.checkbox} />
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              ТК 1
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Продукция собственного производства
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Кулинария «Лента»
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Гриль
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Цыпленок гриль, весовой
            </th>
           <th
              className={`${styles["cell-item__container"]}`}
            >
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
            </th>
          </tr>

          <tr className={styles["table-revenue__name-container"]}>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              <input type="checkbox" className={styles.checkbox} />
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              ТК 1
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Продукция собственного производства
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Кулинария «Лента»
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Гриль
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Цыпленок гриль, весовой
            </th>
           <th
              className={`${styles["cell-item__container"]}`}
            >
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
            </th>
          </tr>

          <tr className={styles["table-revenue__name-container"]}>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              <input type="checkbox" className={styles.checkbox} />
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              ТК 1
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Продукция собственного производства
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Кулинария «Лента»
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Гриль
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Цыпленок гриль, весовой
            </th>
           <th
              className={`${styles["cell-item__container"]}`}
            >
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
            </th>
          </tr>

          <tr className={styles["table-revenue__name-container"]}>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              <input type="checkbox" className={styles.checkbox} />
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              ТК 1
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Продукция собственного производства
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Кулинария «Лента»
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Гриль
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Цыпленок гриль, весовой
            </th>
           <th
              className={`${styles["cell-item__container"]}`}
            >
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
            </th>
          </tr>

          <tr className={styles["table-revenue__name-container"]}>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              <input type="checkbox" className={styles.checkbox} />
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              ТК 1
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Продукция собственного производства
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Кулинария «Лента»
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Гриль
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Цыпленок гриль, весовой
            </th>
           <th
              className={`${styles["cell-item__container"]}`}
            >
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
            </th>
          </tr>

          <tr className={styles["table-revenue__name-container"]}>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              <input type="checkbox" className={styles.checkbox} />
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              ТК 1
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Продукция собственного производства
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Кулинария «Лента»
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Гриль
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Цыпленок гриль, весовой
            </th>
           <th
              className={`${styles["cell-item__container"]}`}
            >
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
            </th>
          </tr>

          <tr className={styles["table-revenue__name-container"]}>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              <input type="checkbox" className={styles.checkbox} />
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              ТК 1
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Продукция собственного производства
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Кулинария «Лента»
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Гриль
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Цыпленок гриль, весовой
            </th>
           <th
              className={`${styles["cell-item__container"]}`}
            >
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
            </th>
          </tr>

          <tr className={styles["table-revenue__name-container"]}>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              <input type="checkbox" className={styles.checkbox} />
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              ТК 1
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Продукция собственного производства
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Кулинария «Лента»
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Гриль
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Цыпленок гриль, весовой
            </th>
           <th
              className={`${styles["cell-item__container"]}`}
            >
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
            </th>
          </tr>

          <tr className={styles["table-revenue__name-container"]}>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              <input type="checkbox" className={styles.checkbox} />
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              ТК 1
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Продукция собственного производства
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Кулинария «Лента»
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Гриль
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Цыпленок гриль, весовой
            </th>
           <th
              className={`${styles["cell-item__container"]}`}
            >
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
            </th>
          </tr>

          <tr className={styles["table-revenue__name-container"]}>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              <input type="checkbox" className={styles.checkbox} />
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              ТК 1
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Продукция собственного производства
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Кулинария «Лента»
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Гриль
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Цыпленок гриль, весовой
            </th>
           <th
              className={`${styles["cell-item__container"]}`}
            >
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
            </th>
          </tr>

          <tr className={styles["table-revenue__name-container"]}>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              <input type="checkbox" className={styles.checkbox} />
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              ТК 1
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Продукция собственного производства
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Кулинария «Лента»
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Гриль
            </th>
            <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
              Цыпленок гриль, весовой
            </th>
           <th
              className={`${styles["cell-item__container"]}`}
            >
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
              <th
                className={`${styles["cell-item"]} ${styles["cell-item__data"]}`}
              >
                10 шт
              </th>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
