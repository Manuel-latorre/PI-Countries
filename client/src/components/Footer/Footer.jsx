import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return(
        <div className={styles.footer}>
            <div className={styles.buttons}>
                <NavLink className={styles.buttons}  to='/home'> Home </NavLink>

                <NavLink className={styles.buttons} to='/activities'> Activities </NavLink>

                <NavLink className={styles.buttons} to='/create'> Create Activity </NavLink>
            </div>
        </div>
    )
}

export default Footer;