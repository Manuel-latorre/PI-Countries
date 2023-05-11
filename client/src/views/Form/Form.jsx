import { useState } from "react";
import axios from "axios";

const Form = () => {

    const [form, setForm] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: ""
    })

    const [errors, setErrors] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: ""
    })

    const formHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setForm({...form, [property]:value})
        //validate({...form, [property]:value})
    }

    //const validate = (form) => {
        //if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(form.email)) setErrors({...errors, email:""})

       // else setErrors({...errors, email:"Email invalido"})
        
        //if(form.email === "") setErrors({...errors, email:""})
    //}

    const submitHandler = (event) => {
        event.preventDefault();
        axios.post("http://localhost:3001/activities", form)
        .then(res => alert(res))
        .catch(err => alert(err))
        
    }


    return(
        <form onSubmit={submitHandler}>
            <div>
                <label>Name: </label>
                <input type="text" value={form.name} onChange={formHandler} name="name"/>
    
            </div>

            <div>
                <label>Difficulty: </label>
                <input type="text" value={form.difficulty} onChange={formHandler} name="difficulty"/>
            </div>

            <div>
                <label>Duration: </label >
                <input type="text" value={form.duration} onChange={formHandler} name="duration"/>
            </div>

            <div>
                <label>Season: </label >
                <input type="text" value={form.season} onChange={formHandler} name="season"/>
            </div>

            <div>
                <label>Countries: </label >
                <input type="text" value={form.countries} onChange={formHandler} name="countries"/>
            </div>

            <button type="submit">Submit</button>

        </form>

    )
}


export default Form;