import React  from 'react';
import PropTypes from 'prop-types';
import {FORMAT_DATE} from "../../util";

function StolenBikeItem(props) {
     const {bike} = props;
     const imageSrc = bike.media && bike.media.image_url ? bike.media.image_url : "/public/img/bike.svg";

     return(
       <div className="bike-item" id={`bike-item-${bike.id}`}>

           <img className={`${bike.media && bike.media.image_url ? "hasSrc" : "noImage"}`} src={imageSrc} />
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
                       Date of the theft:
                   </label>
                   {FORMAT_DATE(bike.occurred_at)}
               </div>
               <div>
                   <label>
                       Date of the Report:
                   </label>
                   {FORMAT_DATE(bike.updated_at)}
               </div>
           </div>

        </div>
    );
}

StolenBikeItem.propTypes = {
    bike : PropTypes.object
}

export default StolenBikeItem;