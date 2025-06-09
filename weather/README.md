# weather

This code explains how to build a basic weather app using React.

1. weather component:

   - useState hooks are used to manage the city input, fetched weather data, loading status, error messages, and track whether a search has been initiated.

2. fetchWeather function:

   - fetches weather data from the app (wttr.in) based on the city entered by the user.
   - it displays the temperature, weather description, humidity, and wind speed.

3. handleCityChange and handleSearch:

   - handleCityChange updates the input field when the user types a city name.
   - handleSearch triggers the weather fetch when the user clicks the search button or presses enter.

4. weather display:

   - shows a message to enter a city name if the search hasn’t been initiated.
   - displays loading, error, or weather information based on the current app state.
   - this app allows users to search for weather conditions by city.
