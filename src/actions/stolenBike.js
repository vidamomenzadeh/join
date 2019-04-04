import {URL} from '@constants/config';
import * as TYPES from '@actions/types';

let fetchMarkersFn = (params) => {
    debugger
    return fetch(URL + "/incidents", {
        method: 'GET'      
    }).then(response => response.json())
}

export const getStolenBikesData = (params) => dispatch => {
    return(
        fetchMarkersFn(params).then((res) => {
            dispatch({
                type: TYPES.FETCHED_STOLEN_BIKES,
                payload: res
            });
        })
    )
}
