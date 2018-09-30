import React from 'react';
import { getDateFromString } from '../dateData'

const WeatherCard = (props) => {
    const { data, displayFahrenheit, changeForecastDisplay, getCelsius } = props;
    const dateObj = getDateFromString(data[4].dt_txt);
    let temp = data[0].main.temp;
    let maxTemp = Math.floor(data[4].main.temp_max);
    let minTemp = Math.floor(data[4].main.temp_min);
    if (!displayFahrenheit) {
        temp = getCelsius(temp);
        maxTemp = getCelsius(maxTemp);
        minTemp = getCelsius(minTemp);
    }

    const weather = data[4].weather[0];
    const weatherDescription = data[4].weather[0].description;
    const weatherIcon = `http://openweathermap.org/img/w/${weather.icon}.png`
    // console.log(dateObj);
    // console.log(data);
    // console.log(weather);
    return (
        <div className="weather-card" onClick={changeForecastDisplay}>
            <div className="weather-card-day">{dateObj.day}</div>
            <div>{dateObj.hours}:{dateObj.minutes}</div>
            <div><img src={weatherIcon} alt={weatherDescription} /></div>
            <div className="weather-card-temperature">{temp}°</div>
            <div>{maxTemp}° / {minTemp}°</div>
            <div></div>
        </div>
    )
}

export default WeatherCard;