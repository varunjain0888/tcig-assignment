import React, { Component }  from 'react';
import {StarIcon,LocationIcon} from './Icons';
 
export function getStarRatingComponent (rating){
    let starItems = [];
    for (let index = 0; index < rating; index++) {
        starItems.push(<StarIcon/>);
      }
    return (
        <div>
          {starItems}
        </div>
      );
}
export function getHotelNameComponent(name){
    return (<span style={{color:"black",fontSize:"20px",fontWeight:"bold"}}>{name}</span>);
}
export function getPriceComponent(price){
    return (<div><span style={{fontWeight:"bolder",color:"red",fontSize:"14px"}}>SAR</span><span style={{fontWeight:"bolder",color:"red",fontSize:"20px",marginLeft:"5px"}}>{price}</span></div>);
}
export function getDiscountedPriceComponent(price){
    return (<div><span style={{fontWeight:"bolder",color:"#000000",fontSize:"16px"}}>SAR</span><span style={{fontWeight:"bolder",color:"black",fontSize:"24px",marginLeft:"5px"}}>{price}</span></div>);
}
export function getLocationComponent(locationName){
    return  <div><LocationIcon/><span style={{color:"#0277BD",fontSize:"14px",marginLeft:"5px"}}>{locationName}</span></div>
}
export function getHotelAminetiesComponent(aminities){
     let hotelAminities=[];
    aminities.map((item,i)=>{hotelAminities.push(<span style={{color:"#808285",fontSize:"14px"}}>{item+", "}</span>)})
    return <div>{hotelAminities}</div>
}
export function getHotelRoomTypeComponent(type){
    return <span style={{color:"#000000",fontSize:"14px"}}>{type}</span>
}
export function getMembersOnlyRateComponent(){
    return <span style={{fontWeight:"500",borderRadius:"5px", padding:"5px", backgroundColor:"red",color:"#FFFFFF",fontSize:"12px"}}>Members only rate</span>
}