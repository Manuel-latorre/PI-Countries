import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByActivity, getActivities, getCountries } from '../../redux/actions';



const FilterByActivity = () => {

    const dispatch = useDispatch();
    const state = useSelector(state => state)

    useEffect(() => {
        dispatch(getActivities())
        dispatch(getCountries(state.allCountries))
    }, [dispatch])

    const handleActivity = (event) => {
        dispatch(filterByActivity(event.target.value))
    }


    return(
        <div>
            <div>

            <select name='activities' onChange={handleActivity}>
        <option>Activities</option>
            {state.activities?.map((e) => {
                return <option key={e.id} value={e.name}>{e.name}</option>
            })}
            </select>
            </div>

        </div>
    )
}

export default FilterByActivity;