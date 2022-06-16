import { useEffect, useState } from "react";

import { callIntervalImmediately } from "../scripts/Helpers";
import { fetchWeatherData, weatherDisplay } from "../scripts/OpenWeatherAPI";

// Importing default Weather Data as workaround to current issue of Weather API
// Not Immediately Updating
import def from "../assets/default.json";

/**
 * @description Weather Component that displays weather data in simple and detailed
 * modes
 * @returns Weather Component Display
 */
export default function Weather() {
  const [weather, setWeather] = useState(def.WeatherDefault);
  const [output, setOutput] = useState("simple");

  /**
   * Fetch Weather Data API Caller
   */
  //TODO Attach Interval to Global Timer
  //TODO Verify Data Parsing is correct

  useEffect(() => {
    const updateInterval = callIntervalImmediately(() => {
      fetchWeatherData().then((data) => {
        setWeather(data);
        });
    }, 30 * 1000);

    return () => {
      clearInterval(updateInterval);
    };
  }, []);

// Input Trigger for Weather Details
  //TODO Rewrite Input Trigger to be within function and only for header
  return (
    <div
      id="weather"
      onClick={() => {
        if (output === "simple") {
          setOutput("detailed");
        } else {
          setOutput("simple");
        }
        return output;
      }}
    >
      {weatherDisplay(weather, output)}
    </div>
  );
}
