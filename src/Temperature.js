import React, {useState} from "react";
export default function Temperature(props) {
   const [unit, setUnit]= useState("celsius");
   function convertToFahrenheit() {
      return (Math.round((props.celsius*1.8)+32));
   }
function handleCelsius(event) {
   event.preventDefault();
setUnit("celsius");
}
function handleFahrenheit(event) {
   event.preventDefault();
   setUnit("fahrenheit");
}
if (unit ==="celsius") {
   return (
      <div>
         <span className="temp">{props.celsius}</span>
    
      <span className ="temp-icon" >&#176;C   </span>
       <span className="oblique">   | </span><a href="/" className ="temp-icon" onClick={handleFahrenheit}>&#176;F </a>
       </div>
   )
} else {
   return (
      <div>
      <span className="temp">{convertToFahrenheit()}</span>
 
   <a href="/" className ="temp-icon" onClick={handleCelsius} >&#176;C   </a>
    <span className="oblique">   | </span><span href="/" className ="temp-icon" >&#176;F </span>
    </div>
   )
}
}