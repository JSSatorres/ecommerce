
interface cityInfo {
    lon:number,
    lat:number,
    name:string,
    country:string,
    state:string
}

const api_key =  process.env.REACT_APP_APITOKEN;

export const wheatherApiCity = async (city:string)=>{

    const apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=10&appid=${api_key}`
    
    const response = await fetch(apiUrl)
    const data = await response.json()
    console.log(data);

    if (data.length===0) {
        return [{msg:"this city does not exist"}]
    }
    
    const allMatchCities = data.map((city:cityInfo)=>{
        const{lon, lat, name, country, state,...rest} = city
        return {lon, lat, name, country, state,rest}
    })
    
   return  allMatchCities
}

export const wheatherApiLonLat = async (city:cityInfo)=>{
    
    const {lat,lon} =city
    const apiUrl = ` https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`
    
    const response = await fetch(apiUrl)
    const data = await response.json()
    console.log(data);

    const {name ,base} =data
    const {feels_like,humidity,pressure,temp} = data.main
    const {main, description} = data.weather[0]
    const {speed } =data.wind
 

    return{name,base,feels_like,humidity,pressure,temp,main, description,speed,lat,lon}
}




