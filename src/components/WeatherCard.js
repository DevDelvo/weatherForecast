import React from 'react';

const getDate = (date) => {
    return date.slice(0,10);
}

const WeatherCard = (props) => {
    const { data } = props;
    const date = getDate(data[0].dt_txt);
    const temp = data[0].main.temp;
    const maxTemp = data[0].main.temp_max;
    const minTemp = data[0].main.temp_min;
    const weather = data[0].weather[0].main;
    const weatherDescription = data[0].weather[0].description;
    const weatherIcon = data[0].weather[0].icon;

    // console.log(data[0]);
    // console.log(weather);
    return (
        <div className="weather-card">
            <div>Date: {date}</div>
            <div>Temp: {temp}</div>
            <div>High: {maxTemp}</div>
            <div>Low: {minTemp}</div>
        </div>
    )
}

export default WeatherCard;