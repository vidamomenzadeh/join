import React from "react";
import { shallow, mount } from 'enzyme';
import StolenBikeList from '@components/stolenBike/StolenBikeList';

import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {SAMPLE_RESP} from "@constants/SampleResp";
enzyme.configure({ adapter: new Adapter() });

const react = require("react");
module.exports = { ...react, memo: x => x };

describe('StolenBikeList Render correctly', () => {

    const bikes = SAMPLE_RESP;

    it('StolenBikeList snapshot test Without bikes', () => {
        const stolenBikeList = shallow(<StolenBikeList bikes={{}} />);
        expect(stolenBikeList).toMatchSnapshot();
    });

    it('StolenBikeList should render correctly with bikes', () => {
        const stolenBikeList = mount(<StolenBikeList bikes={bikes} />);
        expect(stolenBikeList).toMatchSnapshot();
        expect(stolenBikeList.find('.bikes-list-wrapper')).toHaveLength(1);
    });

});

