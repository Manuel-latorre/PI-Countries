import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getCountry } from "../../redux/actions";

const Detail = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const country = useSelector(state => state.country)

    useEffect(() => {
        dispatch(getCountry(id))
    }, [])

    return(
        <div>
            <h1>Esta es la view de DETAIL {id}</h1>
            <p>{country.name}</p>
            <img src={country.flag}/>
            <p>Capital: {country.capital}</p>
            <p>Continente: {country.continent}</p>
            <p>Subregion: {country.subregion}</p>
            <p>Area: {country.area}</p>
            <p>Poblacion: {country.population}</p>

        </div>

    )
}


export default Detail;