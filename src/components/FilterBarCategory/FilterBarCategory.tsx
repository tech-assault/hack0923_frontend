import { FC, useState, useEffect, useMemo } from 'react'
import styles from './FilterBarCategory.module.css'
import icon_arrow_down from './../../vendor/images/icon_arrow_down.svg'
import icon_arrow_right from './../../vendor/images/icon_arrow_right.svg'
import { filterType } from '../FilterBar/FilterBar';
import { useGetShopsQuery } from "../../redux/slices/API";

type FilterBarCategoryProps = {
    title: filterType;
    openedFilter: filterType;
    setOpenedFilter: React.Dispatch<React.SetStateAction<filterType>>;
}

const FilterBarCategory: FC<FilterBarCategoryProps> = ({ title, openedFilter, setOpenedFilter }) => {

    const { data, isSuccess } = useGetShopsQuery()

     const storeIds = useMemo(() => {
    if (isSuccess && data.data) {
            return data.data.map(shop => shop.store);
    } else {
        return [];
    }
}, [isSuccess, data]);

    const [searchValue, setSearchValue] = useState("");
    const [filteredData, setFilteredData] = useState(storeIds);
    const [selectedMall, setSelectedMall] = useState("");

    const handleCheckboxChange = (mall:string) => {
        setSelectedMall(mall);
    }

    function handleClick() {
        if (openedFilter !== title) setOpenedFilter(title)
        else setOpenedFilter(null)
    }



    useEffect(() => {//search
        if (searchValue !== '') {//Show filtered list or initial data if string=''
            const newFilteredData = storeIds.filter(el => el.toLowerCase().includes(searchValue.toLowerCase()));
            setFilteredData(newFilteredData);
        } else {
            setFilteredData(storeIds);
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
                                        <input className={styles.input_checkbox} type='checkbox' id={`checkbox-${index}`} checked={selectedMall === el} 
                                            onChange={() => handleCheckboxChange(el)}/>
                                        <input className={styles.input_checkbox} type='checkbox' id={`checkbox-${index}`} checked={selectedMall === el} 
                                            onChange={() => handleCheckboxChange(el)}/>
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