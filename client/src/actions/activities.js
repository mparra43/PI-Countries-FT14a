import {fetchConToken} from '../helpers/fetch';
import {types} from '../types/types';

export const getAllActivities = () => {
    return async (dispatch) => {

        const resp = await fetchConToken('activities/all');
        const activitiesAll = await resp.json();
        try {
            dispatch({type: types.getActivities, payload: activitiesAll})
        } catch (e) {
            console.log(activitiesAll.msg)
        }
    }
}

export const filterActivities = (filter) => {
    console.log(filter)
    return function (dispatch) {
        dispatch({type: types.filterActivities, payload: filter});
    }
}