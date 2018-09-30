import React from 'react';
import { getDateFromString } from '../dateData'

class DetailedForecastCard extends React.Component {
    state ={
        displayFahrenheit: true,
    }

    displayedForecast = (currentForecastDisplay) => {
        
        return currentForecastDisplay.map(forecast => {
            const dayObj = getDateFromString(forecast.dt_txt);
            const { toggleFahrenheit, displayFahrenheit, getCelsius } = this.props;
            let temp = forecast.main.temp;
            let temp_max = forecast.main.temp_max;
            let temp_min = forecast.main.temp_min;
            let fahrenheitStyle = "temperature-toggle-button active";
            let celsiusStyle = "temperature-toggle-button ";
            if (!displayFahrenheit) {
                fahrenheitStyle = "temperature-toggle-button";
                celsiusStyle = "temperature-toggle-button active";
                temp = getCelsius(temp);
                temp_max = getCelsius(temp_max);
                temp_min = getCelsius(temp_min);
            }
            return <div className="forecast-display-card" key={forecast.dt_txt}>
                    <span>
                        <span>
                            <article className="forecast-time">{dayObj.hours}:{dayObj.minutes}</article>
                            <img className="current-forecast-icon" src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`} alt={forecast.weather[0].description} />
                            <div className="current-forecast-temperature-container">
                                <article className="forecast-temperature">{temp}</article>
                                <div className="temperature-toggle"><span className={fahrenheitStyle} onClick={toggleFahrenheit}>°F</span> | <span className={celsiusStyle} onClick={toggleFahrenheit}>°C</span></div>
                            </div>
                        </span>
                        <article className="weather-high-low">{Math.floor(temp_max)}° / {Math.floor(temp_min)}°</article>
                        <span>{forecast.weather[0].description}</span>
                    </span>
                    <span className="forecast-humidity-wind">
                        <article>Hum: {forecast.main.humidity}%</article>
                        <article>Wind: {forecast.wind.speed}mph</article>
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

export default DetailedForecastCard;
