import React from "react";

import {IMG_CDN_URL } from "../utils/config";

export default RestrauntCard = ({cloudinaryImageId,name,cuisines,avgRating,costForTwoString,lastMileTravelString})=> {
    
    return (
        <div className='card'>
            <img src={ IMG_CDN_URL + cloudinaryImageId}/>
            <div className='ratings'>
                <h2>{name}</h2>
                <p style={avgRating > 3 ? {color:"green"}:{color:"red"} }>{avgRating}</p>
            </div>
            <p>{costForTwoString}</p>
            <p>{cuisines.join(",")}</p> 
            <p>{lastMileTravelString} minutes</p>
        </div>
    )

}
