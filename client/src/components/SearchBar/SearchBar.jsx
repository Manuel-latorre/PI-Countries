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
    }
    
    const submitHandler = (event) => {
        event.preventDefault();
        if(!name) return alert('Enter a country please')
        if(!/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(name)) return alert('Only letters are allowed')
        dispatch(getCountriesByName(name))
        setName('')
    }

    return(
            <div className={styles.searchBar}>
                <input type="text" value={name} placeholder="Search..." onChange={handlerChange}/>
                <button className={styles.button} type="submit" onClick={submitHandler}><img className={styles.icon} src={iconSearch} alt="" /></button>
            </div>
    )

}

export default SearchBar;