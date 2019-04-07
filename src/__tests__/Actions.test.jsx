import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '@actions/stolenBike';
import fetchMock from 'fetch-mock';
import expect from 'expect' ;
import {URL} from '@constants/config';
import {SAMPLE_RESP, SAMPLE_RESP_2} from "@constants/SampleResp";
import * as TYPES from '@actions/types';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('--Actions Test--', () => {
    afterEach(() => {
        fetchMock.restore()
    });

    it('--Action Test--FETCHED_Bikes--', () => {
        const response = {
            status: 200,
            body: JSON.stringify(SAMPLE_RESP_2),
            headers: {"total": "1"}
        };
        const options = {"method": "GET"};

        fetchMock.getOnce(URL + "incidents?incident_type=theft&proximity=berlin&per_page=10&", response, options);
        const expectedActions = [{
                type: TYPES.FETCHED_LOADING_STOLEN_BIKES
            },{
                type: TYPES.FETCHED_SUCCESS_STOLEN_BIKES,
                payload: {
                    bikes : SAMPLE_RESP_2,
                    total : 1
                }
            }
        ];

        const store = mockStore({});
        return store.dispatch(actions.getStolenBikesData()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

})