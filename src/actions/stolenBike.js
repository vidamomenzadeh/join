import {URL} from '@constants/config';
import * as TYPES from '@actions/types';

let fetchBikesFn = (params) =>{
    let url = URL + "incidents?";
    params = params || {};
    params = {...params,...{
        incident_type:"theft",
        proximity:"berlin",
        per_page : 10
    }};

    Object.keys(params).map((item)=>{
        if(params[item])
            url += item + "=" + params[item] + "&"
    });

    return fetch(url, {
        method: 'GET'
    })

}

export const getStolenBikesData = (params) => dispatch => {
    dispatch({
        type: TYPES.FETCHED_LOADING_STOLEN_BIKES,
    });
    return(
        fetchBikesFn(params).then((response) => {
            return (response.json().then(function(data) {
                dispatch({
                    type: TYPES.FETCHED_SUCCESS_STOLEN_BIKES,
                    payload: {
                        bikes : data,
                        total : parseInt(response.headers.get("total"))
                    }
                });
             }));
        }).catch((error) => dispatch({
            type: TYPES.FETCHED_ERROR_STOLEN_BIKES,
            payload :{
                error : error
            }
        }))
    )
}
