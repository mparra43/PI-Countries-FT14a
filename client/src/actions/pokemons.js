import {fetchConToken} from '../helpers/fetch';
import {types} from '../types/types';


export const getAllPokemon = () => {
    return async (dispatch) => {

        const resp = await fetchConToken('all');
        const data = await resp.json();
        try {
            dispatch({type: types.getPokemonAll, payload: data})
        } catch (e) {
            console.log(data.msg)
        }
    }
}
export const pokemonDetail = (parameter) => {
    console.log(parameter)

    return async (dispatch) => {
        try {
            if (typeof parameter === 'number') {
                const resp = await fetchConToken('parameter');
                const pokemon = await resp.json();
                dispatch({type: types.getPokemonId, payload: pokemon})
            } else if (typeof parameter === 'string') {
                console.log(parameter)
                const resp = await fetchConToken(`?name=${parameter}`);
                const pokemon = await resp.json();
                dispatch({type: types.findApiPokemon, payload: pokemon})
            }
        } catch (e) {
            console.log("error")
        }
    }
}
export const orderPokemonAZ = (order) => {
    return function (dispatch) {
        dispatch({type: types.orderPokemon, payload: order});
    }
}
export const orderPokemonPower = (order) => {
    return function (dispatch) {
        dispatch({type: types.orderPowerPokemon, payload: order});
    }
}

export const savePokemon = (pokemon) => {
    return async (dispatch) => {
        const respBd = await fetchConToken('all');
        const data = await resp.json();
        const resp = await fetchConToken('addPokemon', pokemon, 'POST');
        const pokemonBd = await resp.json();
        try {
            if (pokemonBd.ok) {
                dispatch({type: types.postPokemon, payload: pokemon})
            }
        } catch (e) {
            console.log(pokemonBd.msg)
        }
    }
}
export const getAllTypes = () => {
    return async (dispatch) => {

        const resp = await fetchConToken('all/Types');
        const typesAll = await resp.json();
        try {
            dispatch({type: types.getTypes, payload: typesAll})
        } catch (e) {
            console.log(typesAll.msg)
        }
    }
}
export const findPoke = (poke) => {
    console.log(poke)
    return function (dispatch) {
        dispatch({type: types.findPokemon, payload: poke});
    }
}

export const filterPoke = (filter) => {
    console.log(filter)
    return function (dispatch) {
        dispatch({type: types.filterPokemon, payload: filter});
    }
}
export const filterPokeType = (filter) => {
    console.log(filter)
    return function (dispatch) {
        dispatch({type: types.filterTypePokemon, payload: filter});
    }
}



