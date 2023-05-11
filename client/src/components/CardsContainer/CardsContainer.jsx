import Card from "../Card/Card"
import styles from "./CardsContainer.module.css"
import { useSelector } from "react-redux"

const CardsContainer = () => {
    const countries = useSelector(state => state.countries)


    return(
        <div >
            <div className={styles.cardsContainer}>
                {countries.map(country => {
                    return <Card 
                        key={country.id}
                        id={country.id}
                        name={country.name}
                        flag={country.flag}
                        continent={country.continent}
                        capital={country.capital}
                        subregion={country.subregion}
                        area={country.area}
                        population={country.population}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default CardsContainer;