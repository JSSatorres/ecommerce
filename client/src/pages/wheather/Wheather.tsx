import React, { useState } from 'react'
import CityResult from '../../components/cityResult'
import CitySearch from '../../components/citySearch'
import ShowCityWheather from '../../components/showCityWheather'
import {wheatherApiCity,wheatherApiLonLat} from '../../helper/wheaterApi'
import { cityDataToSearch , cityDataToShowTypes} from '../../types'
import"./wheather.scss"

const INITIAL_CITYDATATOSHOW={
  name:"",
  base:"",
  feels_like:0,
  humidity:0,
  pressure:0,
  temp:0,
  main:"",
  description:"",
  speed:0,
  lat:0,
  lon:0
}

const Wheather = () => {

  const [city, setCity] = useState<Array< cityDataToSearch>>([])
  const [cityDataToShow, setCityDataToShow] = useState<cityDataToShowTypes>(INITIAL_CITYDATATOSHOW)
 
  const cityNameData =  async(newCity:string)=>{
    const wheatherData =  await wheatherApiCity(newCity);
    setCity(wheatherData) 
    setCityDataToShow(INITIAL_CITYDATATOSHOW)     
  }

  const cityWeatherResult = async (cityToShow: cityDataToSearch)=>{
    const allDataCityToShow = await wheatherApiLonLat(cityToShow)
    setCityDataToShow(allDataCityToShow)
  }

  return (
    <div className='wheather__container'>
      <div className='wheather__container__searchCity'>
        <CitySearch cityNameData={cityNameData}/>
      </div>
      {(cityDataToShow.name==="")
        ? <div className='wheather__container__showCities'>
          <ShowCityWheather city={city} cityWeatherResult={cityWeatherResult}/>
          </div> 
        : <div className='wheather__container__result'>
            <CityResult cityDataToShow={cityDataToShow}/> 
          </div>
          
      } 
    </div>
  )
}

export default Wheather