import CardsContainer from "../../components/CardsContainer/CardsContainer";
import SearchBar from "../../components/SearchBar/SearchBar";
import Filters from "../../components/Filters/Filters";
import Loading from "../../components/Loading/Loading";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux/actions"


import styles from "./Home.module.css"



const Home = () => {

    const dispatch = useDispatch();

    const countries = useSelector(state => state.countries)

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch])


    return(
        <>
            {
                loading === true? <Loading setLoading={setLoading}/>:
                
                <div className={styles.home}>
                    <SearchBar/>
                    <Filters/>
                    <CardsContainer countries={countries}/>
                </div>
            }
        </>
        )
    }  

export default Home;