import React, { useState, useId } from 'react'
import styles from './DaySelector.module.css'
import DatePicker, { registerLocale } from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import ru from 'date-fns/locale/ru';
registerLocale('ru', ru)

const DaySelector = () => {

    const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
    const [startDate, endDate] = dateRange;
    const id = useId();

    return (
        <div className={styles.container}>
            <label className={styles.label} htmlFor={id}>Период :</label>
            <DatePicker
                className={styles.input}
                id={id}
                locale={ru}
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                onChange={(update) => {
                    setDateRange(update);
                }}
                isClearable={true}
            />
        </div>
    );
}

export default DaySelector