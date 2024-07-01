import React from 'react'
import {CDN_URL} from './../utils/constants'
const RestaurantCard = ({resData}) => {
    return (
        <div className='res-card m-4 p-4 w-[250px] bg-slate-100 hover:bg-slate-300 rounded-md'>
            <img alt="res-logo" className='res-logo rounded-lg'
            src={CDN_URL+resData.info.cloudinaryImageId}>
            </img>
            <h3 className='font-bold py-2'>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4>{resData.info.avgRating}</h4>
            <h4>{resData.info.sla.deliveryTime + " minutes"}</h4>
        </div>
    )
}

export const withPromotedLabel = (RestaurantCard)=>{
    return (props) =>{
        return  (
            <div>
                <label className='absolute p-2 m-2 text-black font-bold'>Top Rated</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard