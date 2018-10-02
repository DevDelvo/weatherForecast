import React, { Component } from 'react';
import logo from './sunny.svg';
import './App.css';

import TodayWeatherCard from './components/TodayWeatherCard';
import WeatherCard from './components/WeatherCard';
import DetailedForecastCard from './components/DetailedForecastCard';
import Form from './components/Form';
import dotenv from 'dotenv';
dotenv.config();

const getDays = (weatherDataList) => {
  const days = [];
  let dateText = weatherDataList[0].dt_txt.slice(0,10);
  let day = [];

  for (let i = 0; i < weatherDataList.length; i++) {
    const current = weatherDataList[i].dt_txt.slice(0,10);
    if (dateText === current) {
      day.push(weatherDataList[i]);
    } else {
      days.push(day);
      day = [];
      day.push(weatherDataList[i]);
      dateText = weatherDataList[i].dt_txt.slice(0,10);
    }
  }
  days.push(day)
  return days.length > 5 ? days.slice(1) : days;
}

const initialState = {
  inputMessage: 'Enter country code and zip code. Default is US if no country code.',
    displayFahrenheit: true,
    today: {},
    days: [],
    todayForecast: false,
    currentForecastDisplay: [],
    forecastDisplay: false,
}

class App extends Component {
  state = initialState;

  makeAPIRequest = async (forecast, country, zip, units) => {
    country = country || 'US';
    const apiLink = `https://api.openweathermap.org/data/2.5/${forecast}?`
    const params = {
      zip: zip + ',' + country,
      units: 'imperial',
      appid: process.env.REACT_APP_WEATHER_API_KEY,
      
    }
    const paramString = Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
    const response = await fetch(apiLink + paramString);
    const weatherData = await response.json();
    return weatherData;
  }

  getWeather = async (e) => {
    e.preventDefault();
    const country = e.target.country.value;
    const zipCode = e.target.zipCode.value;

    const todayWeatherData = await this.makeAPIRequest('weather', country, zipCode);
    const weatherForecastData = await this.makeAPIRequest('forecast', country, zipCode);

    if (parseInt(todayWeatherData.cod, 10) === 200) {
      const today = todayWeatherData;
      const days = getDays(weatherForecastData.list);
      this.setState({
      today,
      days,
      todayForecast: true,
      inputMessage: 'Enter country code and zip code. Default is US if no country code.',
      forecastDisplay: false,
      });
    } else {
      this.setState({
        initialState, inputMessage: `Please enter proper country abbreviation and zip code. Or try again at another time.`
      })
    }
  }

  toggleFahrenheit = () => {
    this.setState({
      ...this.state, displayFahrenheit: !this.state.displayFahrenheit
    })
  }

  getCelsius = (temp) => {
    return Math.round((temp - 32) * .5556);
  }

  changeForecastDisplay = (data) => {
    this.setState({
      ...this.state, 
      todayForecast: false, 
      forecastDisplay: true, 
      currentForecastDisplay: data
    })
  }

  render() {
    const { inputMessage, today, days, todayForecast, displayFahrenheit, currentForecastDisplay, forecastDisplay } = this.state
    const city = today.name;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Weather App</h1>
        </header>
        <div className="weather-wrapper">
          <div className="form-container">
            <h3 className="input-message">{inputMessage}</h3>
            <Form getWeather={this.getWeather} />
          </div>
          <div className="today-weather-card-container">
            <TodayWeatherCard todayForecast={todayForecast} 
                              toggleFahrenheit={this.toggleFahrenheit}
                              displayFahrenheit={displayFahrenheit} 
                              getCelsius={this.getCelsius}
                              data={today} />
          </div>
          <div className="detailed-forest-card-container">
            <DetailedForecastCard toggleFahrenheit={this.toggleFahrenheit} 
                                  city={city}
                                  displayFahrenheit={displayFahrenheit} 
                                  getCelsius={this.getCelsius}
                                  currentForecastDisplay={currentForecastDisplay} 
                                  forecastDisplay={forecastDisplay} />
          </div>
          <div className="weather-card-container">
          {
            days.map((day) => <WeatherCard key={day[0].dt_txt} 
                                                displayFahrenheit={displayFahrenheit} 
                                                getCelsius={this.getCelsius}
                                                data={day} 
                                                currentForecastDisplay={currentForecastDisplay}
                                                changeForecastDisplay={() => this.changeForecastDisplay(day)} />)
          }
          </div>
        </div>
      </div>
    ) 
  }
}

export default App;
