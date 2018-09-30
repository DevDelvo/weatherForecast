import React from 'react';
import { getDateFromString, getCelsius } from '../dateData';

const TodayWeatherCard = (props) => {
    const { data, todayForecast, displayFahrenheit, toggleFahrenheit } = props;
    if (todayForecast) {
        // const todaysDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
        const todaysDate = getDateFromString();
        const city = data.name;
        const { humidity,  } = data.main;
        const weather = data.weather[0];
        const weatherIcon = `http://openweathermap.org/img/w/${weather.icon}.png`;
        const weatherDesc = weather.description;
        const wind = data.wind;
        let { temp, temp_min, temp_max } = data.main;
        let fahrenheitStyle;
        let celsiusStyle;
        
        if (displayFahrenheit) {
            fahrenheitStyle = "temperature-toggle-button active";
            celsiusStyle = "temperature-toggle-button";
        } else {
            fahrenheitStyle = "temperature-toggle-button";
            celsiusStyle = "temperature-toggle-button active";
            temp = getCelsius(temp);
            temp_min = getCelsius(temp_min);
            temp_max = getCelsius(temp_max);
        }


        return (
            <div className="today-weather-card">
                <div className="today-weather-info">
                    <article className="city">{city}</article>
                    <div className="date"><article>{todaysDate}</article></div>
                    <div>
                        <img className="today-weather-icon" src={weatherIcon} alt={weatherDesc} />
                        <div className="today-weather-temperature-container">
                            <article className="today-temperature">{temp}</article>
                            <div className="temperature-toggle"><span className={fahrenheitStyle} onClick={toggleFahrenheit}>°F</span> | <span className={celsiusStyle} onClick={toggleFahrenheit}>°C</span></div>
                        </div>
                    </div>
                    <article className="weather-high-low">{Math.floor(temp_max)}° / {Math.floor(temp_min)}°</article>
                    <article className="today-weather-description">{weatherDesc}</article>
                </div>
                <div className="today-weather-togglebox">
                    <article>Humidity: {humidity}%</article>
                    <article>Wind: {wind.speed}mph</article>
                </div>
            </div>
        )
    } else {
        return null;
    }
}

export default TodayWeatherCard;