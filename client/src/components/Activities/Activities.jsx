import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getActivities} from "../../redux/actions";
import ActivityContainer from "./ActivityContainer/ActivityContainer";
import styles from "./Activities.module.css"

const Activities = () => {

    const dispatch = useDispatch();
    const activities = useSelector(state => state.activities)
    

    useEffect(() => {
        dispatch(getActivities())
    }, [dispatch])


    return (
        <div className={styles.actContainer}>
            <div className={styles.divTitle}>
                <p className={styles.titleAct}>Activities</p>
            </div>

            <div className={styles.divActivities}>
                {
                    activities.map((act) => {
                        return(
                            <ActivityContainer
                            key={act.id}
                            name={act.name}
                            difficulty={act.difficulty}
                            duration={act.duration}
                            season={act.season}
                            />

                            )
                        })
                }
            </div>
        </div>
    )
}

export default Activities;