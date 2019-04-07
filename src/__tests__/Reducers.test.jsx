import reducer from '@reducers/stolenBikes';
import * as TYPES from '@actions/types';
import {SAMPLE_RESP, SAMPLE_RESP_2} from "../constants/SampleResp";

describe('--Reducers Test--', () => {
    it('--Reducers Test--FETCHED', () => {
        expect(
            reducer(
                undefined,
                {
                    type: TYPES.FETCHED_SUCCESS_STOLEN_BIKES,
                    payload : {
                        bikes : SAMPLE_RESP_2,
                        total : 1
                    }
                }
            )
        ).toEqual({
            stolenBikes : {[SAMPLE_RESP.id] : SAMPLE_RESP},
            stolenBikesLoading: false,
            stolenBikesErrors: null,
            stolenBikesTotalPage: 1
        })
    });


})