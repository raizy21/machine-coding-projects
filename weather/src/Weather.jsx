import { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState(""); // input value for city
  const [weatherData, setWeatherData] = useState(null); // weather data
  const [loading, setLoading] = useState(false); // loading state
  const [error, setError] = useState(null); // error state
  const [searchInitiated, setSearchInitiated] = useState(false); // to track if search has been initiated

  // function to fetch weather data based on city
  const fetchWeather = async (city) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`https://wttr.in/${city}?format=j1`);
      if (!response.ok) {
        throw new Error("failed to fetch weather data");
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // function to handle city input change
  const handleCityChange = (e) => {
    const value = e.target.value;
    setCity(value);
  };

  const handleSearch = () => {
    if (city) {
      setSearchInitiated(true); // set search initiated to true
      fetchWeather(city); // fetch weather when user clicks search or presses enter
    }
  };

  return (
    <div className="weather-app">
      <h1 className="app-heading">weather app</h1>

      <div className="search-container">
        <input
          type="text"
          value={city}
          onChange={handleCityChange}
          placeholder="enter city name..."
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          search
        </button>
      </div>

      {/* weather data display */}
      <div className="weather-info">
        {!searchInitiated ? (
          <p>please search for the weather by entering a city name above.</p>
        ) : loading ? (
          <p>loading weather data...</p>
        ) : error ? (
          <p>error: {error}</p>
        ) : weatherData ? (
          <div>
            <h2>weather in {city}</h2>
            <p>
              <strong>temperature:</strong>{" "}
              {weatherData.current_condition[0].temp_C}°C
            </p>
            <p>
              <strong>description:</strong>{" "}
              {weatherData.current_condition[0].weatherDesc[0].value}
            </p>
            <p>
              <strong>humidity:</strong>{" "}
              {weatherData.current_condition[0].humidity}%
            </p>
            <p>
              <strong>wind speed:</strong>{" "}
              {weatherData.current_condition[0].windspeedKmph} km/h
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Weather;
