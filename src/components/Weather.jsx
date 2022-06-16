import { useEffect, useState } from "react";
import def from "../assets/default.json";
import { callIntervalImmediately, cache } from "../scripts/Helpers";
import { fetchWeatherData, weatherDisplay } from "../scripts/OpenWeatherAPI";

export default function Weather() {
  const [weather, setWeather] = useState(def.WeatherDefault);
  const [output, setOutput] = useState("simple");

  /**
   * Fetch Weather Data API Caller
   */
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
