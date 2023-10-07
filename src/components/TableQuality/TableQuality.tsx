import { FC } from "react";
import styles from "./TableQuality.module.css";

const TableQuality: FC = () => {
    
      const items = [
        {
          tk: "ТК 1",
          group: "Продукция собственного производства",
          category: "Кулинария «Лента»",
          subCategory: "Гриль",
          product: "Цыпленок гриль, весовой",
          unit: "г",
          day: {
            sale: {
              unit: "10 шт",
              amount: "1500 руб",
          },
          forecast: {
              unit: "150 шт",
              amount: "1500 руб", 
          },
          },
          week: {
            sale: {
              unit: "200 шт",
              amount: "200 руб",
          },
          forecast: {
              unit: "45 шт",
              amount: "1450 руб", 
          },
          },
      },

      {
        tk: "ТК 1",
        group: "Продукция собственного производства",
        category: "Кулинария «Лента»",
        subCategory: "Гриль",
        product: "Цыпленок гриль, весовой",
        unit: "г",
        day: {
          sale: {
            unit: "10 шт",
            amount: "1500 руб",
        },
        forecast: {
            unit: "150 шт",
            amount: "1500 руб", 
        },
        },
        week: {
          sale: {
            unit: "200 шт",
            amount: "200 руб",
        },
        forecast: {
            unit: "45 шт",
            amount: "1450 руб", 
        },
        },
    },

    {
      tk: "ТК 1",
      group: "Продукция собственного производства",
      category: "Кулинария «Лента»",
      subCategory: "Гриль",
      product: "Цыпленок гриль, весовой",
      unit: "г",
      day: {
        sale: {
          unit: "10 шт",
          amount: "1500 руб",
      },
      forecast: {
          unit: "150 шт",
          amount: "1500 руб", 
      },
      },
      week: {
        sale: {
          unit: "200 шт",
          amount: "200 руб",
      },
      forecast: {
          unit: "45 шт",
          amount: "1450 руб", 
      },
      },
  },

  {
    tk: "ТК 1",
    group: "Продукция собственного производства",
    category: "Кулинария «Лента»",
    subCategory: "Гриль",
    product: "Цыпленок гриль, весовой",
    unit: "г",
    day: {
      sale: {
        unit: "10 шт",
        amount: "1500 руб",
    },
    forecast: {
        unit: "150 шт",
        amount: "1500 руб", 
    },
    },
    week: {
      sale: {
        unit: "200 шт",
        amount: "200 руб",
    },
    forecast: {
        unit: "45 шт",
        amount: "1450 руб", 
    },
    },
},

{
  tk: "ТК 1",
  group: "Продукция собственного производства",
  category: "Кулинария «Лента»",
  subCategory: "Гриль",
  product: "Цыпленок гриль, весовой",
  unit: "г",
  day: {
    sale: {
      unit: "10 шт",
      amount: "1500 руб",
  },
  forecast: {
      unit: "150 шт",
      amount: "1500 руб", 
  },
  },
  week: {
    sale: {
      unit: "200 шт",
      amount: "200 руб",
  },
  forecast: {
      unit: "45 шт",
      amount: "1450 руб", 
  },
  },
},

{
  tk: "ТК 1",
  group: "Продукция собственного производства",
  category: "Кулинария «Лента»",
  subCategory: "Гриль",
  product: "Цыпленок гриль, весовой",
  unit: "г",
  day: {
    sale: {
      unit: "10 шт",
      amount: "1500 руб",
  },
  forecast: {
      unit: "150 шт",
      amount: "1500 руб", 
  },
  },
  week: {
    sale: {
      unit: "200 шт",
      amount: "200 руб",
  },
  forecast: {
      unit: "45 шт",
      amount: "1450 руб", 
  },
  },
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
      <th className={styles["cell-name"]}>Ед. изм.</th>
      <th className={styles["cell-name"]}>День</th>
      <th className={styles["cell-name"]}>Неделя</th>
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
       className={`${styles["cell-name"]} ${styles["cell-name_type_week"]}`}
      ></th>
       <th
       className={`${styles["cell-name"]} ${styles["cell-name_type_week"]}`}
      ></th>
      <th className={styles["cell-item__container"]}>
          <th className={styles["cell-item__data"]}>
            Продажа факт
          </th>
          <th className={styles["cell-item__data"]}>
           Прогноз
          </th>
      </th>
      <th className={styles["cell-item__container"]}>
          <th className={styles["cell-item__data"]}>
          Продажа факт
          </th>
          <th className={styles["cell-item__data"]}>
          Прогноз
          </th>
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
        <th className={`${styles["cell-name"]} ${styles["cell-item"]}`}>
          {item.unit}
        </th>
        <th className={`${styles["cell-item__container"]}`}>
            <th
              className={`${styles["cell-item"]} ${styles["cell-item__unit"]}`}
            >
            {item.day.sale.unit}
            </th>
            <th
              className={`${styles["cell-item"]} ${styles["cell-item__amount"]}`}
            >{item.day.sale.amount}
            </th>
            <th
              className={`${styles["cell-item"]} ${styles["cell-item__unit"]}`}
            >
            {item.day.forecast.unit}
            </th>
            <th
              className={`${styles["cell-item"]} ${styles["cell-item__amount"]}`}
            >{item.day.forecast.amount}
            </th>
        </th>

        <th className={`${styles["cell-item__container"]}`}>
            <th
              className={`${styles["cell-item"]} ${styles["cell-item__unit"]}`}
            >
            {item.week.sale.unit}
            </th>
            <th
              className={`${styles["cell-item"]} ${styles["cell-item__amount"]}`}
            >{item.week.sale.amount}
            </th>
            <th
              className={`${styles["cell-item"]} ${styles["cell-item__unit"]}`}
            >
            {item.week.forecast.unit}
            </th>
            <th
              className={`${styles["cell-item"]} ${styles["cell-item__amount"]}`}
            >{item.week.forecast.amount}
            </th>
        </th>
      </tr>
    ))}
  </tbody>
  </>
  );
}

export default TableQuality;