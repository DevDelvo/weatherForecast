import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { config } from './config'
import WeatherCard from './components/WeatherCard'
import Form from './components/Form'

const API_KEY = config.apiKey;

class App extends Component {
  state = {

  };

  getWeather = async (e) => {
    e.preventDefault();
    const numberOfDays = 5;
    const city = e.target.city.value
    const country = e.target.country.value;
    const zipcode = e.target.zipcode.value;
    console.log("city: ", city);
    console.log("country: ", country);
    console.log("zipcode: ", zipcode)
  }

  render() {
    console.log(API_KEY);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Weather App</h1>
        </header>
        <div className="weather-wrapper">
          <WeatherCard />
          <div className="form-container">
            <Form getWeather={this.getWeather}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
