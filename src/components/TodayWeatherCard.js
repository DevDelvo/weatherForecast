import React from 'react';
import { getDateFromString } from '../dateData';

const TodayWeatherCard = (props) => {
    const { data, todayForecast, displayFahrenheit, toggleFahrenheit, getCelsius } = props;
    if (todayForecast) {
        const todaysDate = getDateFromString();
        const city = data.name;
        const { humidity,  } = data.main;
        const weather = data.weather[0];
        const weatherIcon = `http://openweathermap.org/img/w/${weather.icon}.png`;
        const weatherDesc = weather.description;
        const wind = data.wind;
        let { temp, temp_min, temp_max } = data.main;
 
        return (
            <article className="today-weather-card">
                <div className="today-weather-info">
                    <h1 className="city">{city}</h1>
                    <div className="date"><h3>{todaysDate}</h3></div>
                    <div>
                        <img className="today-weather-icon" src={weatherIcon} alt={weatherDesc} />
                        <div className="today-weather-temperature-container">
                            <div className="today-temperature">{temp}</div>
                            <div className="temperature-toggle">
                                <span  className={`temperature-toggle-button ${displayFahrenheit ? 'active': ''}`} onClick={toggleFahrenheit}>°F</span> | <span className={`temperature-toggle-button ${displayFahrenheit ? '': 'active'}`} onClick={toggleFahrenheit}>°C</span>
                            </div>
                        </div>
                    </div>
                    <p className="weather-high-low">{Math.floor(temp_max)}° / {Math.floor(temp_min)}°</p>
                    <p className="today-weather-description">{weatherDesc}</p>
                </div>
                <div className="today-weather-togglebox">
                    <h4>Humidity: {humidity}%</h4>
                    <h4>Wind: {wind.speed}mph</h4>
                </div>
            </article>
        )
    } else {
        return null;
    }
}

export default TodayWeatherCard;