import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Footer = () => {

    const [scrollButton, setScrollButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                setScrollButton(true);
            }else{
                setScrollButton(false);
            }
        })
    },[])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }


    return(
        //<div>
        //    {scrollButton && (<button></button>)}
        //</div>
        <div className={styles.footer}>

                <div className={styles.buttons}>
            {
                scrollButton && (<NavLink onClick={scrollUp} className={styles.buttons}  to='/home'> Home </NavLink>)

            }
            {
                scrollButton && (<NavLink onClick={scrollUp} className={styles.buttons} to='/activities'> Activities </NavLink>)
            }
            {
                scrollButton && (<NavLink onClick={scrollUp} className={styles.buttons} to='/create'> Create Activity </NavLink>)
            }

            </div>
        </div>
    )
}

export default Footer;