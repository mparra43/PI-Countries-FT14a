import { combineReducers } from 'redux';

import { uiReducer } from './uiReducer';
import { mainScreenReducer } from './mainScreenReducer';
import { authReducer } from './authReducer';
import {countriesReducer} from "./countriesReducer";



export const rootReducer = combineReducers({
    countries:countriesReducer,
    ui: uiReducer,
    mainScreen: mainScreenReducer,
    auth: authReducer
})

