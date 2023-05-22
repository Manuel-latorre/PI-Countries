import styles from './ActivityContainer.module.css';

const ActivityContainer = ({name, difficulty, duration, season}) => {
    return(
        

            <div className={styles.activity}>
                <p className={styles.dataActivity}><p className={styles.activityP}>Activity name</p> {name}</p>
                <p className={styles.dataActivity}><p className={styles.activityP}>Difficulty</p> {difficulty}</p>
                <p className={styles.dataActivity}><p className={styles.activityP}>Duration</p> {duration}</p>
                <p className={styles.dataActivity}><p className={styles.activityP}>Season</p> {season}</p>
            </div>
    )
}

export default ActivityContainer;