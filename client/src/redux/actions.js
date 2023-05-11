import { GET_COUNTRIES, GET_COUNTRY } from "./actions-types";
import axios from "axios";



export const getCountries = () => async (dispatch) => {
    try {
        let json = await axios.get("http://localhost:3001/countries");
        return dispatch({ type: GET_COUNTRIES, payload: json.data });
    } catch (error) {
        console.log(error.message);
    }
};


export const getCountry = (id) => {
    return async function (dispatch){
        const apiData = await axios.get(`http://localhost:3001/countries/${id}`);
        const country = apiData.data;
        dispatch({ type: GET_COUNTRY, payload: country})
    }
}

