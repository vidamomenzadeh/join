import StolenBikeItem from '@components/stolenBike/StolenBikeItem';
import React from 'react';
import {Pagination} from "antd";
import PropTypes from 'prop-types';

export default function StolenBikeList(props){
    const {bikes, fetchBikesOnPage, total, currentPage} = props;

    return (
        <div className="bikes-list-wrapper">
            {Object.keys(bikes).map(function(id) {
                return <StolenBikeItem
                    id={id}
                    key={id}
                    bike={bikes[id]}/>;
            })}
            <Pagination defaultCurrent={currentPage} total={total} onChange={(page)=>{
                fetchBikesOnPage(page);
            }}/>
        </div>
    );
}

StolenBikeList.propTypes = {
    bikes: PropTypes.object,
}
