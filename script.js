document.getElementById('weatherForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const city = document.getElementById('cityInput').value.trim();
    if (city) {
        getWeather(city);
    }
});

async function getWeather(city) {
    const weatherDisplay = document.getElementById('weatherDisplay');
    const errorDiv = document.getElementById('error');
    errorDiv.classList.add('hidden');
    weatherDisplay.classList.add('hidden');

    try {
        // Geocode city to lat/lon using Nominatim
        const geoResponse = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(city)}`);
        const geoData = await geoResponse.json();
        if (geoData.length === 0) {
            throw new Error('City not found');
        }
        const lat = geoData[0].lat;
        const lon = geoData[0].lon;

        // Fetch weather from Open-Meteo
        const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,wind_speed_10m`);
        const weatherData = await weatherResponse.json();

        // Display weather
        document.getElementById('cityName').textContent = city;
        document.getElementById('temperature').textContent = `Temperature: ${weatherData.hourly.temperature_2m[0]}°C`;
        document.getElementById('description').textContent = `Humidity: ${weatherData.hourly.relative_humidity_2m[0]}%`;
        document.getElementById('windSpeed').textContent = `Wind Speed: ${weatherData.hourly.wind_speed_10m[0]} km/h`;
        document.getElementById('precipitation').textContent = `Precipitation Probability: ${weatherData.hourly.precipitation_probability[0]}%`;

        weatherDisplay.classList.remove('hidden');
    } catch (error) {
        errorDiv.textContent = error.message;
        errorDiv.classList.remove('hidden');
    }
}
