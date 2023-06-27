// Implement a simple weather app that fetches weather data from an API

const API_KEY = 'your_api_key';

function fetchWeatherData(city) {
  const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}`;

  // Fetch weather data from the API
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Process and display weather information
      // ...
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// Usage: fetchWeatherData('Tokyo');
