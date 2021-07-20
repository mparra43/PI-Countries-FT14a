import { types } from '../types/types';

const initialState = {
    allActivities: [],
    activitiesFilter:[],
}

export const activitiesReducer = ( state = initialState, action ) => {


    switch ( action.type ) {

        case types.getActivities:
            return {
                ...state,
                allActivities:action.payload
            }


        case types.filterActivities:

            return {
                ...state,
                activitiesFilter: state.allActivities.data.filter(item => item.name === action.payload)
            }

        default:
            return state;
    }

}
