import styles from './GraphTypeSelector.module.css'
import { GraphType, selectGraphType } from '../../redux/slices/MainPage'
import { useSelector } from '../../hooks/useSelector'
import { useDispatch } from '../../hooks/useDispatch'

const GraphTypeSelector = () => {

    const state = useSelector((store) => store.MainPage.graphType)

    const dispatch = useDispatch()

    function handleClick(type: GraphType) {
        dispatch(selectGraphType(type))
    }

    return (
        <ul className={styles.list}>
            <li>
                <button className={`${styles.button} ${state === 'demand' && styles.button_selected}`} onClick={() => handleClick('demand')}>Прогноз спроса</button>
            </li>
            <li>
                <button className={`${styles.button} ${state === 'quality' && styles.button_selected}`} onClick={() => handleClick('quality')}>Качество прогноза</button>
            </li>
        </ul>
    )
}

export default GraphTypeSelector