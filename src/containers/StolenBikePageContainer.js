import React from "react";
import { Component } from 'react';
import { connect } from 'react-redux';
import {getStolenBikesData} from '../actions/stolenBike';
import {withRouter} from "react-router";
import LayoutCmp from '@components/LayoutCmp';
import {getStolenBikes, getTotalBikes} from "@reducers/stolenBikes";
import StolenBikeList from "@components/stolenBike/StolenBikeList";
import {WrappedBikeFilterForm} from "@components/stolenBike/FilterBike";

class StolenBikePageContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            filter : {
                page : 1,
                per_page:10
            }
        };

        this.applyStolenBikeFilter = this.applyStolenBikeFilter.bind(this);
        this.fetchBikesOnPage = this.fetchBikesOnPage.bind(this);
    }

    componentDidMount() {
        this.props.getStolenBikesData();
    }

    /*
    * Apply Bike Search Filtered
    * */
    applyStolenBikeFilter(filter){
        this.setState({
            filter : filter
        });
        this.props.getStolenBikesData(filter);
    }

    fetchBikesOnPage(page){
        this.setState({filter : {...this.state.filter, ...{page:page}}},()=>{
            this.props.getStolenBikesData(this.state.filter);
        });
    }

    render() {
        const {bikes, total} = this.props;

        return(
            <LayoutCmp  showFooter={true}
                        showHeader={true}>
                <div className="app">
                    <div className={"search-title-page"}>
                        Police Department of Berlin
                        <div className={"search-sub-title"}>Stolen bykes</div>
                    </div>
                    <WrappedBikeFilterForm applyStolenBikeFilter={this.applyStolenBikeFilter}/>
                    <StolenBikeList bikes={bikes}
                                    total={total}
                                    currentPage={this.state.filter.page}
                                    fetchBikesOnPage={this.fetchBikesOnPage} />
                </div>
            </LayoutCmp>
        )
    }
}

function mapStateToProps(state) {
    return {
        bikes : getStolenBikes(state),
        total : getTotalBikes(state)
    }
}

export default withRouter(connect(mapStateToProps, {
    getStolenBikesData : getStolenBikesData
})(StolenBikePageContainer));
