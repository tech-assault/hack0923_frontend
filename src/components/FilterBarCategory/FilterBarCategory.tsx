import { FC, useState, useEffect, useMemo } from 'react'
import styles from './FilterBarCategory.module.css'
import icon_arrow_down from './../../vendor/images/icon_arrow_down.svg'
import icon_arrow_right from './../../vendor/images/icon_arrow_right.svg'
import { filterType } from '../FilterBar/FilterBar';
import { useGetProductsQuery } from '../../redux/slices/API';

type FilterBarCategoryProps = {
    title: filterType;
    openedFilter: filterType;
    setOpenedFilter: React.Dispatch<React.SetStateAction<filterType>>;
    typeOfFilter: 'sku' | 'group' | 'category' | 'subcategory' | 'uom';
}

const FilterBarCategory: FC<FilterBarCategoryProps> = ({ title, openedFilter, setOpenedFilter, typeOfFilter }) => {

    const { data, isLoading } = useGetProductsQuery()

    useEffect(() => {
        const filterList = data?.data.map(obj => obj[typeOfFilter]);
        const filteredfilterList = [...new Set(filterList)];
        const originalData = Array.from(filteredfilterList);
        setFilteredData(originalData);
        setOriginalData(originalData); // Set original data
    }, [data, isLoading, typeOfFilter])


    const [searchValue, setSearchValue] = useState("");
    const [filteredData, setFilteredData] = useState<string[]>([]);
    const [selectedMall, setSelectedMall] = useState<string | null>(null);
    const [originalData, setOriginalData] = useState<string[]>([]);

    const handleCheckboxChange = (mall: string) => {
        setSelectedMall(mall);
    }

    function handleClick() {
        if (openedFilter !== title) setOpenedFilter(title)
        else setOpenedFilter(null)
    }

    useEffect(() => {//search
        if (searchValue !== '') {//Show filtered list or initial data if string=''
            const newFilteredData = originalData.filter(el => el.toString().toLowerCase().includes(searchValue.toLowerCase())); // Use originalData instead of filteredData
            setFilteredData(newFilteredData);
        } else {
            setFilteredData(originalData); // Reset to original data
        }
    }, [searchValue, originalData]); // Add originalData to dependency array

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
                                            onChange={() => handleCheckboxChange(el)} />
                                        <p className={styles.input_label_text}>{el}</p>
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