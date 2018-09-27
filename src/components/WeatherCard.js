import React from 'react';
import { getDate } from '../dateData';
// import { getDate } from '../dateData'

const getDateArray = (date) => {
    return date.slice(0,10).split("-");
}

const WeatherCard = (props) => {
    const { data } = props;
    const dateArr = getDateArray(data[0].dt_txt);
    const temp = data[0].main.temp;
    const maxTemp = data[0].main.temp_max;
    const minTemp = data[0].main.temp_min;
    const weather = data[0].weather[0];
    const weatherDescription = data[0].weather[0].description;
    const weatherIcon = `http://openweathermap.org/img/w/${weather.icon}.png`
    // console.log(data);
    // console.log(weather);
    return (
        <div className="weather-card">
            <div>{data.dt_txt}</div>
            <div>Temp: {temp}</div>
            <div>High: {maxTemp}</div>
            <div>Low: {minTemp}</div>
        </div>
    )
}

export default WeatherCard;