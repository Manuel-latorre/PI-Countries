import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getActivities } from "../../redux/actions";
import Activity from "./Activities/Activity";
import styles from "./ActivitiesContainer.module.css"

const Activities = () => {

    const dispatch = useDispatch();
    const allActivities = useSelector(state => state.activities)


    useEffect(() => {
        dispatch(getActivities())
    }, [dispatch])


    return (

        <div>
            <div className={styles.actContainer}>
                <div className={styles.divTitle}>
                    <p className={styles.titleAct}>Activities</p>
                </div>

                <div className={styles.divActivities}>
                    {
                        allActivities.map((act) => {
                            return(
                                <Activity
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
        </div>
    )
}

export default Activities;