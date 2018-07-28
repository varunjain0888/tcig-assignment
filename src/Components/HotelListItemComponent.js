import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import {getHotelNameComponent,getPriceComponent, getLocationComponent
  ,getStarRatingComponent,getHotelAminetiesComponent
  ,getHotelRoomTypeComponent,getDiscountedPriceComponent,getMembersOnlyRateComponent} from './HotelListItemSubComponents.js';
  
const hotelItem = [{
  hotelImage:"https://image.ibb.co/myk4b8/unicorn.jpg",
  hotelName:"Jumeriah Zabeel Saray Royal Residences",
  hotelstarRating:4,
  hotelLocation:"Palm Jumeirah, Dubai",
  hotelAmenities:["Breakfast","Indoor Pool"],
  hotelPrice:"9,288",
  hotelDicountedPrice:"7,430",
  hotelRoomType:"Twin/Double Room"
},{
  hotelImage:"https://image.ibb.co/myk4b8/unicorn.jpg",
  hotelName:"Bahrain Tower Hotel Royal Saray Residences",
  hotelstarRating:2,
  hotelLocation:"Manama, Bahrain",
  hotelAmenities:["Internet","Free car parking"],
  hotelPrice:"3,288",
  hotelDicountedPrice:"4,430",
  hotelRoomType:"Single/Studio Room"
},{
  hotelImage:"https://image.ibb.co/im4TpT/varun.jpg",
  hotelName:"Taj Royal Saray Residences",
  hotelstarRating:5,
  hotelLocation:"Manama, Bahrain",
  hotelAmenities:["Internet","Free car parking"],
  hotelPrice:"1,288",
  hotelDicountedPrice:"2,430",
  hotelRoomType:"Single/Studio Room"
},{
  hotelImage:"https://image.ibb.co/myk4b8/unicorn.jpg",
  hotelName:"Salmaniya Royal Saray Residences",
  hotelstarRating:3,
  hotelLocation:"Manama, Bahrain",
  hotelAmenities:["Internet","Free car parking"],
  hotelPrice:"6,288",
  hotelDicountedPrice:"8,430",
  hotelRoomType:"Single/Studio Room"
}];
const hotelListItem = [];
class HotelListItemComponent extends Component {
  componentDidMount(){
  }

  componentWillMount(){
  }

  render() {
    hotelItem.map((item, index)=>{
      hotelListItem.push(<div className="container" style={{marginTop:"10px"}}><div class=" card "style={{padding:"0",margin:  "0 auto",height:  "220px",width:  "50%",display: "block"}}>
           <div className="col-sm-4"style={{background:'url('+item.hotelImage+')',width:'100%',height:'100%',float:"left",padding:"0"}}>    
           </div>
           <div className="col-sm-8"style={{height:'100%',float:"right"}}>
           <div className=""style={{marginTop:"20px"}}>
            {getHotelNameComponent(item.hotelName)}
           </div>
           <div className=""style={{marginTop:"5px"}}>
            {getStarRatingComponent(item.hotelstarRating)}
           </div>
           <div className="row"style={{width:"100%"}}>
           <div className="col-7">
           <div className=""style={{marginTop:"5px"}}>
            {getLocationComponent(item.hotelLocation)}
           </div>
           <div className=""style={{marginTop:"5px"}}>
            {getHotelAminetiesComponent(item.hotelAmenities)}
           </div>
           <div className=""style={{marginTop:"5px"}}>
            {getHotelRoomTypeComponent(item.hotelRoomType)}
           </div>
            </div>
           <div className="col-5">
           <div className=""style={{textAlign:"right",fontWeight:"bolder"}}>
            {getPriceComponent(item.hotelPrice)}
           </div>
           <div className=""style={{textAlign:"right",fontWeight:"bolder"}}>
            {getDiscountedPriceComponent(item.hotelDicountedPrice)}
           </div>
           <div className=""style={{textAlign:"right",fontWeight:"bolder"}}>
            {getMembersOnlyRateComponent()}
           </div>
            </div>
           </div>
           </div>
         </div></div>)
       });
    return (
      <div style={{}}>
      {hotelListItem}
      </div>
    );
  }
}
export default HotelListItemComponent;
