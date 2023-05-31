import styles from "./Activity.module.css"

const Activity = ({name, difficulty, duration, season}) => {

    return(
    <div className={styles.containerAct}>
        <div>
            <h2>Tourist activity</h2>
        </div>
        
        <div className={styles.activity}>
            <p className={styles.dataActivity}><p className={styles.activityP}>Activity name</p> {name}</p>
            <p className={styles.dataActivity}><p className={styles.activityP}>Difficulty</p> {difficulty}</p>
            <p className={styles.dataActivity}><p className={styles.activityP}>Duration</p> {duration}</p>
            <p className={styles.dataActivity}><p className={styles.activityP}>Season</p> {season}</p>
            
        </div>
    </div>
    )
}

export default Activity;