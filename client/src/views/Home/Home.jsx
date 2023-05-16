import CardsContainer from "../../components/CardsContainer/CardsContainer";
import SearchBar from "../../components/SearchBar/SearchBar";
import Filters from "../../components/Filters/Filters";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux/actions"

import styles from "./Home.module.css"


const Home = () => {

    const dispatch = useDispatch();

    const countries = useSelector(state => state.countries)

    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch])


    return(
        <div className={styles.home}>
            <h1>Esta es la view de HOME</h1>
            <Filters/>
            <SearchBar/>
            <CardsContainer countries={countries} />
        </div>

    )
}


export default Home;