import { GET_COUNTRIES, GET_COUNTRY, GET_COUNTRIES_BY_NAME, FILTER_BY_CONTINENT, FILTER_BY_ACTIVITY,
        ORDER_BY_NAME, POST_ACTIVITY, GET_ACTIVITIES, ORDER_BY_POPULATION, NEXT_PAGE, PREV_PAGE } from "./actions-types";
        
import axios from "axios";


export const getCountries = () => async (dispatch) => {
    try {
        let json = await axios.get("/countries");
        return dispatch({ type: GET_COUNTRIES, payload: json.data });
    } catch (error) {
        console.log(error);
    }
};


export const getCountriesByName = (name) => {
    return async function (dispatch){
        try {
            let json = await axios.get("/countries?name=" + name)
            return dispatch({type: GET_COUNTRIES_BY_NAME, payload: json.data})
        } catch (error) {
            console.log(error);
        }
    }
}


export const getCountry = (id) => {
    return async function (dispatch){
        const json = await axios.get(`/countries/${id}`);
        const country = json.data;
        dispatch({ type: GET_COUNTRY, payload: country})
    }
}

export const getActivities = () => {
    return async function (dispatch){
        let json = await axios.get("/activities");
        const activity = json.data
        return dispatch({type: GET_ACTIVITIES, payload: activity})
    }
}

export const postActivity = (payload) => {
    return async function(dispatch){
        let json = await axios.post("/activities", payload);
        const activity = json.data
        return dispatch({type: POST_ACTIVITY, payload: activity})
    }
};


export const filterByContinent = (payload) => {
    return {type: FILTER_BY_CONTINENT, payload}
}

export const filterByActivity = (payload) => {
    return {type: FILTER_BY_ACTIVITY, payload}
}

export const orderByName = (payload) => {
    return {type: ORDER_BY_NAME, payload}
}

export const orderByPopulation = (payload) => {
    return {type: ORDER_BY_POPULATION, payload}
}


export const nextPage = () => {
    return {
        type: NEXT_PAGE,
    }
}

export const prevPage = () => {
    return {
        type: PREV_PAGE,
    }
}



