import { useState } from "react";
import { postActivity, getCountries, getActivities } from "../../redux/actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
const Form = () => {

    const dispatch = useDispatch();
    

    const [form, setForm] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries:""
    })

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleCheckSeasons = (event) => {
        if(event.target.checked) setForm({...form, season: event.target.value})
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(postActivity(form))
        alert("Actividad turistica creada exitosamente")
        setForm({
            name: "",
            difficulty: "",
            duration: "",
            season: "",
            countries: "",
        })

    }
    
    
    const [errors, setErrors] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: ""
    })
    
    useEffect(() => {
        dispatch(getCountries())
        dispatch(getActivities());
    }, [dispatch])

    
    
    console.log(form);
    return(
        <form onSubmit={handleSubmit}>
            <h1>Crea tu actividad turistica</h1>
            <div>
                <label>Name: </label>
                <input type="text" onChange={handleChange} value={form.name} name="name"/>
    
            </div>

            <div>
                <label>Difficulty: </label>
                <input type="text" onChange={handleChange} value={form.difficulty} name="difficulty"/>
            </div>

            <div>
                <label>Duration: </label >
                <input type="text" onChange={handleChange} value={form.duration} name="duration"/>
            </div>

            <div>
                <label>Country: </label >
                <input type="text" onChange={handleChange} value={form.countries} name="countries"/>
            </div>
            

            <div>
                <label>Season</label >
                <label><input type="checkbox" onChange={handleCheckSeasons} value= "summer" name="summer"/>Summer</label>
                <label><input type="checkbox" onChange={handleCheckSeasons} value= "fall" name="fall"/>Fall</label>
                <label><input type="checkbox" onChange={handleCheckSeasons} value= "winter" name="winter"/>Winter</label>
                <label><input type="checkbox" onChange={handleCheckSeasons} value= "spring" name="spring"/>Spring</label>
            </div>

            <button type="submit">Crear actividad</button>

        </form>
)
}


export default Form;