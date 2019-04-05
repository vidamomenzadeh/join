import { combineReducers } from 'redux';
import * as TYPES from '@actions/types';
let initialState = {
    listBikes  : {},
    totalPage  : 0
}


export const stolenBikes = (state = initialState.listBikes, action)=> {
    switch (action.type) {
        case  TYPES.FETCHED_STOLEN_BIKES:

            return {
                ...action.payload.bikes.incidents.reduce((obj, app) => {
                    obj[app.id] = app;
                    return obj;
                }, {})
            }

        default:
                return state;
    }
};

export const stolenBikesTotalPage = (state = initialState.totalPage, action)=> {
    switch (action.type) {
        case  TYPES.FETCHED_STOLEN_BIKES:

            return action.payload.total


        default:
            return state;
    }
};


export const getTotalBikes = (state) => {
    return  state ? state.stolenBikes.stolenBikesTotalPage : 0;
}


export const getStolenBikes = (state) => {
    return  state ? state.stolenBikes.stolenBikes : {};
};


export default combineReducers({
    stolenBikes,
    stolenBikesTotalPage
});
