import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { config } from './config'
import TodayWeatherCard from './components/TodayWeatherCard'
import WeatherCard from './components/WeatherCard'
import Form from './components/Form'

const API_KEY = config.apiKey;

const getDays = (weatherDataList) => {
  let days = [];
  for (let i = 0; i < weatherDataList.length; i+=8) {
    days.push(weatherDataList.slice(i, i + 8));
  }
  return days;
}

class App extends Component {
  state = {
    today: {},
    days: [],
    isLoaded: false,
    error: ''
  };

  getWeather = async (e) => {
    e.preventDefault();
    
    const country = e.target.country.value;
    const zipcode = e.target.zipcode.value;

    const todayWeatherCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipcode},${country}&appid=${API_KEY}`);
    const weatherForecastAPICall = await fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},${country}&appid=${API_KEY}`)
    
    const todayWeatherData = await todayWeatherCall.json();
    const weatherForecastData = await weatherForecastAPICall.json();

    const today = todayWeatherData;
    const days = getDays(weatherForecastData.list);
    if (country && zipcode) {
      this.setState({
      today,
      days,
      isLoaded: true
      });
    } else {
      this.setState({
        ...this.state, error: 'Please enter proper country and zip code.'
      })
    }
    
  }

  render() {
    const { today, days, isLoaded } = this.state
    console.log(today);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Weather App</h1>
        </header>
        <div className="weather-wrapper">
          <div className="form-container">
            <h3>Enter your location</h3>
            <Form getWeather={this.getWeather}/>
          </div>
          <div className="today-weather-card-container">
            <TodayWeatherCard isLoaded={isLoaded} data={today} />
          </div>
          <div className="weather-card-container">
          {
            days.map((day, idx) => <WeatherCard key={idx} data={day}/>)
          }
          </div>
        </div>
      </div>
    ) 
  }
}

export default App;
