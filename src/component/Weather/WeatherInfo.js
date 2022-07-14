import React from 'react'

const WeatherInfo = ({weatherData}) => {

    let date = new Date();
    let hours = date.getHours()
    let min = date.getMinutes()

    let sunrise = new Date(weatherData.sunrise * 1000);
    let sunset = new Date(weatherData.sunset * 1000);

    let windSpeed = ((weatherData.windSpeed * 3600) / 1000).toFixed(2)
  return (
    <div>
        {/* Weather Show case */}
       {   
            <div className='weather-reports-container'>

            <div className="weather-reports">
                <div className="weather-deg-city">
                    <div className='deg'>
                        <h3>Now</h3>
                        <h1>{parseFloat(weatherData.temperature).toFixed(0)}&deg;c</h1>
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
                        <p>{date.toLocaleDateString("en-in")}</p>
                        <p>{hours}:{min} {hours>12? "PM":"AM"}</p>
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
                    <p>{weatherData.humidity}%</p>
                </div>
                <div className='d-flex aftr sc-w'>
                    <p>Wind</p>
                    <p>{windSpeed}km/h</p>
                </div>

                <div className='d-flex aftr sc-w'>
                    <p>Sea Level</p>
                    <p>{weatherData.sea_level===undefined? "NA": weatherData.sea_level}</p>
                </div>

                <div className='d-flex aftr sc-w'>
                    <p>Ground Level</p>
                    <p>{weatherData.grnd_level===undefined? "NA" : weatherData.grnd_level}</p>
                </div>

                <div className='d-flex aftr sc-w'>
                    <p>Gust</p>
                    <p>{weatherData.gust === undefined? "NA" : weatherData.gust}</p>
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
                        <h3>{parseFloat(weatherData.lon).toFixed(2)}</h3>
                    </div>

                    <div className='c-details-2 mt-3'>
                        <h3>Latitude</h3>
                        <h3>{parseFloat(weatherData.lat).toFixed(2)}</h3>
                    </div>

                    <div className='c-details-3 mt-3'>
                        <h3>Sunrise</h3>
                        <p>{sunrise.getHours()}:{sunrise.getMinutes()} AM</p>
                    </div>
                    <div className='c-details-4 mt-3'>
                        <h3>Sunset</h3>
                        <p>{sunset.getHours()}:{sunset.getMinutes()} PM</p>
                    </div>
                </div>


            </div> 

            </div>
        }
    </div>
  )
}

export default WeatherInfo