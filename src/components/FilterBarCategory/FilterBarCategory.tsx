import { FC, useState, useEffect } from 'react'
import styles from './FilterBarCategory.module.css'
import icon_arrow_down from './../../vendor/images/icon_arrow_down.svg'
import icon_arrow_right from './../../vendor/images/icon_arrow_right.svg'
import { filterType } from '../FilterBar/FilterBar';
import { useGetProductsQuery, useGetShopsQuery } from '../../redux/slices/API';
import { setCategoryData, setGroupData, setShopsData, setSkuData, setSubcategoryData } from '../../redux/slices/MainPage';
import { useDispatch } from '../../hooks/useDispatch';
import { useSelector } from '../../hooks/useSelector';

type FilterBarCategoryProps = {
    title: filterType;
    openedFilter: filterType;
    setOpenedFilter: React.Dispatch<React.SetStateAction<filterType>>;
    typeOfFilter: 'sku' | 'group' | 'category' | 'subcategory' | 'shops';
}

const FilterBarCategory: FC<FilterBarCategoryProps> = ({ title, openedFilter, setOpenedFilter, typeOfFilter }) => {

    const selectedShop = useSelector(store => store.MainPage.filters)

    const { data, isLoading } = useGetProductsQuery({
        store: selectedShop.shops,
        group: selectedShop.group,
        category: selectedShop.category,
        subcategory: selectedShop.subcategory,
        sku: selectedShop.sku,
    })
    const shopsQuery = useGetShopsQuery()
    const shopsData = shopsQuery.data

    const dispatch = useDispatch()

    useEffect(() => {

        const filterList = data?.data.map(obj => obj[typeOfFilter]);
        const filteredfilterList = [...new Set(filterList)];
        if (typeOfFilter !== 'shops' && shopsQuery.isSuccess) {
            const originalData = Array.from(filteredfilterList);
            setFilteredData(originalData);
            setOriginalData(originalData); // Set original data
        }
        else {
            const shopNames: string[] = shopsData?.data?.map(shop => shop.store) || [];
            setFilteredData(shopNames);
            setOriginalData(shopNames);
        }
    }, [data, isLoading, shopsData, shopsQuery.isSuccess, typeOfFilter])


    const [searchValue, setSearchValue] = useState("");
    const [filteredData, setFilteredData] = useState<string[]>([]);
    const [selectedMall, setSelectedMall] = useState<string | null>(null);
    const [originalData, setOriginalData] = useState<string[]>([]);

    const handleCheckboxChange = (mall: string) => {
        setSelectedMall(mall);
        if (typeOfFilter === 'shops') {
            dispatch(setShopsData(mall))
            localStorage.setItem('shops', mall)
        }
        else if (typeOfFilter === 'group') dispatch(setGroupData(mall))
        else if (typeOfFilter === 'category') dispatch(setCategoryData(mall))
        else if (typeOfFilter === 'subcategory') dispatch(setSubcategoryData(mall))
        else if (typeOfFilter === 'sku') dispatch(setSkuData(mall))
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

    const selectShopRedux = useSelector(store => store.MainPage.filters.shops)

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
                                        <input className={styles.input_checkbox} type='checkbox' id={`checkbox-${index}`} checked={selectedMall === el || selectShopRedux === el}
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