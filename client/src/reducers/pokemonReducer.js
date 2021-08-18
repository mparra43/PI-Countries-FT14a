import {types} from '../types/types';

const initialState = {
    pokeApi: [],
    pokeBd: [],
    everyPokemon: [],
    pokemonId: {},
    pokeName: {},
    showPoke: {},
    pokemonFilter: [],
    typesAll: [],
    showPokemon: [],
}

export const pokemonReducer = (state = initialState, action) => {


    switch (action.type) {

        case types.getPokemonAll:
            console.log(action.payload)
            let showPokes = action.payload.data.map((e) => ({...e, type: e.type.split(",")}))
            return {
                ...state,
                pokeApi: action.payload.pokemonApi,
                pokeBd: action.payload.pokemonBd,
                everyPokemon: action.payload.data,
                showPokemon: showPokes,
            }

        case types.findApiPokemon:
            return {
                ...state,
                pokeName: action.payload
            }
        case types.findPokemon:
            return {
                ...state,
                showPoke: action.payload
            }


        case types.getPokemonId:
            return {
                ...state,
                pokemonId: action.payload,
            }


        case types.filterPokemon:
            if (action.payload === 'Api') return {
                ...state,
                pokemonFilter: state.pokeApi
            }
            if (action.payload === 'bd') return {
                ...state,
                pokemonFilter: state.pokeBd
            }
            if (action.payload !== 'Api' && action.payload !== 'bd') {
                let filterType = state.showPokemon.filter((e) => e.type.includes(action.payload))
                return {
                    ...state,
                    pokemonFilter: filterType
                }
            }
            break;

        case types.postPokemon:
            console.log(action.payload)
            let pokesShow = action.payload.data.map((e) => ({...e, type: e.type.split(",")}))
            return {
                ...state,
                pokeBd: action.payload.pokemonBd,
                showPokemon: pokesShow,
            }


        case types.getTypes:
            return {
                ...state,
                typesAll: action.payload.data.map(function (x) {
                    return {value: x.type, label: x.type}
                })
            }


        case types.orderPokemon:
            if (action.payload === 'Za') {
                let showPokemonZa = state.showPokemon.sort(function (a, b) {
                    if (b.name > a.name) return 1;
                    if (b.name < a.name) return -1;
                    return 0;
                })
                return {
                    ...state,
                    showPokemon: showPokemonZa
                }
            } else if (action.payload === 'Az') {
                let showPokemonAz = state.showPokemon.sort(function (a, b) {
                    if (a.name > b.name) return 1;
                    if (a.name < b.name) return -1;
                    return 0;
                })
                return {
                    ...state,
                    showPokemon: showPokemonAz
                }
            }
            break;


        case types.orderPowerPokemon:
            let powerMy = state.showPokemon.sort(function (a, b) {
                if (a.attack > b.attack) return 1;
                if (a.attack < b.attack) return -1;
                return 0;
            })
            if (action.payload === 'PowerMy') {
                return {
                    ...state,
                    showPokemon: powerMy
                }
            } else if (action.payload === 'PowerMn') {
                let powerMn = state.showPokemon.sort(function (a, b) {
                    if (b.attack > a.attack) return 1;
                    if (b.attack < a.attack) return -1;
                    return 0;
                })
                return {
                    ...state,
                    showPokemon: powerMn
                }
            }
            break;

        default:
            return state;

    }
}