import { combineReducers } from 'redux';
import { uiReducer } from './uiReducer';
import { authReducer } from './authReducer';
import {pokemonReducer} from "./pokemonReducer";



export const rootReducer = combineReducers({
    pokemon:pokemonReducer,
    ui: uiReducer,
    auth: authReducer
})

