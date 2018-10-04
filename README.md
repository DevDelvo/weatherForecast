# Weather Forecast App

This app can be found deployed on [heroku](https://devdelvo-weather-app.herokuapp.com/)

By [Kevin Delvo](https://devdelvo.github.io/) for [Buildit @ wipro digital](https://buildit.wiprodigital.com/)

## Instructions

1. Navigate to [repo](https://gitbub.com/DevDelvo/weatherForecast)

2. Clone locally with the command `git clone https://github.com/DevDelvo/weatherForecast.git`

3. Install dependencies with the command `npm install`

4. Register a free OpenWeatherMap account and obtain an API key under the free subscription plan [here](https://openweathermap.org/api)

5. Inside of the root folder of this project, create a .env file  and create a key variable `REACT_APP_WEATHER_API_KEY` with the value of the API key you received from OpenWeatherMap. It should look like this: `REACT_APP_WEATHER_API_KEY=123Whateveryourapikeyis456`

6. Run tests with the command `npm run test`

7. Start your server using `npm run start`

8. Navigate to the app in [browser](http://localhost:3000). This app is best viewed on the Google Chrome browser.

9. In the app, find the input forms for Country and Zip Code and type in the abbreviation of the country and zipcode you would like to see the weather for.

10. Press the `Get Weather` button. Press the `Clear` button to clear all the weather data.

11. Check out the weather for the current day and the next 5 days. The next day boxes can be clicked to display the weather forecast for every 3 hours of that day. You can also toggle the temperature display between appearing as fahrenheit and celsius by clicking the F and C letters.

## Technologies
HTML,
CSS for styling,
React for modularizing and reusing components,
prop-types to define what each prop component needs and what data type that prop should be,
dotenv for storing the OpenWeatherMap api key as an environmental variable for private key security,
enzyme for making tests for seeing if the app renders correctly

This app was started with [create-react-app](https://github.com/facebook/create-react-app)

## Thought Processes

-At the start of the project, I knew I wanted to use just HTML, CSS and React to keep the app very simple. Because of the simplicity of the app, I didn't think a custom webpack build or libaries like Material-UI would be necessary. I chose create-react-app to get a quick start on the project and save a lot of time on set-up. I would also rely on flexbox to make the app more responsive.

-For making the api requests, due to the limitation of the free OpenWeatherMap api, I opted to only use country code and zip code. I'm aware that using the OpenWeatherMap city IDs provide the most accurate information but it would be difficult to provide that for the user since its just numbers. With more time, I would have liked to experiment with caching key-value pairs from the city.list.json that OpenWeatherMap provides into a new object holding city abbreviation - city ID pairs. Although taking up more memory, the key value pair would provide an O(1) lookup time when the user provides their city which would access the city ID from the cached object.

-For the Form component, I made it so the weather button was disabled unless they entered a zip code which is what is essential for making the API request. I also handled a failed API request by having an error message display telling the user to input a proper zip code and country code or to try again later in case the OpenWeatherMap itself was having issues. With more time I would have loved to include proper form validation to tell the user if they are entering a valid country code or zip code. I would either add autocomplete suggestions with a trie of all the valid country codes or a dropdown modal.

-For the interface, I took inspiration from many other existing weather apps. I wanted the information to be displayed with a detailed view for the day, followed by a brief description of the upcoming week through the WeatherCard component. So I opted to include information like the Date, the time, description of the weather, the humidity and wind speed. But for the smaller WeatherCard component, I kept it simple with just the day, weather icon, description, temperature and highs/lows. I wanted to make it obvious that you could click on the smalle WeatherCard components so I added animation and a mouse over effect to each one. These effects would be disabled and the card would be transparent if that day's information was selected to be displayed in the DetailedForeCastCard component.

-For styling, I put emphasis through font-size and font-weight on the more important information relevent to the user at a glance such as the Date, the time and the temperature. I also wanted to make it so the user could toggle between fahrenheit and celsisus to have the options available for the user depending on their preferences. Given more time I would have loved to incorporate a carousel for the hourly forecasts in the DetailedForecastCard component so that the view is more consistent when the viewer wants to see that information. I would have also liked to experiment more with the interface such as font styling, font colors, etc. to make the app more aesthetically pleasing.

-For testing I would have liked to incorporate a functional test for when the user inputs correct and wrong information and then clicks the Get Weather button. But I was only able to test if the app renders correctly by matching it with a snap shot.

-The service worker than comes with create-react-app was also left in for if I were to make this app a progressive web app for mobile use.
