import React  from 'react';
import PropTypes from 'prop-types';

function StolenBikeItem(props) {
     const {bike} = props;
     const imageSrc = bike.media.image_url ? bike.media.image_url : "/public/img/bike.svg";

     return(
       <div className="bike-item" id={`bike-item-${bike.id}`}>
           
           <img className={`${bike.media.image_url ? "hasSrc" : "noImage"}`} src={imageSrc} />
           <div className={"bike-content"}>
               <div className={"bike-title"}>{bike.title}</div>
               <div>
                   <label>
                       Description:
                   </label>
                   {bike.description}
               </div>
               <div>
                   <label>
                       Location:
                   </label>
                   {bike.address}
               </div>
               <div>
                   <label>
                       Stolen:
                   </label>
                   {bike.occurred_at}
               </div>
           </div>

        </div>
    );
}

StolenBikeItem.propTypes = {
    bike : PropTypes.object
}

export default StolenBikeItem;