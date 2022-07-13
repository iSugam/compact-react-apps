import React, { useEffect, useState } from 'react'
import "./weather.css"

const Weather = () => {

    const [searchValue, setSearchValue] = useState("bangalore");
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
    <div className='weather-container'>
        <div className='search-container'>
            <input
                onChange={searchChange}
                type="search" 
                name="search" 
                id="search"
                value={searchValue}
                className="searchInput"
            />
            <button onClick={getWeatherData} className="search-btn">Search</button>
        </div>

        {/* Weather Show case */}
       {   
            <div className='weather-reports-container'>

            <div className="weather-reports">
                <div className="weather-deg-city">
                    <div className='deg'>
                        <h3>Now</h3>
                        <h1>{weatherData.deg}&deg;</h1>
                        <h3>Feels Like</h3>
                        <h2>{weatherData.feels_like}&deg;</h2>
                    </div>
            
                    <div className='weather-city'>
                        <h2>{weatherData.name}</h2>
                        <h3>{weatherData.country}</h3>
                        <div className='weather-mood'>
                            <i className="fa-solid fa-cloud-sun"></i>
                            <h4>{weatherData.weatherInfo}</h4>
                        </div>
                        <p>04:25 PM</p>
                    </div>
                </div>  

            </div>


            {/* Detailed Weather Information */}
            <div className='weather-detailed-info'>

                <div className='d-flex aftr sc-w'>
                    <p>Min</p> <p>{weatherData.temp_min}&deg;</p>
                </div>
                <div className='d-flex aftr sc-w'>
                    <p>Max</p> <p>{weatherData.temp_max}&deg;</p>
                </div>

                <div className='d-flex aftr sc-w'>
                    <p>Pressure</p>
                    <p>{weatherData.pressure}</p>
                </div>
                <div className='d-flex aftr sc-w'>
                    <p>Humidity</p>
                    <p>{weatherData.humidity}</p>
                </div>
                <div className='d-flex aftr sc-w'>
                    <p>Wind Speed</p>
                    <p>{weatherData.windSpeed}</p>
                </div>

                <div className='d-flex aftr sc-w'>
                    <p>Sea Level</p>
                    <p>{weatherData.sea_level}</p>
                </div>

                <div className='d-flex aftr sc-w'>
                    <p>Ground Level</p>
                    <p>{weatherData.ground_level}</p>
                </div>

                <div className='d-flex aftr sc-w'>
                    <p>Gust</p>
                    <p>{weatherData.gust}</p>
                </div>

            </div> 

            <div className='extra-weather-info'>

                <h2>Extra Info</h2>   

                <div className='cloud-details'>
                    <div className='c-details-1 mt-3'>
                        <h3>{weatherData.description}</h3>
                        <h3><i className="fa-solid fa-cloud-sun"></i></h3>  
                    </div>

                    <div className='c-details-2 mt-3'>
                        <h3>Longitude</h3>
                        <h3>{weatherData.lon}</h3>
                    </div>

                    <div className='c-details-2 mt-3'>
                        <h3>Latitude</h3>
                        <h3>{weatherData.lat}</h3>
                    </div>
                </div>


            </div> 

            </div>
        }
    </div>
  )
}

export default Weather