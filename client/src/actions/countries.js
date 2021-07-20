import {fetchConToken} from '../helpers/fetch';
import {types} from '../types/types';
import {useDispatch} from "react-redux";


export const getCountries = () => {
    return async (dispatch) => {

        const resp = await fetchConToken('countries');
        const data = await resp.json();
        try {
            dispatch({type: types.getCountries, payload: data})
        } catch (e) {
            console.log(data.msg)
        }
    }
}

export const getAllCountries = () => {
    return async (dispatch) => {

        const resp = await fetchConToken('countries/all');
        const countriesAll = await resp.json();
        try {
            dispatch({type: types.getCountriesAll, payload: countriesAll})
        } catch (e) {
            console.log(countriesAll.msg)
        }
    }
}


export const countryDetail = (id) => {

    return async (dispatch) => {

        const resp = await fetchConToken('countries/${id}');
        const country = await resp.json();
        try {
            dispatch({type: types.getCountriesId, payload: country})
        } catch (e) {
            console.log(country.msg)
        }
    }
}


export const findCountry= (country) => {
    return function (dispatch) {
        dispatch({type: types.findCountry, payload: country});
    }
}

export const filterCountries = (filter) => {
    console.log(filter)
    return function (dispatch) {
        dispatch({type: types.filterCountries, payload: filter});
    }
}

export const orderCountries = (order) => {
    return function (dispatch) {
        dispatch({type: types.orderCountries, payload: order});
    }
}


// POR HACER
export const getCountry = (name) => {
    return async function (dispatch) {
        const resp = await fetchConToken(`/countries`);
        const countries = resp.data;
        dispatch({type: types.getCountriesName, payload: countries});
    }
}
