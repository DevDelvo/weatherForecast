import React from 'react';

const TodayWeatherCard = (props) => {
    const { data, isLoaded } = props;
    if (isLoaded) {
        const today = new Date();
        const todaysDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
        const city = data.name;
        const { temp, humidity, temp_min, temp_max } = data.main;
        const windSpeed = data.wind.speed;
        const weather = data.weather;
        console.log('todays weather data: ', data);

        return (
            <div className="today-weather-card">
                Today's Date: <span>{todaysDate}</span>
                <div>City: {city}</div>
                <div>Temp: {temp}</div>
                <div>High: {temp_max}</div>
                <div>Low: {temp_min}</div>
                <div>humidity: {humidity}</div>
            </div>
        )
    } else {
        return null;
    }
}

export default TodayWeatherCard;