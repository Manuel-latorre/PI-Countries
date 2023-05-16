import { NavLink } from "react-router-dom";
import styles from './Landing.module.css'

const Landing = () => {
    return(
        <div className={styles.landing}>
            <h1>Esta es la view de LANDING</h1>
            <NavLink to="/home">Home</NavLink>

        </div>

    )
}


export default Landing;