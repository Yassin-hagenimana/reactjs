import React from "react";
import Star from "../images/star.png"
export default function Card(props){
   let badgeText;
   if(props.openSports===0){
     badgeText= "SOLD OUT"
   }else if(props.location==="Online"){
     badgeText="ONLINE"
   }
    return( 
       <div className="card">
       {badgeText &&  <div className="card--badge">{badgeText}</div>}
         <img src={require(`../images/${props.coverImg}`)} className="card--image" alt="swimming"/>
         <div className="card--status">
             <img src={Star} alt="star"  className="card--star"/>
             <span className="gray">{props.stats.rating}</span>
             <span className="gray">({props.stats.reviewCount}) .</span>
             <span>{props.location}</span>
         </div>

         <p className="card--title"> {props.title} </p>
         <p><span className="bold">Fom ${props.price}</span> / person</p>
       </div>
    )
}

//using props

