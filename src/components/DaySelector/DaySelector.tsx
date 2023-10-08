import React, { useState, useId } from 'react'
import styles from './DaySelector.module.css'
import DatePicker, { registerLocale } from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import ru from 'date-fns/locale/ru';
import { useSelector } from '../../hooks/useSelector';
registerLocale('ru', ru)

const DaySelector = () => {

    const dateFrom = useSelector(state => state.MainPage.timeRange.from)
    const dateTo = useSelector(state => state.MainPage.timeRange.to)

    const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([dateFrom, dateTo]);
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
                isClearable={false}
                readOnly={true}
                dateFormat="dd.MM.yyyy"
            />
        </div>
    );
}

export default DaySelector