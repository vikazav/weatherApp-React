import React, { useState} from "react";
import axios from 'axios';
import "./Weather.css";

import WeatherData from "./WeatherData";
import ForecastWeather from "./ForecastWeather";

export default function Weather(props) {
   const [city, setCity] = useState(props.defaultCity);
const [weatherData, setWeatherData] = useState({});
const [loaded,setLoaded]= useState(false);


function handleResponse(response) {
   setLoaded(true);
   
   setWeatherData({
      coordinates: response.data.coord,
      temperature :response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt*1000), 
      city: response.data.name,
   });
}
function search() {
   let apiKey = "428a806b1ea72671015f9a8da5f82916";
   let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
   axios.get(url).then(handleResponse);
}
function handleSubmit(event) {
   event.preventDefault();
   search()
}


function handleChange(event) {
   setCity(event.target.value);
   }



   function handleLink(event) {
      event.preventDefault();
      setCity(event.target.innerText);
         search()
   }


if (loaded) {
   return (
<div className="container">
   <div className="wrapper">
      <div className="app-weather">
         <form className="pb-3" onSubmit={handleSubmit}>
            <div className="row">
               <div className="col-9">
            <input type="text" className="input form-control" placeholder="Enter a city" autoFocus ="on" onChange={handleChange}/>
            </div>
            <div className="col-3">
            <input className="btn btn-primary btn-search" type="submit" value="Search" />
            </div>
            </div>
         </form>
         <nav >
         <ul className="nav nav-pills mb-4">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/" onClick = {handleLink}>Kharkiv</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/" onClick = {handleLink}>Lviv</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/" onClick = {handleLink}>Odesa</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/" onClick = {handleLink}>Dnipro</a>
            </li>
          </ul>
          </nav>
        <WeatherData data = {weatherData} />
          <ForecastWeather code = {weatherData.icon} coordinates = {weatherData.coordinates}/>
       
      </div>
   </div>
</div>
)
   }else {
      search()
      return (
      <p>loading</p>
      )
   }
}