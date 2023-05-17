import { useState } from "react";
import { postActivity, getCountries, getActivities } from "../../redux/actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import validation from "./validation"
import styles from "./Form.module.css"



const Form = () => {

    const dispatch = useDispatch();
    
    const [errors, setErrors] = useState({})

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
        setErrors(validation({
            ...form, 
            [event.target.name]: event.target.value
        }))
    }


    const handleCheckSeasons = (event) => {
        if(event.target.checked) 
        setForm({
            ...form, 
            season: event.target.value})
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        if(form.name === '' || form.duration === '' || form.difficulty === '' || form.season === '' || form.countries === '' || form.season === '') return alert('Incomplete fields, please complete all fields')
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
    
    
    
    useEffect(() => {
        dispatch(getCountries())
        dispatch(getActivities());
    }, [dispatch])

    
    
    console.log(form);
    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            
            <h1>Crea tu actividad turistica</h1>

            <div className={styles.inputsContainer}>
                <div>
                    <label>Name: </label>
                </div>
                <input className={styles.inputs} type="text" onChange={handleChange} value={form.name} name="name" placeholder="Activity name"/>
                {errors.name && <p>{errors.name}</p>}
            </div>

            <div className={styles.inputsContainer}>
                <div>
                    <label>Difficulty: </label>
                </div>
                <input className={styles.inputs} type="text" onChange={handleChange} value={form.difficulty} name="difficulty" placeholder="From 1 to 5"/>
                {errors.difficulty && <p>{errors.difficulty}</p>}
            </div>

            <div className={styles.inputsContainer}>
                <div>
                    <label>Duration: </label>
                </div>
                <input className={styles.inputs} type="text" onChange={handleChange} value={form.duration} name="duration" placeholder="Enter the duration in hours (1hs)"/>
                {errors.duration && <p>{errors.duration}</p>}
            </div>

            <div className={styles.inputsContainer}>
                <div>
                    <label>Country: </label>
                </div>
                <input className={styles.inputs} type="text" onChange={handleChange} value={form.countries} name="countries" placeholder="Enter the country"/>
                {errors.countries && <p>{errors.countries}</p>}
            </div>
            

            <div className={styles.checkDiv}>
                <div>
                    <label>Seasons</label >
                </div>
                <label><input className={styles.checkbox} type="checkbox" onChange={handleCheckSeasons} value= "summer" name="summer"/>Summer</label>
                <label><input className={styles.checkbox} type="checkbox" onChange={handleCheckSeasons} value= "fall" name="fall"/>Fall</label>
                <label><input className={styles.checkbox} type="checkbox" onChange={handleCheckSeasons} value= "winter" name="winter"/>Winter</label>
                <label><input className={styles.checkbox} type="checkbox" onChange={handleCheckSeasons} value= "spring" name="spring"/>Spring</label>
            </div>

            <button className={styles.button} disabled={ errors.name || 
                errors.difficulty || 
                errors.duration || 
                errors.countries ||
            !form.season} 
            type="submit">Crear actividad</button>

        </form>
)
}


export default Form;