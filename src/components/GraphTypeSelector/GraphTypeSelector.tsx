import React, { useState } from 'react'
import styles from './GraphTypeSelector.module.css'

const GraphTypeSelector = () => {

    const [selectedButton, setSelectedButton] = useState(0)

    function handleClick(number: number) {
        setSelectedButton(number)
    }

    return (
        <ul className={styles.list}>
            <li>
                <button className={`${styles.button} ${selectedButton === 0 && styles.button_selected}`} onClick={() => handleClick(0)}>Прогноз спроса</button>
            </li>
            <li>
                <button className={`${styles.button} ${selectedButton === 1 && styles.button_selected}`} onClick={() => handleClick(1)}>Качество прогноза</button>
            </li>
        </ul>
    )
}

export default GraphTypeSelector