# Weather Forecast App

This app can be found deployed on [heroku](https://devdelvo-weather-app.herokuapp.com/)
By [Kevin Delvo] for Buildit @ wipro digital
[kevindelvo.com]

## Instructions

1. Navigate to [repo](https://gitbub.com/DevDelvo/weatherForecast)

2. Clone locally with the command `git clone https://github.com/DevDelvo/weatherForecast.git`

3. Install dependencies with the command `npm install`

4. Register a free OpenWeatherMap account and obtain an API key under the free subscription plan [here](https://openweathermap.org/api)

5. Inside of the root folder of this project, create a .env file  and create a key variable `REACT_APP_WEATHER_API_KEY` with the value of the API key you received from OpenWeatherMap. It should look like this: `REACT_APP_WEATHER_API_KEY=123Whateveryourapikeyis456`

6. Run tests with the command `npm run test`

7. Start your server using `npm run start`

8. Navigate to the app in [browser](http://localhost:3000)

9. In the app, find the input forms for Country and Zip Code and type in the abbreviation of the country and zipcode you would like to see the weather for.

10. Press the `Get Weather` button.

11. Check out the weather for the current day and the next 5 days. The next day boxes can be clicked to display the weather forecast for every 3 hours of that day. You can also toggle the temperature display between appearing as fahrenheit and celsius by clicking the F and C letters.

## Technologies
HTML,
CSS for styling,
React for modularizing and reusing components

This app was started with [create-react-app](https://github.com/facebook/create-react-app)

## Thought Processes

    At the start of the project, I knew I wanted to use just HTML, CSS and React to keep the app very simple. I'm familiar with 

## Requirements
#### A readme.md as described above
#### A working forecast app as per requirements
#### A project that builds and runs as per instruction without warnings or errors

## Bonuses
#### Feel free to add any automated tests (e.g. unit, functional, integration, system)