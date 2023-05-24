import { GET_COUNTRIES, GET_COUNTRY, GET_COUNTRIES_BY_NAME, FILTER_BY_CONTINENT,
        ORDER_BY_NAME, POST_ACTIVITY, GET_ACTIVITIES, ORDER_BY_POPULATION, NEXT_PAGE, PREV_PAGE, FILTER_BY_ACTIVITY} from "./actions-types";

const initialState = {
    countries: [],
    allCountries:[],
    country: [],
    activities: [],
    numPage: 1,
}


const rootReducer = (state = initialState, action) => {
    switch(action.type){

        case GET_COUNTRIES: 
        return {...state, 
            countries: action.payload,
            allCountries: action.payload,
            filteredCountries: []
        }

        case GET_COUNTRY:
            return {...state, country: action.payload}

        case GET_COUNTRIES_BY_NAME: 
            return {...state, countries: action.payload}

        case GET_ACTIVITIES:
            return {...state, activities: action.payload}

        case POST_ACTIVITY:
            return {...state}

        case FILTER_BY_CONTINENT:
            const allCountries = state.allCountries;
            const filterContinent = action.payload === 'All' ? allCountries : allCountries.filter(element => element.continent === action.payload)
            
            return {
                ...state, 
                countries: filterContinent,
                numPage: 1
            }
        
            
            case ORDER_BY_NAME: 
            let sort = action.payload === 'asc' ? 
            state.countries.sort(function (a, b){
                if(a.name > b.name) return 1;
            if(b.name > a.name) return -1;
            return 0;
        }) :
        state.countries.sort(function (a, b){
            if(a.name > b.name) return -1;
            if(b.name > a.name) return 1;
            return 0;
        })
        return{
            ...state,
            countries: sort,
            numPage: 1
        }

        case ORDER_BY_POPULATION: 
        const population = action.payload === 'Mayor' ?
        state.countries.sort(function(a, b){
            return b.population - a.population;  
        }) : 
        state.countries.sort(function(a, b){
            return a.population - b.population;
        })
        return{
            ...state,
            countries: population,
            numPage: 1
        }

        case NEXT_PAGE:
            return {...state, 
            numPage: state.numPage + 1
        }

        case PREV_PAGE:
            return {...state, 
            numPage: state.numPage - 1
        }
    
        case FILTER_BY_ACTIVITY:
        const allCount = state.allCountries
        const allAct = []
        const countryActivity = []
        const activity = action.payload
        const lastArray = []
        const activities = state.activities
        
        activities.map((act) => {      //hago un map de mi estado activities, si el nombre coincide con el payload,
            if(act.name === activity){ // lo agrego a mi array allAct con el pais asociado a esa actividad
                allAct.push(act.Countries)
            }
        })
        allAct.map((element) => {                  // luego mapeo mi array donde se encuentra el pais con la actividad
            countryActivity.push(element[0].name); // y agrego el nombre a un array countryActvity
        })
        for(let name of countryActivity){  // hago la comparacion,
            allCount.map((element) => {    // si nombre coincide con el nombre del pais, lo agrego al array que hace el filtrado 
                if(name === element.name)
                    lastArray.push(element)
                }
            )
        }
        return{
            ...state,
                countries: lastArray,
                numPage: 1
            }

        default:
            return { ...state};
        }
    }


    
export default rootReducer;