import React, { useEffect, useState } from 'react'
import "./weather.css";
import WeatherInfo from './WeatherInfo';

// Random cities
const randomLocations = ["Bangalore", "Tokyo", "London", "New york", "Mumbai", "Chicago", 
                        "Paris", "Berlin", "Jaipur", "Istanbul", "Sydney", "Toronto", "Seoul",
                        "Beijing", "Boston", "Osaka", "Moscow", "Pune", "Dallas", "Dubai", "Montreal",
                        "San Diego", "Seattle", "Las Vegas"]
const getLocation = (locations) => {
    const loc = Math.round(Math.random() * (randomLocations.length - 1))
    console.log(loc);
    return randomLocations[loc]
}

const Weather = () => {

    const [searchValue, setSearchValue] = useState(getLocation(randomLocations));
    const [weatherData, setWeatherData] = useState({})

    const getWeatherData = async () => {
        try {
             const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&${process.env.REACT_APP_OPENWEATHER_KEY}`)
             const city = await response.json()

             const {id, main: weatherInfo, description} = city.weather[0];
             const {temp: temperature, feels_like, temp_min, temp_max, pressure, humidity, sea_level, grnd_level} = city.main;
             const {speed: windSpeed, deg, gust} = city.wind;
             const {country, sunrise, sunset} = city.sys
             const name = city.name
             const {lon, lat} = city.coord

             const allWeatherReport = {
                id, weatherInfo, description,
                temperature, feels_like, temp_min, temp_max, pressure, humidity,
                windSpeed, deg, gust,
                lon, lat, sea_level, grnd_level,
                country, sunrise, sunset,
                name
             }
             setWeatherData(allWeatherReport)
             console.log(gust)

        } catch (error) {
             console.log(error.message);
        }
     } 

    // Use Effect for geting data on button click
    useEffect(() => {
        getWeatherData()
    }, [])

    const searchChange = (e) => {
        const value = e.target.value
        setSearchValue(value)
    }

  return (
    <div className='weather-container' style={{ backgroundImage:`url(../assets/images/weather/weather.jpg)`}}>
        <h4 style={(window.innerWidth)<1000? {display:"none"}: {display:"block"}}>
            Note: Firefox doesn't support backdrop-filter, so you might not be able to see blur effect if you are using Firefox.
        </h4>

        <div className='search-container'>
            <input
                onChange={searchChange}
                type="search" 
                name="search" 
                id="search"
                value={searchValue}
                className="searchInput"
                autoFocus
            />
            <button onClick={getWeatherData} className="search-btn">Search</button>
        </div>
        <WeatherInfo weatherData={weatherData}/>
    </div>
  )
}

export default Weather