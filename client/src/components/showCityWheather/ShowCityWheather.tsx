import React from 'react'
import "./showCityWheather.scss"
import {cityDataToSearch} from "../../types"

  interface cities {
    city: Array<cityDataToSearch>,
    cityWeatherResult : (city:cityDataToSearch)=>void
  }

const ShowCityWheather = ({city, cityWeatherResult}:cities) => {

  const handleLonLat = (oneCity:cityDataToSearch) => cityWeatherResult(oneCity)  

  return (
    <div className='ShowCityWheatheContainer'>
       <h3 className='ShowCityWheatheContainer__name'> {city[0]?.name}</h3>
       {(city[0]?.msg)
       ?<div className='noCity'><h3>The city does not exist</h3></div>
       :(city.length===0)
          ?<div className='noCity'><h3>Add a city</h3></div>
          : city.map((oneCity,index)=>{
            return(
              <div className= 'ShowCityWheatheContainer__div' key={index}>              
                <h5 className='ShowCityWheatheContainer__div__country'> {oneCity?.country}</h5>
                <h5 className='ShowCityWheatheContainer__div__state'> {oneCity?.state}</h5>
                <button className="ShowCityWheatheContainer__div__button" onClick={()=>handleLonLat(oneCity)}>select</button>
              </div>
            ) 
      })}
    </div>
  )
}

export default ShowCityWheather