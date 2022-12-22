import React from "react";
import FormattedDate from "./FormattedDate";
export default function WeatherData(props) {
   return (
     <div>
      <div className="row p-4 d-flex mb-5">
            <div className="col-md-6 text-center p-4 city-block">
              <div className="col-md-12">
               <h1 className="mb-5 city">{props.data.city}</h1>
               <FormattedDate date={props.data.date}/>
                </div>
            </div>
            <div className="col-md-6 p-4 ps-5 text-start">
              
<img className = "icon" src ={props.data.icon} alt="weather icon"  width="100"></img>
                  <div>
                    <span className="temp">{Math.round(props.data.temperature)}</span>
                    <a href="/" className ="temp-icon temp-cels active-link">&#176;C   </a> <span className="oblique">   | </span><a href="/" className ="temp-icon temp-fareng">&#176;F </a>
                    </div>
                  <div className="row ms-1 description">{props.data.description}</div>
                  <p >Humidity: <span className="humidity">{props.data.humidity}</span>%</p>
                  <p >Wind: <span className="wind">{props.data.wind}</span> m/s</p>
                  </div>
               </div>
     </div>
   )
   
}