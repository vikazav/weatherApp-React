import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";

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
              <WeatherIcon code = {props.data.icon} alt = {props.data.description}/>

                  <div>
                  <Temperature celsius = {Math.round(props.data.temperature)}/>
                 
                    </div>
                  <div className="row ms-1 description" >{props.data.description}</div>
                  <p className ="fs-4">Humidity: <span className="humidity">{props.data.humidity}</span>%</p>
                  <p className ="fs-4">Wind: <span className="wind">{props.data.wind}</span> m/s</p>
                  </div>
               </div>
     </div>
   )
   
}