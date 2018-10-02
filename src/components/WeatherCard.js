import React from 'react';
import PropTypes from 'prop-types';
import '../styles/WeatherCard.css';

import { getDateFromString } from '../dateData'

const WeatherCard = (props) => {
    const { data, displayFahrenheit, changeForecastDisplay, getCelsius, currentForecastDisplay } = props;
    const dateObj = getDateFromString(data[4].dt_txt);
    const weather = data[4].weather[0];
    const weatherDescription = data[4].weather[0].description;
    const weatherIcon = `https://openweathermap.org/img/w/${weather.icon}.png`
    let temp = data[4].main.temp;
    let maxTemp = Math.round(data[4].main.temp_max);
    let minTemp = Math.round(data[4].main.temp_min);

    if (!displayFahrenheit) {
        temp = getCelsius(temp);
        maxTemp = getCelsius(maxTemp);
        minTemp = getCelsius(minTemp);
    }

    return (
        <article className={`weather-card ${currentForecastDisplay === data ? 'weather-card-active' : ''}`} onClick={changeForecastDisplay}>
            <div className="weather-card-day">{dateObj.day}</div>
            <div><img src={weatherIcon} alt={weatherDescription} /></div>
            <div className="weather-card-temperature">{temp}°</div>
            <div>{maxTemp}° / {minTemp}°</div>
            <div></div>
        </article>
    )
}



WeatherCard.propTypes = {
    displayFahrenheit: PropTypes.bool.isRequired,
    getCelsius: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    currentForecastDisplay: PropTypes.array,
    changeForecastDisplay: PropTypes.func.isRequired,
};

export default WeatherCard;