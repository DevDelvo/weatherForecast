import React from 'react';
import { getDate, getCelsius } from '../dateData'

const WeatherCard = (props) => {
    const { data, displayFahrenheit, changeForecastDisplay } = props;
    const dateObj = getDate(data[4].dt_txt);
    const temp = data[0].main.temp;
    const maxTemp = Math.floor(data[4].main.temp_max);
    const minTemp = Math.floor(data[4].main.temp_min);
    const weather = data[4].weather[0];
    // const weatherDescription = data[3].weather[0].description;
    const weatherIcon = `http://openweathermap.org/img/w/${weather.icon}.png`
    // console.log(dateObj);
    // console.log(data);
    // console.log(weather);
    return (
        <div className="weather-card" onClick={changeForecastDisplay}>
            <div>{dateObj.day}</div>
            <div>{dateObj.hours}:{dateObj.minutes}</div>
            <div><img src={weatherIcon} /></div>
            <div>{temp}°</div>
            <div>{maxTemp}° / {minTemp}°</div>
            <div></div>
        </div>
    )
}

export default WeatherCard;