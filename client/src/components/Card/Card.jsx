import styles from "./Card.module.css"
import{ Link } from "react-router-dom";

const Card = ({id, name, flag, continent}) => {
    return (
        <div key={id} className={styles.card}>
            <Link to={`/countries/${id}`}>
                <img className={styles.img} src={flag} />
            </Link>
                <h1>{name}</h1>
                <p>{continent}</p>
        </div>
    )
}

export default Card;