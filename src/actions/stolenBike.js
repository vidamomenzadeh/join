import {URL} from '@constants/config';
import * as TYPES from '@actions/types';
import {object} from "prop-types";

let fetchBikesFn = (params) => {
    let url = URL + "incidents?";
    params = params || {
        page : 1,
        per_page : 10
    };

    Object.keys(params).map((item)=>{
        if(params[item])
            url += item + "=" + params[item] + "&"
    });

    return fetch(url, {
        method: 'GET',
    }).then((response) => response)
}

export const getStolenBikesData = (params) => dispatch => {
    return(
        fetchBikesFn(params).then((response) => {
            response.json().then(function(data) {
                dispatch({
                    type: TYPES.FETCHED_STOLEN_BIKES,
                    payload: {
                        bikes : data,
                        total : parseInt(response.headers.get("total"))
                    }
                });
            });
        })
    )
}
