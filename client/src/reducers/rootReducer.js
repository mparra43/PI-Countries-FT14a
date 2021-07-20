import { combineReducers } from 'redux';
import { uiReducer } from './uiReducer';
import { authReducer } from './authReducer';
import {countriesReducer} from "./countriesReducer";
import {activitiesReducer} from "./activitiesReducer";


export const rootReducer = combineReducers({
    countries:countriesReducer,
    ui: uiReducer,
    activities:activitiesReducer,
    auth: authReducer
})

