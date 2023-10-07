import { useState } from 'react'
import styles from './FilterBar.module.css'
import lenta_logo_blue from '../../vendor/images/lenta_logo_blue.svg'
import FilterBarCategory from '../FilterBarCategory/FilterBarCategory'

export type filterType = 'ТК' | 'Группа' | 'Категория' | 'Подкатегория' | 'Товар' | null

const FilterBar = () => {

  const [openedFilter, setOpenedFilter] = useState<filterType>('ТК')

  return (
    <section className={styles.section}>
      <img src={lenta_logo_blue} className={styles.logo} alt="Лента лого" />
      <ul className={styles.list}>
        <li><FilterBarCategory title='ТК' openedFilter={openedFilter} setOpenedFilter={setOpenedFilter} /></li>
        <li><FilterBarCategory title='Группа' openedFilter={openedFilter} setOpenedFilter={setOpenedFilter} /></li>
        <li><FilterBarCategory title='Категория' openedFilter={openedFilter} setOpenedFilter={setOpenedFilter} /></li>
        <li><FilterBarCategory title='Подкатегория' openedFilter={openedFilter} setOpenedFilter={setOpenedFilter} /></li>
        <li><FilterBarCategory title='Товар' openedFilter={openedFilter} setOpenedFilter={setOpenedFilter} /></li>
      </ul>
    </section>
  )
}

export default FilterBar