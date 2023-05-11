import { GET_COUNTRIES, GET_COUNTRY } from "./actions-types";
import axios from "axios";



export const getCountries = () => {
    return async function(dispatch){
        const apiData =  await axios.get("http://localhost:3001/countries")
        const countries = apiData.data;
        return dispatch({ type: GET_COUNTRIES, payload: countries})
    }
}

//export const getCountry = (id) => {
//    return async function (dispatch){
//        const apiData = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
//        const country = apiData.data;
//        dispatch({ type: GET_COUNTRY, payload: country})
//    }
//}

