import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import styles from './Grapg.module.css'

const Graph = () => {

    //TEST DATA
    const labels = ['2023-10-01', '2023-10-02', '2023-10-03'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: [12, 19, 3],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                label: 'Dataset 2',
                data: [5, 9, 5],
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                borderColor: 'rgba(53, 162, 235, 1)',
                borderWidth: 1
            },
        ],
    };
    //TEST DATA

    Chart.register(...registerables);//fix problem with charts.js

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Chart.js Bar Chart',
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