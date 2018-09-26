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

    console.log(data[0]);
    return (
        <div className="weather-card">
            <span>Date: {date}</span>
            <span>Temp: {temp}</span>
            <span>High: {maxTemp}</span>
            <span>Low: {minTemp}</span>
        </div>
    )
}

export default WeatherCard;