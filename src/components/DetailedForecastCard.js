import React from 'react';
import { getDateFromString, getCelsius } from '../dateData'

class DetailedForecastCard extends React.Component {
    state ={
        displayFahrenheit: true,
    }

    displayedForecast = (currentForecastDisplay) => {
        
        return currentForecastDisplay.map(forecast => {
            return <div className="current-forecast-display-card">
                    <span>
                        <span>
                            <article></article>
                            <img className="today-weather-icon" src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`} alt={forecast.weather[0].description} />
                            <span className="today-weather-temperature-container">{forecast.main.temp}<span><span>°F</span> | <span>°C</span></span></span>
                        </span>
                        <span>{Math.floor(forecast.main.temp_max)}° / {Math.floor(forecast.main.temp_min)}°</span>
                        <span>{forecast.weather[0].description}</span>
                    </span>
                    <span className="today-weather-togglebox">
                        <span>Humidity: {forecast.main.humidity}%</span>
                        <span>Wind: {forecast.wind.speed} mph</span>
                    </span>
                   </div>
        })
        
    }

    render() {
        const { changeForecastDisplay, currentForecastDisplay, forecastDisplay } = this.props;
        // const dayObj = getDateFromString(currentForecastDisplay[0].dt_txt);
        return forecastDisplay === true ? (
            <div className="detailed-forecast-card" onClick={changeForecastDisplay}>
                <div className="detailed-forecast-card-info">
                    <article>City</article>
                    <div><span>The Date</span></div>
                    <div className="current-forecast-display-container">
                        {
                            this.displayedForecast(currentForecastDisplay)
                        }
                    </div>
                </div>
            </div>
        )
        : null;
    }
}

export default DetailedForecastCard;
