import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./ForecastDay.css"
export default function ForecastDay(props) {

   function day() {
      let date = new Date(props.data.dt*1000);
      let day =date.getDay();
      let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      return days[day];
   }
  
  function tempMin() {
   let temperature= Math.round(props.data.temp.min);
   return `${temperature}°`;
  }
  function tempMax() {
   let temperature= Math.round(props.data.temp.max);
   return `${temperature}°`;
  }
  

   return(
      <div className="ForecastDay">
      <div className="forecast-day">{day()}</div>
      <WeatherIcon code = {props.data.weather[0].icon} alt ={props.data.weather[0].description}/>
      <p className="tempMax"><strong>{tempMax()}</strong><sup className="icon-celsius"><small>°C</small></sup></p>
      <p className="tempMin">{tempMin()}<sup className="icon-celsius"><small>C</small></sup></p>

   </div> 
   )
}