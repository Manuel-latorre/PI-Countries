import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountries } from "../../redux/actions"
import { useSelector } from "react-redux";


const Home = () => {

    const dispatch = useDispatch();

    const countries = useSelector(state => state.countries)


    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch])


    return(
        <div>
            <h1>Esta es la view de HOME</h1>
            <CardsContainer countries={countries} />
        </div>

    )
}


export default Home;