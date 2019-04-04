import { combineReducers } from 'redux';
import * as TYPES from '@actions/types';
let initialState = {
    listBikes  : {}
}


export const stolenBikes = (state = initialState.listBikes, action)=> {
    switch (action.type) {
        case  TYPES.FETCHED_STOLEN_BIKES:

            return {
                ...state,
                ...action.payload.incidents.reduce((obj, app) => {
                    obj[app.id] = app;
                    return obj;
                }, {})
            }

        default:
                return state;
    }
};

export const getStolenBikes = (state) => {
    return  state ? state.stolenBikes.stolenBikes : {};
};


export default combineReducers({
    stolenBikes: stolenBikes
});
