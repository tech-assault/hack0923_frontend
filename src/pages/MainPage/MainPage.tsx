import { FC } from 'react'
import styles from './MainPage.module.css'
import FilterBar from '../../components/FilterBar/FilterBar'
import Table from '../../components/Table/Table'
import GraphTypeSelector from '../../components/GraphTypeSelector/GraphTypeSelector'
import { Link } from 'react-router-dom'
import icon_logout from './../../vendor/images/icon_logout.svg'
import Graph from '../../components/Graph/Graph'

const MainPage: FC = () => {
    return (
        <main className={styles.container}>
            <FilterBar />
            <div className={styles.content}>
                <div className={styles.header}>
                    <GraphTypeSelector />
                    <Link className={styles.logout} to='./login'>
                        <img src={icon_logout} />
                    </Link>
                </div>
                <Table />
                <Graph></Graph>
            </div>
        </main>
    )
}

export default MainPage