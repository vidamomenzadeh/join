import { combineReducers } from 'redux';
import * as TYPES from '@actions/types';
let initialState = {
    listBikes  : {},
    totalPage  : 0,
    loading : false
}


export const stolenBikes = (state = initialState.listBikes, action)=> {
    switch (action.type) {
        case  TYPES.FETCHED_SUCCESS_STOLEN_BIKES:

            return {
                ...action.payload.bikes.incidents.reduce((obj, bike) => {
                    obj[bike.id] = bike;
                    return obj;
                }, {})
            }

        default:
                return state;
    }
};

export const stolenBikesLoading = (state = initialState.loading, action)=> {
    switch (action.type) {
        case  TYPES.FETCHED_LOADING_STOLEN_BIKES:
            return true;
        case  TYPES.FETCHED_SUCCESS_STOLEN_BIKES:
        case  TYPES.FETCHED_ERROR_STOLEN_BIKES:
            return false;


        default:
            return state;
    }
};


export const stolenBikesTotalPage = (state = initialState.totalPage, action)=> {
    switch (action.type) {
        case  TYPES.FETCHED_SUCCESS_STOLEN_BIKES:
            return action.payload.total;
        case  TYPES.FETCHED_ERROR_STOLEN_BIKES:
            return -1;
        default:
            return state;
    }
};


export const stolenBikesErrors = (state = null, action)=> {
    switch (action.type) {
        case  TYPES.FETCHED_ERROR_STOLEN_BIKES:
            return action.payload.error;

        default:
            return state;
    }
};


export const getTotalBikes = (state) => {
    return  state ? state.stolenBikes.stolenBikesTotalPage : 0;
}

export const getIsloading = (state) => {
    return  state ? state.stolenBikes.stolenBikesLoading : false;
}


export const getStolenBikes = (state) => {
    return  state ? state.stolenBikes.stolenBikes : {};
};

export const getErrors = (state) => {
    return  state ? state.stolenBikes.stolenBikesErrors : {};
};


export default combineReducers({
    stolenBikes,
    stolenBikesTotalPage,
    stolenBikesLoading,
    stolenBikesErrors
});
