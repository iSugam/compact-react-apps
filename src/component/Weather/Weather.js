import React, { useEffect, useState } from 'react'
import "./weather.css"

const Weather = () => {

    const [searchValue, setSearchValue] = useState("bangalore");
    const [weatherData, setWeatherData] = useState({})

    const getWeatherData = async () => {
        try {
            //  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&${process.env.REACT_APP_OPENWEATHER_KEY}`)
            //  const city = await response.json()
            //  console.log(city)

            //  const {id, main: weatherInfo, description} = city.weather[0];
            //  const {temp: temperature, feels_like, temp_min, temp_max, pressure, humidity, sea_level, ground_level} = city.main;
            //  const {windSpeed, deg} = city.wind;
            //  const {country, sunrise, sunset} = city.sys
            //  const name = city.name

            //  const allWeatherReport = {
            //     id, weatherInfo, description,
            //     temperature, feels_like, temp_min, temp_max, pressure, humidity,
            //     windSpeed, deg,
            //     country, sunrise, sunset,
            //     name
            //  }
            //  setWeatherData(allWeatherReport)

        } catch (error) {
             console.log(error.message);
        }
     } 

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
        <div className='weather-reports-container'>

            <div className="weather-reports">
                <div className="weather-deg-city">
                    <div className='deg'>
                        <h3>Now</h3>
                        <h1>26&deg;</h1>
                        <h3>Feels Like</h3>
                        <h2>25&deg;</h2>
                    </div>
            
                    <div className='weather-city'>
                        <h2>Bangalore</h2>
                        <h3>India</h3>
                        <div className='weather-mood'>
                            <i className="fa-solid fa-cloud-sun"></i>
                            <h4>Clouds</h4>
                        </div>
                        <p>04:25 PM</p>
                    </div>
                </div>  

            </div>

            <div className='weather-detailed-info'>

                <div className='d-flex aftr sc-w'>
                    <p>Min</p> <p>23&deg;</p>
                </div>
                <div className='d-flex aftr sc-w'>
                    <p>Max</p> <p>23&deg;</p>
                </div>

                <div className='d-flex aftr sc-w'>
                    <p>Pressure</p>
                    <p>995</p>
                </div>
                <div className='d-flex aftr sc-w'>
                    <p>Humidity</p>
                    <p>67</p>
                </div>
                <div className='d-flex aftr sc-w'>
                    <p>Wind Speed</p>
                    <p>2.98</p>
                </div>

                <div className='d-flex aftr sc-w'>
                    <p>Sea Level</p>
                    <p>995</p>
                </div>

                <div className='d-flex aftr sc-w'>
                    <p>Ground Level</p>
                    <p>980</p>
                </div>

                <div className='d-flex aftr sc-w'>
                    <p>Gust</p>
                    <p>4.98</p>
                </div>

            </div> 

            <div className='extra-weather-info'>

                <h2>Extra Info</h2>   

                <div className='cloud-details'>
                    <div className='c-details-1 mt-3'>
                        <h3>scattered clouds</h3>
                        <h3><i className="fa-solid fa-cloud-sun"></i></h3>  
                    </div>

                    <div className='c-details-2 mt-3'>
                        <h3>Longitude</h3>
                        <h3>997</h3>
                    </div>

                    <div className='c-details-2 mt-3'>
                        <h3>Latitude</h3>
                        <h3>997</h3>
                    </div>
                </div>


            </div> 

        </div>
    </div>
  )
}

export default Weather