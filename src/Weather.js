import React, { useState } from "react";
import axios from 'axios';
import "./Weather.css";
import FormattedDate from "./FormattedDate";
export default function Weather(props) {
   const [city, setCity] = useState(props.defaultCity);
const [weatherData, setWeatherData] = useState({});
const [loaded,setLoaded]= useState(false);


function handleResponse(response) {
   setLoaded(true);
   
   setWeatherData({
      temperature :response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
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
   function handleClick(event) {
      event.preventDefault();
      setCity(event.target.value);
      search();
   }

if (loaded) {
   return (
<div className="container">
   <div className="wrapper">
      <div className="app-weather">
         <form className="pb-3" onSubmit={handleSubmit}>
            <div className="row">
               <div className="col-9">
            <input type="text" className="input form-control" placeholder="Enter a city" onChange={handleChange}/>
            </div>
            <div className="col-3">
            <input className="btn btn-primary btn-search" type="submit" value="Search" />
            </div>
            </div>
         </form>
         <nav >
         <ul className="nav nav-pills mb-4">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/" onClick = {handleClick}>Kharkiv</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Lviv</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Odesa</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Dnipro</a>
            </li>
          </ul>
          </nav>
        
          <div className="row p-4 d-flex mb-5">
            <div className="col-md-6 text-center p-4 city-block">
              <div className="col-md-12">
               <h1 className="mb-5 city">{city}</h1>
               <FormattedDate date={weatherData.date}/>
                </div>
            </div>
            <div className="col-md-6 p-4 ps-5 text-start">
              
<img className = "icon" src ={weatherData.icon} alt="weather icon"  width="100"></img>
                  <div>
                    <span className="temp">{Math.round(weatherData.temperature)}</span>
                    <a href="/" className ="temp-icon temp-cels active-link">&#176;C   </a> <span className="oblique">   | </span><a href="/" className ="temp-icon temp-fareng">&#176;F </a>
                    </div>
                  <div className="row ms-1 description">{weatherData.description}</div>
                  <p >Humidity: <span className="humidity">{weatherData.humidity}</span>%</p>
                  <p >Wind: <span className="wind">{weatherData.wind}</span> m/s</p>
                  </div>
               </div>
       
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