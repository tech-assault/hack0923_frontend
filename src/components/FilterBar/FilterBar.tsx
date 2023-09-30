import React from 'react'
import styles from './FilterBar.module.css'
import lenta_logo from '../../vendor/images/lenta_logo.svg'

const FilterBar = () => {
  return (
    <section className={styles.section}>
        <img src={lenta_logo} className={styles.logo} alt="Лента лого" />
    </section>
  )
}

export default FilterBar