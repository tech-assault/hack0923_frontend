import { FC } from "react";
import styles from "./Table.module.css";
import TableDemand from "../TableDemand/TableDemand";
import TableQuality from "../TableQuality/TableQuality";
import { useSelector } from '../../hooks/useSelector'

const Table: FC = () => {

  const graphType = useSelector((store) => store.MainPage.graphType);

  return (
    <section className={styles.scrollable}>
      <table className={styles.table}>
      {graphType === "demand" && <TableDemand />}
      {graphType === "quality" && <TableQuality />}
      </table>
    </section>
  );
};

export default Table;
