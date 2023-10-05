import { FC } from "react";
import styles from "./Table.module.css";
// import FilterBar from "../../components/FilterBar/FilterBar";
// import GraphTypeSelector from "../../components/GraphTypeSelector/GraphTypeSelector";
// import { Link } from "react-router-dom";
// import icon_logout from "./../../vendor/images/icon_logout.svg";

const Table: FC = () => {
  return (
    <div className={styles.table}>
      <table className={styles["table-revenue"]}>
        <tr className={styles["table-revenue__name-container"]}>
          <th className={`${styles["cell-name"]} ${styles[""]}`}>
              <input type="checkbox" className={styles.checkbox} />
          </th>
          <th
            className={`${styles["cell-name"]} ${styles[""]}`}
          >ТК</th>
          <th
             className={`${styles["cell-name"]} ${styles[""]}`}
          >
            Группа
          </th>
          <th
             className={`${styles["cell-name"]} ${styles[""]}`}
          >
            Категория
          </th>
          <th
             className={`${styles["cell-name"]} ${styles[""]}`}
          >
           Подкатегория
          </th>
          <th
             className={`${styles["cell-name"]} ${styles[""]}`}
          >
           Товар
          </th>
          <th
            className={`${styles["cell-name"]} ${styles[""]}`}
          >
           Спрос дата/шт
          </th>
        </tr>
      </table>
    </div>
    //         <div class="table__gap"></div>
    //         <div class="tables">
    //         <table class="table-revenue table-revenue_type_two">
    //           <tr class="table-revenue__value-container">
    //             <td
    //               style="width: 6%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               <button type="button" class="button__icon">
    //                 <img
    //                   class="icon icon_type_twice"
    //                   src="./images/Icon.trash.svg"
    //                   alt="иконка"
    //                 />
    //               </button>
    //             </td>
    //             <td
    //               style="width: 20%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_bold table-revenue__cell-name_type_one-column"
    //             >
    //               <img
    //                 class="icon icon_type_up"
    //                 src="./images/up.arrow.svg"
    //                 alt="иконка"
    //               />
    //               Проектно-изыскательные работы
    //             </td>
    //             <td
    //               style="width: 4%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               Р
    //             </td>
    //             <td
    //               style="width: 9%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               100
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_bold"
    //             >
    //               100 000,00
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_bold"
    //             >
    //               150 000,00
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_bold"
    //             >
    //               250 000,00
    //             </td>
    //             <td
    //               style="width: 5%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               25
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               50 000,00
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               72 000,00
    //             </td>
    //           </tr>
    //           <tr class="table-revenue__value-container">
    //             <td
    //               style="width: 6%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               <button type="button" class="button__icon">
    //                 <img
    //                   class="icon icon_type_twice"
    //                   src="./images/Icon.trash.svg"
    //                   alt="иконка"
    //                 />
    //                 <img
    //                   class="icon icon_type_twice"
    //                   src="./images/clip0.svg"
    //                   alt="иконка"
    //                 />
    //               </button>
    //             </td>
    //             <td
    //               style="width: 20%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two table-revenue__cell-name_type_one-column"
    //             >
    //               Разработка сметной документации
    //             </td>
    //             <td
    //               style="width: 4%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               Р
    //             </td>
    //             <td
    //               style="width: 9%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               100
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_bold"
    //             >
    //               100 000,00
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_bold"
    //             >
    //               150 000,00
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_bold"
    //             >
    //               250 000,00
    //             </td>
    //             <td
    //               style="width: 5%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               25
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               50 000,00
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               72 000,00
    //             </td>
    //           </tr>
    //           <tr class="table-revenue__value-container">
    //             <td
    //               style="width: 6%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               <button type="button" class="button__icon">
    //                 <img
    //                   class="icon icon_type_twice"
    //                   src="./images/Icon.trash.svg"
    //                   alt="иконка"
    //                 />
    //                 <img
    //                   class="icon icon_type_twice"
    //                   src="./images/clip0.svg"
    //                   alt="иконка"
    //                 />
    //               </button>
    //             </td>
    //             <td
    //               style="width: 20%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two table-revenue__cell-name_type_one-column"
    //             >
    //               Разработка эскизного проекта
    //             </td>
    //             <td
    //               style="width: 4%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               Р
    //             </td>
    //             <td
    //               style="width: 9%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               100
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_bold"
    //             >
    //               100 000,00
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_bold"
    //             >
    //               150 000,00
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_bold"
    //             >
    //               250 000,00
    //             </td>
    //             <td
    //               style="width: 5%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               25
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               50 000,00
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               72 000,00
    //             </td>
    //           </tr>
    //           <tr class="table-revenue__value-container">
    //             <td
    //               style="width: 6%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               <button type="button" class="button__icon">
    //                 <img
    //                   class="icon icon_type_twice"
    //                   src="./images/Icon.trash.svg"
    //                   alt="иконка"
    //                 />
    //                 <img
    //                   class="icon icon_type_twice"
    //                   src="./images/clip2.svg"
    //                   alt="иконка"
    //                 />
    //               </button>
    //             </td>
    //             <td
    //               style="width: 20%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two table-revenue__cell-name_type_one-column"
    //             >
    //               Разработка проектной и рабочей документации
    //             </td>
    //             <td
    //               style="width: 4%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               Р
    //             </td>
    //             <td
    //               style="width: 9%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               100
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_bold"
    //             >
    //               100 000,00
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_bold"
    //             >
    //               150 000,00
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_bold"
    //             >
    //               250 000,00
    //             </td>
    //             <td
    //               style="width: 5%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               25
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               50 000,00
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               72 000,00
    //             </td>
    //           </tr>
    //           <tr class="table-revenue__value-container">
    //             <td
    //               style="width: 6%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               <button type="button" class="button__icon">
    //                 <img
    //                   class="icon icon_type_twice"
    //                   src="./images/Icon.trash.svg"
    //                   alt="иконка"
    //                 />
    //                 <img
    //                   class="icon icon_type_twice"
    //                   src="./images/clip6.svg"
    //                   alt="иконка"
    //                 />
    //               </button>
    //             </td>
    //             <td
    //               style="width: 20%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two table-revenue__cell-name_type_one-column"
    //             >
    //               Проектно-изыскательные работы
    //             </td>
    //             <td
    //               style="width: 4%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               Р
    //             </td>
    //             <td
    //               style="width: 9%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               100
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_bold"
    //             >
    //               100 000,00
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_bold"
    //             >
    //               150 000,00
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_bold"
    //             >
    //               250 000,00
    //             </td>
    //             <td
    //               style="width: 5%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               25
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               50 000,00
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               72 000,00
    //             </td>
    //           </tr>
    //         </table>
    //         <div class="table__gap"></div>
    //         <table class="table-revenue table-revenue_type_two">
    //           <tr class="table-revenue__value-container">
    //             <td
    //               style="width: 6%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               <button type="button" class="button__icon">
    //                 <img
    //                   class="icon icon_type_twice"
    //                   src="./images/Icon.trash.svg"
    //                   alt="иконка"
    //                 />
    //               </button>
    //             </td>
    //             <td
    //               style="width: 20%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_bold table-revenue__cell-name_type_one-column"
    //             >
    //               <img
    //                 class="icon icon_type_up"
    //                 src="./images/up.arrow.svg"
    //                 alt="иконка"
    //               />
    //               1.Подготовительные работы
    //             </td>
    //             <td
    //               style="width: 4%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               Р
    //             </td>
    //             <td
    //               style="width: 9%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               100
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_bold"
    //             >
    //               100 000,00
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_bold"
    //             >
    //               150 000,00
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_bold"
    //             >
    //               250 000,00
    //             </td>
    //             <td
    //               style="width: 5%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               25
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               50 000,00
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               72 000,00
    //             </td>
    //           </tr>
    //           <tr class="table-revenue__value-container">
    //             <td
    //               style="width: 6%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               <button type="button" class="button__icon">
    //                 <img
    //                   class="icon icon_type_twice"
    //                   src="./images/Icon.trash.svg"
    //                   alt="иконка"
    //                 />
    //                 <img
    //                   class="icon icon_type_twice"
    //                   src="./images/clip3.svg"
    //                   alt="иконка"
    //                 />
    //               </button>
    //             </td>
    //             <td
    //               style="width: 20%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two table-revenue__cell-name_type_one-column"
    //             >
    //               1.1. Общее (разное)
    //             </td>
    //             <td
    //               style="width: 4%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               Р
    //             </td>
    //             <td
    //               style="width: 9%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               100
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_bold"
    //             >
    //               100 000,00
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_bold"
    //             >
    //               150 000,00
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_bold"
    //             >
    //               250 000,00
    //             </td>
    //             <td
    //               style="width: 5%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               25
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               50 000,00
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               72 000,00
    //             </td>
    //           </tr>
    //           <tr class="table-revenue__value-container">
    //             <td
    //               style="width: 6%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               <button type="button" class="button__icon">
    //                 <img
    //                   class="icon icon_type_twice"
    //                   src="./images/Icon.trash.svg"
    //                   alt="иконка"
    //                 />
    //                 <img
    //                   class="icon icon_type_twice"
    //                   src="./images/clip0.svg"
    //                   alt="иконка"
    //                 />
    //               </button>
    //             </td>
    //             <td
    //               style="width: 20%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two table-revenue__cell-name_type_one-column"
    //             >
    //               1.2. Вынос сетей
    //             </td>
    //             <td
    //               style="width: 4%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               Р
    //             </td>
    //             <td
    //               style="width: 9%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               100
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_bold"
    //             >
    //               100 000,00
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_bold"
    //             >
    //               150 000,00
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_bold"
    //             >
    //               250 000,00
    //             </td>
    //             <td
    //               style="width: 5%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               25
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               50 000,00
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               72 000,00
    //             </td>
    //           </tr>
    //           <tr class="table-revenue__value-container">
    //             <td
    //               style="width: 6%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               <button type="button" class="button__icon">
    //                 <img
    //                   class="icon icon_type_twice"
    //                   src="./images/Icon.trash.svg"
    //                   alt="иконка"
    //                 />
    //                 <img
    //                   class="icon icon_type_twice"
    //                   src="./images/clip4.svg"
    //                   alt="иконка"
    //                 />
    //               </button>
    //             </td>
    //             <td
    //               style="width: 20%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two table-revenue__cell-name_type_one-column"
    //             >
    //               1.3. Вырубка деревьев
    //             </td>
    //             <td
    //               style="width: 4%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               Р
    //             </td>
    //             <td
    //               style="width: 9%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               100
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_bold"
    //             >
    //               100 000,00
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_bold"
    //             >
    //               150 000,00
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_bold"
    //             >
    //               250 000,00
    //             </td>
    //             <td
    //               style="width: 5%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               25
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               50 000,00
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               72 000,00
    //             </td>
    //           </tr>
    //           <tr class="table-revenue__value-container">
    //             <td
    //               style="width: 6%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               <button type="button" class="button__icon">
    //                 <img
    //                   class="icon icon_type_twice"
    //                   src="./images/Icon.trash.svg"
    //                   alt="иконка"
    //                 />
    //                 <img
    //                   class="icon icon_type_twice"
    //                   src="./images/clip0.svg"
    //                   alt="иконка"
    //                 />
    //               </button>
    //             </td>
    //             <td
    //               style="width: 20%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               1.4. Демонтажные работы
    //             </td>
    //             <td
    //               style="width: 4%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               Р
    //             </td>
    //             <td
    //               style="width: 9%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               100
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_bold"
    //             >
    //               100 000,00
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_bold"
    //             >
    //               150 000,00
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_bold"
    //             >
    //               250 000,00
    //             </td>
    //             <td
    //               style="width: 5%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               25
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               50 000,00
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               72 000,00
    //             </td>
    //           </tr>
    //         </tr>
    //         <tr class="table-revenue__value-container">
    //           <td
    //             style="width: 6%"
    //             colspan="1"
    //             class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //           >
    //             <button type="button" class="button__icon">
    //               <img
    //                 class="icon icon_type_twice"
    //                 src="./images/Icon.trash.svg"
    //                 alt="иконка"
    //               />
    //               <img
    //                 class="icon icon_c"
    //                 src="./images/clip0.svg"
    //                 alt="иконка"
    //               />
    //             </button>
    //           </td>
    //           <td
    //             style="width: 20%"
    //             colspan="1"
    //             class="table-revenue__cell-name table-revenue__cell-name_type_two table-revenue__cell-name_type_one-column"
    //           >
    //             1.5. Шпунтовое ограждение котлована
    //           </td>
    //           <td
    //             style="width: 4%"
    //             colspan="1"
    //             class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //           >
    //             Р
    //           </td>
    //           <td
    //             style="width: 9%"
    //             colspan="1"
    //             class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //           >
    //             100
    //           </td>
    //           <td
    //             style="width: 11%"
    //             colspan="1"
    //             class="table-revenue__cell-name table-revenue__cell-name_type_bold"
    //           >
    //             100 000,00
    //           </td>
    //           <td
    //             style="width: 11%"
    //             colspan="1"
    //             class="table-revenue__cell-name table-revenue__cell-name_type_bold"
    //           >
    //             150 000,00
    //           </td>
    //           <td
    //             style="width: 11%"
    //             colspan="1"
    //             class="table-revenue__cell-name table-revenue__cell-name_type_bold"
    //           >
    //             250 000,00
    //           </td>
    //           <td
    //             style="width: 5%"
    //             colspan="1"
    //             class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //           >
    //             25
    //           </td>
    //           <td
    //             style="width: 11%"
    //             colspan="1"
    //             class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //           >
    //             50 000,00
    //           </td>
    //           <td
    //             style="width: 11%"
    //             colspan="1"
    //             class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //           >
    //             72 000,00
    //           </td>
    //         </tr>
    //         </table>
    //         <div class="table__gap"></div>
    //         <table class="table-revenue table-revenue_type_two">
    //           <tr class="table-revenue__value-container">
    //             <td
    //               style="width: 26%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_bold table-revenue__cell-name_type_one-column"
    //             >
    //               <img
    //                 class="icon icon_type_up"
    //                 src="./images/up.arrow.svg"
    //                 alt="иконка"
    //               />
    //               План доходов
    //             </td>
    //             <td
    //               style="width: 4%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               Р
    //             </td>
    //             <td
    //               style="width: 9%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               100
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_bold"
    //             >
    //               100 000,00
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_bold"
    //             >
    //               150 000,00
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_bold"
    //             >
    //               250 000,00
    //             </td>
    //             <td
    //               style="width: 5%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               25
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               50 000,00
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               72 000,00
    //             </td>
    //           </tr>
    //           <tr class="table-revenue__value-container">

    //             <td
    //               style="width: 26%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two table-revenue__cell-name_type_one-column"
    //             >
    //               Авансирование, руб. с НДС (30% от суммы ГК)
    //             </td>
    //             <td
    //               style="width: 4%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               Р
    //             </td>
    //             <td
    //               style="width: 9%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               100
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_bold"
    //             >
    //               100 000,00
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_bold"
    //             >
    //               150 000,00
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_bold"
    //             >
    //               250 000,00
    //             </td>
    //             <td
    //               style="width: 5%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               25
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               50 000,00
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               72 000,00
    //             </td>
    //           </tr>
    //           <tr class="table-revenue__value-container">

    //             <td
    //               style="width: 26%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two table-revenue__cell-name_type_one-column"
    //             >
    //               Выполнение за весь период строительства, руб с НДС
    //             </td>
    //             <td
    //               style="width: 4%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               Р
    //             </td>
    //             <td
    //               style="width: 9%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               100
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_bold"
    //             >
    //               100 000,00
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_bold"
    //             >
    //               150 000,00
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_bold"
    //             >
    //               250 000,00
    //             </td>
    //             <td
    //               style="width: 5%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               25
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               50 000,00
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               72 000,00
    //             </td>
    //           </tr>
    //           <tr class="table-revenue__value-container">

    //             <td
    //               style="width: 26%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two table-revenue__cell-name_type_one-column"
    //             >
    //               Сумма удержания аванса с КС-2
    //             </td>
    //             <td
    //               style="width: 4%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               Р
    //             </td>
    //             <td
    //               style="width: 9%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               100
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_bold"
    //             >
    //               100 000,00
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_bold"
    //             >
    //               150 000,00
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_bold"
    //             >
    //               250 000,00
    //             </td>
    //             <td
    //               style="width: 5%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               25
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               50 000,00
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               72 000,00
    //             </td>
    //           </tr>
    //           <tr class="table-revenue__value-container">
    //             <td
    //               style="width: 26%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two table-revenue__cell-name_type_one-column"
    //             >
    //               Оплата выполнения с учетом удержания аванса, руб. с НДС
    //             </td>
    //             <td
    //               style="width: 4%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               Р
    //             </td>
    //             <td
    //               style="width: 9%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               100
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_bold"
    //             >
    //               100 000,00
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_bold"
    //             >
    //               150 000,00
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_bold"
    //             >
    //               250 000,00
    //             </td>
    //             <td
    //               style="width: 5%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               25
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               50 000,00
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               72 000,00
    //             </td>
    //           </tr>
    //           <tr class="table-revenue__value-container">
    //             <td
    //               style="width: 26%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two table-revenue__cell-name_type_one-column"
    //             >
    //               Итого доход
    //             </td>
    //             <td
    //               style="width: 4%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               Р
    //             </td>
    //             <td
    //               style="width: 9%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               100
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_bold"
    //             >
    //               100 000,00
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_bold"
    //             >
    //               150 000,00
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_bold"
    //             >
    //               250 000,00
    //             </td>
    //             <td
    //               style="width: 5%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               25
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               50 000,00
    //             </td>
    //             <td
    //               style="width: 11%"
    //               colspan="1"
    //               class="table-revenue__cell-name table-revenue__cell-name_type_two"
    //             >
    //               72 000,00
    //             </td>
    //           </tr>
    //         </table>
    //       </div>
  );
};

export default Table;
