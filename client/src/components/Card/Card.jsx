import styles from "./Card.module.css"
import{ Link } from "react-router-dom";

const Card = (props) => {
    return (
        <div key={props.id} className={styles.card}>
            <Link to={`/countries/${props.id}`}>
                <img className={styles.img} src={props.flag} />
            </Link>
                <h1>{props.name}</h1>
                <p>{props.continent}</p>
        </div>
    )
}

export default Card;