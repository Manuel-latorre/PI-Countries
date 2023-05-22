import mundito from "./assets/munditoGif.gif";
import styles from "./Loading.module.css"

const Loading = ({setLoading}) => {


    return(
        <div className={styles.loading}>
            
                <img className={styles.munditoGif} src={mundito}/>
            
            <div>
                {setTimeout(() => {
                    setLoading(false);
                }, 1000)

                }
            </div>
        </div>
    )
}
export default Loading;