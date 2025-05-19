export const API_CONFIG = {
  BASE_URL: "https://api.openweathermap.org/data/3.0",
  GEO: "http://api.openweathermap.org/geo/1.0",
  API_KEY: import.meta.env.VITE_OPENWEATHER_API_KEY,
  DEFAULT_PARAMS: {
    units: "metric",
    appid: import.meta.env.VITE_OPENWEATHER_API_KEY, //- Vite uses import.meta.env to manage environment variables, keeping API keys hidden from the public
  },
};

//units: "metric" - "metric" ensures the temperature is provided in Celsius, which is commonly used outside the US.
//- "imperial" → Gives temperature in Fahrenheit.
//- "standard" → Returns the temperature in Kelvin (default).
