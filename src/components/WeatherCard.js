import React from 'react';
import { getDate } from '../dateData'

const WeatherCard = (props) => {
    const { data } = props;
    const dateObj = getDate(data[0].dt_txt);
    const temp = data[0].main.temp;
    const maxTemp = data[0].main.temp_max;
    const minTemp = data[0].main.temp_min;
    const weather = data[0].weather[0];
    const weatherDescription = data[0].weather[0].description;
    const weatherIcon = `http://openweathermap.org/img/w/${weather.icon}.png`
    console.log(dateObj);
    console.log(data);
    console.log(weather);
    return (
        <div className="weather-card">
            <div>{dateObj.day}</div>
            <div><img src={weatherIcon} /></div>
            <div>{temp}</div>
            <div>{maxTemp} / {minTemp}</div>
            <div></div>
        </div>
    )
}

export default WeatherCard;