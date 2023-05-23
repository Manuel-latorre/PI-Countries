import { useDispatch } from "react-redux";
import { orderByName, filterByContinent, orderByPopulation } from "../../redux/actions";
import styles from "./Filter.module.css"


const Filters = () => {

    const dispatch = useDispatch()

    const handlerFilterByContinent = (event) => {
        const continent = event.target.value;
        dispatch(filterByContinent(continent))
    }

    const handlerOrderByName = (event) => {
        const name = event.target.value
        dispatch(orderByName(name))
    }

    const handlerByPopulation = (event) => {
        const mayor = event.target.value;
        dispatch(orderByPopulation(mayor))
    }

    return(
        <div className={styles.filters}>

            <select className={styles.divsFilters} onChange={handlerOrderByName}>
                <option>Order</option>
                <option value="asc">A - Z</option>
                <option value="desc">Z - A</option>
            </select>

            <select className={styles.divsFilters}  onChange={handlerFilterByContinent}>
                <option value="All">All continents</option>
                <option value="Americas">America</option>
                <option value="Europe">Europa</option>
                <option value="Asia">Asia</option>
                <option value="Africa">Africa</option>
                <option value="Oceania">Oceania</option>
            </select>

            <select className={styles.divsFilters}  onChange={handlerByPopulation}>
                <option>Population</option>
                <option value="Mayor">Higher population</option>
                <option value="Menor">Lower population</option>
            </select>

        </div>
    )
}

export default Filters;