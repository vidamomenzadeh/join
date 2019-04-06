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
        fetchMock.getOnce(URL + "incidents?", {
            body: SAMPLE_RESP_2
        });

        const expectedActions = [
            {
                type: TYPES.FETCHED_LOADING_STOLEN_BIKES,
                payload: {
                    markers : SAMPLE_RESP
                }
            }
        ];
        const store = mockStore({});

        return store.dispatch(actions.getStolenBikesData()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

})