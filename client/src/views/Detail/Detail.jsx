import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getCountry } from "../../redux/actions";
import Activity from "./Activity/Activity";
import styles from "./Detail.module.css"

const Detail = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const country = useSelector(state => state.country)
    

    useEffect(() => {
        dispatch(getCountry(id))
    }, [dispatch, id])

    return(
    <div>
        <div>
            <h2>{id}</h2>
            <p className={styles.nameCountry}>{country.name}</p>
        </div>

        <div className={styles.detail}>
            <div className={styles.detailCountry}>
            <img className={styles.flag} src={country.flag}/>
            <p className={styles.dataCountry}>Capital: {country.capital}</p>
            <p className={styles.dataCountry}>Continent: {country.continent}</p>
            <p className={styles.dataCountry}>Subregion: {country.subregion}</p>
            <p className={styles.dataCountry}>Area: {country.area}</p>
            <p className={styles.dataCountry}>Population: {country.population}</p>
            </div>
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
    </div>

    )
}


export default Detail;