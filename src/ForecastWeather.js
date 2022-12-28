import React, {useState, useEffect} from "react";
import "./ForecastWeather.css";
import ForecastDay from "./ForecastDay";
import axios from 'axios';


export default function ForecastWeather(props) {
   
   let [loaded, setLoaded] =useState(false);
   let [forecast, setForecast]= useState(null);
useEffect(()=> {
   setLoaded(false);
}, [props.coordinates]);

function handleResponse(response) {
   // console.log(response.data);
   setForecast(response.data.daily);
   setLoaded(true);
}

   if(loaded) {
      return (
         <div className="WeatherForecast">
         <div className="row">
             {forecast.map((dailyForecast, index) => {
      if (index <5) {
         return (
            <div className="col" key={index}>
         <ForecastDay data = {dailyForecast} />
         </div>
      );
   } 
   return null;
   })}
  </div>
  </div>
      )
      } else {
         let longitude= props.coordinates.lon;
         let latitude =props.coordinates.lat;
         
         let apiKey ="f81614abe2395d5dfecd45b9298041de";
         
            let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
         
            axios.get(apiUrl).then (handleResponse); 
      }
   }
 
