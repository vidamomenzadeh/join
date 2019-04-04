import StolenBikeItem from '@components/stolenBike/StolenBikeItem';
import React from 'react';
import PropTypes from 'prop-types';

export default function StolenBikeList(props){
    const {bikes} = props;

    return (
        <div className="bikes-list-wrapper">
            {Object.keys(bikes).map(function(id) {
                return <StolenBikeItem
                    id={id}
                    key={id}
                    bike={bikes[id]}/>;
            })}
        </div>
    );
}

StolenBikeList.propTypes = {
    bikes: PropTypes.object,
}
