import { useDispatch, useSelector } from "react-redux";
import { nextPage, prevPage } from "../../redux/actions";
import derecha from "../assets/images/derecha.png"
import izquierda from "../assets/images/izquierda.png"
import styles from "./Paginate.module.css"

const Paginate = ({cantPages}) => {
    const { numPage } = useSelector((state) => state)
    const dispatch = useDispatch()
    const next = () => {
        dispatch(nextPage())
    }

    const prev = () => {
        dispatch(prevPage())
    }


    return(
        <div className={styles.paginate}>
        
            {
                numPage > 1 ? (
                    <div className={styles.numbersPage}>
                        <img className={styles.btnPages} src={izquierda} onClick={prev}/>
                        <p>{numPage -1}</p>
                    </div>
                ) : null
            }

            <h2 className={styles.pagActive}>{numPage}</h2>
            
            {
                numPage < cantPages ? (
                    <div className={styles.numbersPage}>
                        <p>{numPage +1}</p>
                    <img className={styles.btnPages} src={derecha} onClick={next}/>             
                    </div>

                ) : null
            }
            
        </div>
    )
}

export default Paginate;