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
                            <article>{dayObj.hours}:{dayObj.minutes}</article>
                            <img className="current-forecast-icon" src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`} alt={forecast.weather[0].description} />
                            <div className="current-forecast-temperature-container">
                                <article>{forecast.main.temp}<span>°F</span> | <span>°C</span></article>
                            </div>
                        </span>
                        <article>{Math.floor(forecast.main.temp_max)}° / {Math.floor(forecast.main.temp_min)}°</article>
                        <span>{forecast.weather[0].description}</span>
                    </span>
                    <span className="forecast-weather-togglebox">
                        <article>Hum: {forecast.main.humidity}%</article>
                        <article>Wind: {forecast.wind.speed} mph</article>
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
                        <article>{dayObj.day}, {dayObj.month} {dayObj.date}</article>
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
