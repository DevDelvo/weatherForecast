import React from 'react';
import { getDate } from '../dateData';

const TodayWeatherCard = (props) => {
    const { data, isLoaded } = props;
    if (isLoaded) {
        // const todaysDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
        const todaysDate = getDate();
        const city = data.name;
        const { temp, humidity, temp_min, temp_max } = data.main;
        const weather = data.weather[0];
        const weatherIcon = `http://openweathermap.org/img/w/${weather.icon}.png`
        const weatherDesc = weather.description;
        const wind = data.wind;
        console.log('todays weather data: ', data);

        return (
            <div className="today-weather-card">
                <div className="today-weather-info">
                    <div>{city}</div>
                    <div><span>{todaysDate}</span></div>
                    <div>
                        <img className="today-weather-icon" src={weatherIcon} alt={weatherDesc} />
                        <div className="today-weather-temperature-container">{temp}°F | °C</div>
                    </div>
                    <div>{Math.floor(temp_max)}° / {Math.floor(temp_min)}°</div>
                    <div>{weatherDesc}</div>
                </div>
                <div className="today-weather-togglebox">
                    <div>Humidity: {humidity}%</div>
                    <div>Wind: {wind.speed} mph</div>
                </div>
            </div>
        )
    } else {
        return null;
    }
}

export default TodayWeatherCard;