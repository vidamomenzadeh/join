import React from "react";
import { Component } from 'react';
import { connect } from 'react-redux';
import {getStolenBikesData} from '../actions/stolenBike';
import {withRouter} from "react-router";
import LayoutCmp from '@components/LayoutCmp';
import {getStolenBikes} from "@reducers/stolenBikes";
import StolenBikeList from "@components/stolenBike/StolenBikeList";
import {WrappedBikeFilterForm} from "@components/stolenBike/FilterBike";

class StolenBikePageContainer extends Component {

    constructor(props){
        super(props);

        this.applyStolenBikeFilter = this.applyStolenBikeFilter.bind(this);
    }

    componentDidMount() {
        this.props.getStolenBikesData();
    }

    /*
    * Apply Bike Search Filtered
    * */
    applyStolenBikeFilter(filter){
        this.props.getStolenBikesData(filter);
    }

    render() {
        const {bikes} = this.props;

        return(
            <LayoutCmp  showFooter={true}
                        showHeader={true}>
                <div className="app">
                    <div className={"search-title-page"}>
                        Police Department of Berlin
                        <div className={"search-sub-title"}>Stolen bykes</div>
                    </div>
                    <WrappedBikeFilterForm applyStolenBikeFilter={this.applyStolenBikeFilter}/>
                    <StolenBikeList bikes={bikes}  />
                </div>
            </LayoutCmp>
        )
    }
}

function mapStateToProps(state) {
    return {
        bikes : getStolenBikes(state)
    }
}

export default withRouter(connect(mapStateToProps, {
    getStolenBikesData : getStolenBikesData
})(StolenBikePageContainer));
