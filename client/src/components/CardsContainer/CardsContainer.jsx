import Card from "../Card/Card"
import { useSelector } from "react-redux"

const CardsContainer = () => {
    const countries = useSelector(state => state.countries)

    console.log(countries);

    return(
        <div>
            <p>{countries.map(country => {
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
                
            })}</p>
        </div>
    )
}

export default CardsContainer;