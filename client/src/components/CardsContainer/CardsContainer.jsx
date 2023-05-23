import Card from "../Card/Card"
import Paginate from "../Paginate/Paginate"
import styles from "./CardsContainer.module.css"
import { useSelector } from "react-redux"


const CardsContainer = () => {
    const countries = useSelector(state => state.countries)
    const {numPage} = useSelector((state) => state)

    let desde = (numPage -1) * 10;
    let hasta = numPage * 10;

    let cantPages = countries.length / 10;

    let viewCountries = countries?.slice(desde, hasta)    


    return (
        <div >
            <div className={styles.cardsContainer}>
                    {viewCountries.map(country => {
                        return <Card 
                        key={country.id}
                        id={country.id}
                        name={country.name}
                        flag={country.flag}
                        continent={country.continent}
                        />
                    })
                }
                </div>
                <Paginate cantPages={cantPages}/>
                </div>
                )
            }
            
export default CardsContainer;