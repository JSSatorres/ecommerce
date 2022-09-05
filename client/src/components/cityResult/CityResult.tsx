import React from 'react'
import { cityDataToShowTypes } from '../../types'
import "./cityResult.scss"


interface PropCityDataToShow{
    cityDataToShow:cityDataToShowTypes
}



const CityResult = ({cityDataToShow}:PropCityDataToShow) => {
    console.log("cityDataToShow",cityDataToShow);
    
  return (
    <div className='CityResultContainer'>
        <div className="CityResultContainer__name"><p>City: </p>{cityDataToShow.name}</div>
        <div className="CityResultContainer__base"><p>periods: </p>{cityDataToShow.base}</div>
        <div className="CityResultContainer__feels_like"><p>feels like temperatur: </p>{cityDataToShow.feels_like}</div>
        <div className="CityResultContainer__humidity"><p>humidity: </p>{cityDataToShow.humidity}</div>
        <div className="CityResultContainer__pressure"><p>pressure: </p>{cityDataToShow.pressure}</div>
        <div className="CityResultContainer__temp"><p>temperature: </p>{cityDataToShow.temp}</div>
        <div className="CityResultContainer__main"><p>main wheather: </p>{cityDataToShow.main}</div>
        <div className="CityResultContainer__description">{cityDataToShow.description}</div>
        <div className="CityResultContainer__latLon"><p>latitude: </p>{cityDataToShow.lat}<p>longitude: </p> {cityDataToShow.lon}</div>           
    </div>
  )
}

export default CityResult