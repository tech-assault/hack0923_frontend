import { FC } from 'react'
import styles from './MainPage.module.css'
import FilterBar from '../../components/FilterBar/FilterBar'

const MainPage: FC = () => {
    return (
        <main className={styles.container}>
            <FilterBar />
        </main>
    )
}

export default MainPage