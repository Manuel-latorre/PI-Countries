import { NavLink } from "react-router-dom";
import styles from './Landing.module.css'

const Landing = () => {
    return(
        <div className={styles.landing}>
            <div className={styles.container}>
                <h1 className={styles.welcome}>Welcome to MyCountry <br></br> ready to meet countries and their tourist activities?</h1>
                <NavLink className={styles.button} to="/home">Get Into !!!</NavLink>
            </div>
        </div>

    )
}


export default Landing;