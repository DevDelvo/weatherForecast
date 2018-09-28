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
  let dateText = weatherDataList[0].dt_txt.slice(0,10);
  let day = [];

  for (let i = 0; i < weatherDataList.length; i++) {
    let current = weatherDataList[i].dt_txt.slice(0,10);
    if (dateText === current) {
      day.push(weatherDataList[i]);
    } else if (dateText !== current) {
      days.push(day);
      day = [];
      day.push(weatherDataList[i]);
      dateText = weatherDataList[i].dt_txt.slice(0,10);
      
    }
  }
  days.push(day)
  return days;
}

class App extends Component {
  state = {
    inputMessage: 'Enter your location',
    toggleFahrenheit: '',
    today: {},
    days: [],
    isLoaded: false,
    
  };

  getWeather = async (e) => {
    e.preventDefault();
    
    const country = e.target.country.value;
    const zipCode = e.target.zipCode.value;

    const todayWeatherCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${country}&units=imperial&appid=${API_KEY}`);
    const weatherForecastAPICall = await fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${zipCode},${country}&units=imperial&appid=${API_KEY}`)
    
    const todayWeatherData = await todayWeatherCall.json();
    const weatherForecastData = await weatherForecastAPICall.json();
    console.log(todayWeatherCall)
    console.log(weatherForecastAPICall)
    if (todayWeatherCall.status === 200 && weatherForecastAPICall.status === 200) {
      const today = todayWeatherData;
      const days = getDays(weatherForecastData.list);
      this.setState({
      today,
      days,
      isLoaded: true,
      inputMessage: 'Enter your location'
      });
    } else {
      this.setState({
        ...this.state, inputMessage: 'Please enter proper country abbreviation and zip code. Or try again at another time.'
      })
    }
  }

  render() {
    const { inputMessage, today, days, isLoaded } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Weather App</h1>
        </header>
        <div className="weather-wrapper">
          <div className="form-container">
            <h3>{inputMessage}</h3>
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
