import { FC } from 'react'
import styles from './MainPage.module.css'
import FilterBar from '../../components/FilterBar/FilterBar'

const MainPage: FC = () => {
    return (
        <main className={styles.container}>
            <FilterBar />
            <div className={styles.content}>
                
            </div>
        </main>
    )
}

export default MainPage