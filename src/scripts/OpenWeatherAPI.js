import settings from "../settings.json";

const fetchWeatherData = async () => {
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
      maintemp: body.main.temp,
      feels_like: body.main.feels_like,
      min: body.main.tem_min,
      max: body.main.temp_max,
      humidity: body.main.humidity,
    },
  });
};

function weatherDisplay(data, mode) {
  const celsius = Math.round(data.stats.maintemp);
  if (mode === "detailed") {
    return (
      <div>
        <span id="weatherName">{data.city} </span>
        <img
          src={require(`../assets/${data.theme}/${data.icon}`)}
          id="weatherImg"
          alt=""
        />
        <span id="weatherTemp"> {celsius}°</span>
        <li id="weatherDescription">{data.description}</li>
        <span id="weatherDetailed">
          <li id="weatherFeels">
            Feels Like:{" "}
            <span className="bold">{Math.round(data.stats.feels_like)}° </span>
          </li>
          <li id="weatherHumidity">
            Humidity: <span className="bold">{data.stats.humidity}%</span>{" "}
          </li>
          <li>
            Min: <span className="bold">{Math.round(data.stats.min)}°</span>
          </li>
          <li>
            Max: <span className="bold">{Math.round(data.stats.max)}°</span>
          </li>
        </span>
      </div>
    );
  } else {
    return (
      <div id="weather">
        <span id="weatherName">{data.city} </span>
        <img
          src={require(`../assets/${data.theme}/${data.icon}`)}
          id="weatherImg"
        />
        <span id="weatherTemp"> {celsius}°</span>
      </div>
    );
  }
}

//TODO Add Geocoding functions
