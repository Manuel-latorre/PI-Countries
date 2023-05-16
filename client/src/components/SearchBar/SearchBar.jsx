import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountriesByName } from "../../redux/actions";

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
        <div>
            <input type="text" placeholder="Buscar..." onChange={handlerChange}/>
            <button type="submit" onClick={submitHandler}>Buscar</button>
        </div>

    )

}

export default SearchBar;