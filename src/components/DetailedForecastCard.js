import React from 'react';
import PropTypes from 'prop-types';
import { getDateFromString } from '../dateData';

class DetailedForecastCard extends React.Component {
    state ={
        displayFahrenheit: true
    }

    displayedForecast = (currentForecastDisplay) => {
        
        return currentForecastDisplay.map(forecast => {
            const dayObj = getDateFromString(forecast.dt_txt);
            const { toggleFahrenheit, displayFahrenheit, getCelsius } = this.props;
            let temp = forecast.main.temp;
            let temp_max = forecast.main.temp_max;
            let temp_min = forecast.main.temp_min;
            if (!displayFahrenheit) {
                temp = getCelsius(temp);
                temp_max = getCelsius(temp_max);
                temp_min = getCelsius(temp_min);
            }

            return <article className="forecast-display-card" key={forecast.dt_txt}>
                    <span>
                        <span>
                            <article className="forecast-time">{dayObj.hours}:{dayObj.minutes}</article>
                            <img className="current-forecast-icon" src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`} alt={forecast.weather[0].description} />
                            <div className="current-forecast-temperature-container">
                                <article className="forecast-temperature">{temp}</article>
                                <div className="temperature-toggle">
                                    <span className={`temperature-toggle-button ${displayFahrenheit ? 'active' : ''}`} onClick={toggleFahrenheit}>°F</span> | <span className={`temperature-toggle-button ${displayFahrenheit ? '' : 'active'}`} onClick={toggleFahrenheit}>°C</span>
                                </div>
                            </div>
                        </span>
                        <article className="weather-high-low">{Math.round(temp_max)}° / {Math.round(temp_min)}°</article>
                        <span>{forecast.weather[0].description}</span>
                    </span>
                    <span className="forecast-humidity-wind">
                        <article>Hum: {forecast.main.humidity}%</article>
                        <article>Wind: {forecast.wind.speed}mph</article>
                    </span>
                   </article>
        })
        
    }

    render() {
        const { city, changeForecastDisplay, currentForecastDisplay, forecastDisplay } = this.props;
        if (forecastDisplay) {
            const dayObj = currentForecastDisplay.length ? getDateFromString(currentForecastDisplay[0].dt_txt) : null;
            return  (
                <div className="detailed-forecast-card" onClick={changeForecastDisplay}>
                    <div className="detailed-forecast-card-info">
                        <article className="city">{city}</article>
                        <article className="date">{dayObj.day}, {dayObj.month} {dayObj.date}</article>
                        <div className="forecasts-display-container">
                            {
                                this.displayedForecast(currentForecastDisplay)
                            }
                        </div>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}

DetailedForecastCard.propTypes = {
    toggleFahrenheit: PropTypes.func.isRequired, 
    displayFahrenheit: PropTypes.bool.isRequired,
    getCelsius: PropTypes.func.isRequired,
    city: PropTypes.string,
    currentForecastDisplay: PropTypes.arrayOf(PropTypes.object).isRequired,
    forecastDisplay: PropTypes.bool.isRequired
}

export default DetailedForecastCard;
