import React from "react";
export default function FormattedData(props) {
let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 
  let day =week[props.date.getDay()];
  let hours = props.date.getHours();
  if (hours < 10) hours=`0${hours}`;
  let minutes = props.date.getMinutes();
  if (minutes < 10) minutes=`0${minutes}`;
  
  
  return(
    <div>
    <p className="fs-4 day-now"> {day}</p>
    <p className="fs-4 day-now"> {hours}:{minutes}</p>
    </div>
  )
}