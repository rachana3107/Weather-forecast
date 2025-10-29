# Weather Now

A simple, beautiful web application that allows users to check the current weather conditions for any city. Built with HTML, CSS, and JavaScript, using the Open-Meteo API for weather data and Nominatim for geocoding.

## Features

- **City-based Weather Lookup**: Enter any city name to get current weather information.
- **Real-time Data**: Fetches live weather data from Open-Meteo API.
- **Stunning UI**: Modern glassmorphism design with gradient backgrounds and smooth animations.
- **Responsive Design**: Works on desktop and mobile devices.
- **Error Handling**: Displays user-friendly error messages for invalid cities or API failures.

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **APIs**:
  - Open-Meteo API for weather data
  - Nominatim (OpenStreetMap) for geocoding city names to coordinates
- **Styling**: CSS with glassmorphism effects, gradients, and transitions

## How It Works

1. User enters a city name in the input field.
2. The app uses Nominatim API to geocode the city name into latitude and longitude coordinates.
3. Coordinates are sent to Open-Meteo API to fetch current weather data.
4. Weather information (temperature, humidity, wind speed, precipitation probability) is displayed in a beautiful card.

## API Usage

- **Geocoding**: `https://nominatim.openstreetmap.org/search?format=json&q={city}`
- **Weather**: `https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,wind_speed_10m`

## File Structure

```
weather-forecast/
├── index.html      # Main HTML structure
├── style.css       # Styling with glassmorphism and gradients
├── script.js       # JavaScript for API calls and UI interactions
├── README.md       # This file
└── TODO.md         # Development notes
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/rachana3107/Weather-forecast.git
   cd Weather-forecast
   ```

2. Open `index.html` in your web browser.

No server setup required - it's a static web app!

## Usage

1. Open the app in your browser.
2. Enter a city name (e.g., "New York", "London", "Tokyo").
3. Click "Get Weather" or press Enter.
4. View the current weather information displayed below.

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Notes

- The app uses free APIs, so there might be rate limits for heavy usage.
- Geocoding is done via OpenStreetMap's Nominatim service.
- Weather data is fetched in Celsius; wind speed in km/h.
- The app is client-side only, no backend required.

## Contributing

Feel free to fork the repository and submit pull requests for improvements!

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

Created by Rachana for outdoor enthusiasts who need quick weather checks.
