import React from "react";
import { shallow, mount } from 'enzyme';
import StolenBikePageContainer from '../containers/StolenBikePageContainer';
import {SAMPLE_RESP} from "@constants/SampleResp";
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });


describe('Snapshot test Container', () => {
    it('renders correctly', () => {
        const mapWrapper = shallow(<StolenBikePageContainer />);
        expect(mapWrapper).toMatchSnapshot();
    });

    it('should render correctly with bikes', () => {
        const bikes = SAMPLE_RESP;

        const mapWrapper = shallow(<StolenBikePageContainer bikes={bikes} />);
        expect(mapWrapper).toMatchSnapshot();
    });
});

