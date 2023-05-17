const validation = (form) => {
    const errors = {}

    //* validation name

        if(!form.name){
            errors.name = "Empty activity name"
        }
        if(!/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(form.name)){
            errors.name  = "Only letters and spaces are allowed";
        }
        else{
            errors.name  = "";
        }
        
    //* validation difficulty

        if(!form.difficulty){
            errors.difficulty =  "Empty difficulty level";
        }
        if(!/^([1-5])$/.test(form.difficulty)){
            errors.difficulty = "Only numbers from 1 to 5 are allowed";
        }
        else{
            errors.difficulty = "";
        }

    //* validation duration 

    if(!/^([0-9]|1[0-9]|2[0-3])+hs$/.test(form.duration)){
        errors.duration = "Invalid duration, Example: 2hs";
    }
    else{
        errors.duration = "";
    }

    //* validation countries

    
    if(!/^[ A-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(form.countries)){
        errors.countries  = "Only letters and spaces are allowed";
    }

    if(!/^[^A-Z]*[A-Z][^A-Z]*$/.test(form.countries)){
        errors.countries = "Invalid country, the first letter must be uppercase Example: Argentina, Brazil";
    }

    else{
        errors.countries  = "";
    }

    

    return errors;
}

export default validation;