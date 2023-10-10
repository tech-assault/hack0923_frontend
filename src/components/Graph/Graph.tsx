import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import styles from './Graph.module.css'
import { useSelector } from '../../hooks/useSelector';

const Graph = () => {

    Chart.register(...registerables);//fix problem with charts.js

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

        for (let current = startDate; current <= endDate; current.setDate(current.getDate() + 1)) {
            dates.push(formatDate(current));
        }

        return dates;
    }
    const datesArray = generateFormattedDatesBetween(timeFrom, timeTo);

    //TEST DATA
    const data = {
        labels: datesArray,
        datasets: [
            {
                label: 'Dataset 1',
                data: [12, 19, 16, 3, 43, 24, 33, 18, 25, 13, 35, 4, 1, 15],
                backgroundColor: '#00BE64',
                borderColor: '#00BE64',
                borderWidth: 1,
                barPercentage: 0.5,
            },
        ],
    };
    //TEST DATA

    const selectedFilters = useSelector(store => store.MainPage.filters)

    useSelector

    const options = {

        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: `${selectedFilters.shops ? "ТК: " + selectedFilters.shops : ''}
                ${selectedFilters.group ? "Группа: " + selectedFilters.group : ''}
                ${selectedFilters.category ? "Категория: " + selectedFilters.category : ''}
                ${selectedFilters.subcategory ? "Подкатегория: " + selectedFilters.subcategory : ''}
                `,
                align: 'start' as const,
                font: {
                    size: 22,
                    weight: 'normal',
                },
                lineHeight: 1.27,
                color: '#2C2A29',
            },
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    return (
        <div className={styles.container}>
            <Bar options={options} data={data} />
        </div>
    )
}

export default Graph