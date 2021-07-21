import { types } from '../types/types';

const initialState = {
    countries: [],
    coName: { },
    allCountries: [],
    countriesFilter: [],
    option: "",
    showCountries: [],
}

export const countriesReducer = ( state = initialState, action ) => {


    switch ( action.type ) {

        case types.getCountries:
            return {
                ...state,
                countries:action.payload,
            }

        case types.getCountriesAll:
            return {
                ...state,
                allCountries:action.payload,
                showCountries:action.payload
            }

        case types.getCountriesId:
            return {
                ...state,
                country: action.payload,
            }
        case types.orderCountries:
            let array = {...state.allCountries};
            console.log(array)
            if(action.payload === 'Orden alfabético'){
                state.showCountries.data.sort(function (a, b) {
                    if (a.name > b.name) return 1;
                    if (a.name < b.name) return -1;
                    return 0;
                });
                console.log(array);
                console.log(array.data);
                return {
                    ...state,
                    option: action.payload,
                    showCountries: array.data.slice(0,10),
                }
            }else {
                array.data.sort(function (a, b) {
                    return  a.population -b.population;
                });
                array.data.slice(0,10);
                return {
                    ...state,
                    option: action.payload,
                    showCountries: array.data.slice(0,10),
                }
            }

        case types.findCountry:
            let findArray = {...state.allCountries}
            return {
                ...state,
                coName: findArray.data.find(e=> e.name === action.payload)
            }

        case types.filterCountries:

        //    let arrFilter = state.allCountries.data.filter(item => item.continent === action.payload)
            return {
                ...state,
                countriesFilter: state.allCountries.data.filter(item => item.continent === action.payload)
            }

        default:
            return state;
    }

}