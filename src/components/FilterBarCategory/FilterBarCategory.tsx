import { FC, useState, useEffect } from 'react'
import styles from './FilterBarCategory.module.css'
import icon_arrow_down from './../../vendor/images/icon_arrow_down.svg'
import icon_arrow_right from './../../vendor/images/icon_arrow_right.svg'
import { filterType } from '../FilterBar/FilterBar';

type FilterBarCategoryProps = {
    title: filterType;
    openedFilter: filterType;
    setOpenedFilter: React.Dispatch<React.SetStateAction<filterType>>;
}

const FilterBarCategory: FC<FilterBarCategoryProps> = ({ title, openedFilter, setOpenedFilter }) => {

    //DELETE THIS STRING
    const TEST_DATA = ['ТК 1', 'ТК 2', 'ТК 3', 'ТК 4', 'ТК 5', 'ТК 6', 'ТК 7', 'ТК 8', 'ТК 9', 'ТК 10', 'ТК 11',]
    //DELETE THIS STRING  

    const [searchValue, setSearchValue] = useState("");
    const [filteredData, setFilteredData] = useState(TEST_DATA);

    function handleClick() {
        if (openedFilter !== title) setOpenedFilter(title)
        else setOpenedFilter(null)
    }

    useEffect(() => {//search
        if (searchValue !== '') {//Show filtered list or initial data if string=''
            const newFilteredData = TEST_DATA.filter(el => el.toLowerCase().includes(searchValue.toLowerCase()));
            setFilteredData(newFilteredData);
        } else {
            setFilteredData(TEST_DATA);
        }
    }, [searchValue]);

    return (
        <div className={styles.container}>
            <button className={styles.button} onClick={handleClick}>
                {title}
                {openedFilter === title ? (//arrow icon direction
                    <img src={icon_arrow_down} />
                ) : (
                    <img src={icon_arrow_right} />
                )}
            </button>
            {openedFilter === title && (
                <>
                    <input className={styles.search} type="text" placeholder='Поиск...' onChange={e => setSearchValue(e.target.value)} />
                    <ul className={styles.list}>
                        {filteredData.map((el, index) => {
                            return (
                                <li className={styles.list_item} key={index}>
                                    <label className={styles.input_label} htmlFor={`checkbox-${index}`}>
                                        <input className={styles.input_checkbox} type='checkbox' id={`checkbox-${index}`} />
                                        {el}
                                    </label>
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