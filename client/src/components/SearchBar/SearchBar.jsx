import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountriesByName } from "../../redux/actions";
import iconSearch from "./assets/iconSearch.png"
import styles from "./SearchBar.module.css"


const SearchBar = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState("");

    const handlerChange = (event) => {
        setName(event.target.value);
        console.log(event.target.value);
    }
    
    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(getCountriesByName(name))
    }

    return(
            <div className={styles.searchBar}>
                <input type="text" placeholder="Search..." onChange={handlerChange}/>
                <button className={styles.button} type="submit" onClick={submitHandler}><img className={styles.icon} src={iconSearch} alt="" /></button>
            </div>
    )

}

export default SearchBar;