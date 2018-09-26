import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { config } from './config'
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
    days: [],
  };


  

  getWeather = async (e) => {
    e.preventDefault();
    
    const country = e.target.country.value;
    const zipcode = e.target.zipcode.value;

    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},${country}&appid=${API_KEY}`)
    const weatherData = await apiCall.json();

    const days = getDays(weatherData.list);

    this.setState({
      days
    })
  }

  render() {
    const { days } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Weather App</h1>
        </header>
        <div className="weather-wrapper">
          <div className="weather-card-container">
          {
            days.map((day, idx) => <WeatherCard key={idx} data={day}/>)
          }
          {/* <WeatherCard /> */}
          </div>
          <div className="form-container">
            <h3>Enter your location</h3>
            <Form getWeather={this.getWeather}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
