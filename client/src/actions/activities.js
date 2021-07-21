import {fetchConToken, fetchSinToken} from '../helpers/fetch';
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

export const saveActivities = (  activity ) => {
console.log(activity)
    return async( dispatch ) => {
        try {
            const resp = await fetchConToken ( 'activity', activity, 'POST' );
            const body = await resp.json();

            if(body.ok) {
                alert(body.msg)
                dispatch({type: types.postActivities, payload: activity})
            }
        }catch (e) {
            console.log(e)
        }
    }
}

export const filterActivities = (filter) => {
    console.log(filter)
    return function (dispatch) {
        dispatch({type: types.filterActivities, payload: filter});
    }
}