import React, { useState } from 'react';
import './WeatherWidget.css';

const WeatherWidget = () => {
    const [location, setLocation] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchWeather = async (city) => {
        setLoading(true);
        setError(null);
        try {
            const apiKey = '2a0e03ae8570f923add18f18bfc1ffa1'; // Your API key
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
            );
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            console.log('Weather data:', data); // Log the data for debugging
            setWeatherData(data);
        } catch (error) {
            setError(error.message);
            setWeatherData(null);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = () => {
        if (location) {
            fetchWeather(location);
        }
    };

    return (
        <div className="weather-widget">
            <h3>Weather Widget</h3>
            <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter city name"
            />
            <button onClick={handleSearch}>Get Weather</button>
            
            {loading && <div>Loading weather...</div>}
            
            {error && <div>Error fetching weather data: {error}</div>}
            
            {weatherData && !error && !loading && (
                <div>
                    <h4>Current Weather in {weatherData.name}</h4>
                    <p>Condition: {weatherData.weather[0].main}</p>
                    <p>Description: {weatherData.weather[0].description}</p>
                    <p>Temperature: {(weatherData.main.temp - 273.15).toFixed(2)}°C</p>
                </div>
            )}
        </div>
    );
};

export default WeatherWidget;
