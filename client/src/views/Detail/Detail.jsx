import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getCountry } from "../../redux/actions";
import Activity from "./Activity/Activity";

const Detail = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const country = useSelector(state => state.country)
    

    useEffect(() => {
        dispatch(getCountry(id))
    }, [dispatch, id])

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
            {
                country.Activities?.map((act) => {
                    return(
                        <Activity 
                        key={act.id}
                        name={act.name}
                        difficulty={act.difficulty}
                        duration={act.duration}
                        season={act.season}
                        />
                        )
                })
            }
        </div>

    )
}


export default Detail;