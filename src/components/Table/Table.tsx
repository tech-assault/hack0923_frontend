import { FC, useState } from "react";
import styles from "./Table.module.css";
import TableDemand from "../TableDemand/TableDemand";
import TableQuality from "../TableQuality/TableQuality";

const Table: FC = () => {

  const [DemandForecast, setDemandForecast] = useState(false);
  const [ForecastQuality, setForecastQuality] = useState(true);

  return (
    <div className={styles.scrollable}>
      <table className={styles.table}>
      {DemandForecast ? (
       <TableDemand />
      ) : ForecastQuality ? (
      <TableQuality />
      ) : null}
      </table>
    </div>
  );
};

export default Table;
