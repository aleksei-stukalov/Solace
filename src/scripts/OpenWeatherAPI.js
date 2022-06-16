/**
 * @file Library of OpenWeather Based API functions for fetching and displaying
 * Weather Data from OpenWeather
 */

import settings from "../settings.json";

/**
 * @description Fetches Weather Data from API, Processes the data to usable format
 * and returns it.
 * @returns Processed Weather Data
 * @err Returns 1
 */
export const fetchWeatherData = async () => {
  let weather;
  try {
    const url = "https://api.openweathermap.org/data/2.5/weather";
    const params = new URLSearchParams();
    params.set("lat", settings.weather.latitude);
    params.set("lon", settings.weather.longitude);
    params.set("appid", settings.APIKEYS.weatherAPI);
    params.set("units", settings.weather.unit);

    const res = await fetch(`${url}?${params}`, { cache: "no-cache" });
    const body = await res.json();

    return (weather = {
      city: body.name,
      description: body.weather[0].main,
      icon: `${body.weather[0].icon}.png`,
      theme: settings.general.theme,
      stats: {
        maintemp: `${Math.round(body.main.temp)}`,
        feels_like: `${Math.round(body.main.feels_like)}`,
        min: `${Math.round(body.main.temp_min)}`,
        max: `${Math.round(body.main.temp_max)}`,
        humidity: body.main.humidity,
      },
    });
  } catch (err) {
    console.log(err);
    weather = 1;
  }
  return weather;
};

/**
 * @description Takes in Weather JSON data and displays it on page as either simple
 * or detailed output depending on mode input
 * @param {JSON} data Converted JSON returned with fetchWeather Function
 * @param {String} mode Display Mode for function
 * @returns Displays styled weather on page
 */
export function weatherDisplay(data, mode) {
  const celsius = Math.round(data.stats.maintemp);
  return (
    <div>
      <span id="weatherSimple">
        <span id="weatherName">{data.city} </span>
        <img
          src={require(`../assets/${data.theme}/${data.icon}`)}
          id="weatherImg"
          alt=""
        />
        <span id="weatherTemp"> {celsius}°</span>
      </span>
      {weatherDetail(data, mode)}
    </div>
  );
}

function weatherDetail(data, mode) {
  if (mode === "detailed") {
    return (
      <div id="weatherDetail">
        <li id="weatherDescription" className="center LowerPadding">
          {data.description}
        </li>
        <li className="bold center">{data.stats.max}°</li>
        <li className="center LowerPadding">Max</li>
        <li className="bold center">{data.stats.min}°</li>
        <li className="center LowerPadding">Min</li>
        <li className="bold center">{data.stats.feels_like}°</li>
        <li className="center LowerPadding">Feels Like</li>
        <li className="bold center">{data.stats.humidity}%</li>
        <li className="center">Humidity</li>
      </div>
    );
  }
}

//TODO Add Geocoding functions
//TODO Add Weather API Error Response Handling
