import React from 'react';
import { getDateFromString, getCelsius } from '../dateData'

class DetailedForecastCard extends React.Component {
    state ={
        displayFahrenheit: true,
    }

    displayedForecast = (currentForecastDisplay) => {
        
        return currentForecastDisplay.map(forecast => {
            const dayObj = getDateFromString(forecast.dt_txt);
            return <div className="current-forecast-display-card" key={forecast.dt_txt}>
                    <span>
                        <span>
                            <article></article>
                            <article>{dayObj.hours}:{dayObj.minutes}</article>
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
        const { city, changeForecastDisplay, currentForecastDisplay, forecastDisplay } = this.props;
        if (forecastDisplay) {
            const dayObj = currentForecastDisplay !== [] ? getDateFromString(currentForecastDisplay[0].dt_txt) : null;
            console.log(dayObj);
            return  (
                <div className="detailed-forecast-card" onClick={changeForecastDisplay}>
                    <div className="detailed-forecast-card-info">
                        <article>{city}</article>
                        <div><span>{dayObj.day}, {dayObj.month} {dayObj.date}</span></div>
                        <div className="current-forecast-display-container">
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

export default DetailedForecastCard;
