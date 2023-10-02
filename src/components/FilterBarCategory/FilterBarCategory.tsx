import { useState, FC } from 'react'
import styles from './FilterBarCategory.module.css'

type FilterBarCategoryProps = {
    title: string;
}

const FilterBarCategory: FC<FilterBarCategoryProps> = ({ title }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    //DELETE THIS STRING
    const TEST_DATA = ['ТК 1', 'ТК 2', 'ТК 3', 'ТК 4', 'ТК 5', 'ТК 6', 'ТК 7', 'ТК 8', 'ТК 9', 'ТК 10', 'ТК 11',]
    //DELETE THIS STRING  
    return (
        <div className={styles.container}>
            <button className={styles.button} onClick={toggleOpen}>{title}</button>
            {isOpen && (
                <>
                    <input type="text" placeholder='Поиск...' />
                    <ul className={styles.list}>
                        {TEST_DATA.map((el, index) => {
                            return (
                                <li className={styles.list_item} key={index}>
                                    <input className={styles.input_checkbox} type='checkbox' id={`checkbox-${index}`} />
                                    <label className={styles.input_label} htmlFor={`checkbox-${index}`}>{el}</label>
                                </li>
                            )
                        })}
                    </ul>
                </>
            )}
        </div>
    );
}

export default FilterBarCategory