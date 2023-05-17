import { NavLink } from "react-router-dom";
import styles from './Landing.module.css'

const Landing = () => {
    return(
        <div className={styles.landing}>

            <NavLink className={styles.button} to="/home">Get Into</NavLink>

        </div>

    )
}


export default Landing;