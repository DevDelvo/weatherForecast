import React from 'react';

const TodayWeatherCard = (props) => {
    const { data, isLoaded } = props;
    if (isLoaded) {
        const city = data.name;
        const { temp, humidity, temp_min, temp_max } = data.main;
        const windSpeed = data.wind.speed;
        const weather = data.weather;
        console.log('todays weather data: ', data);

        return (
            <div className="today-weather-card">
                Today's Weather
                <span>City: {city}</span>
                <span>Temp: {temp}</span>
                <span>High: {temp_max}</span>
                <span>Low: {temp_min}</span>
                <span>humidity: {humidity}</span>
            </div>
        )
    } else {
        return null;
    }
}

export default TodayWeatherCard;