import React from "react";
import d from "../assets/default.json";
import { callIntervalImmediately, cache } from "../scripts/Helpers";

export default function Weather() {
  const [data, setData] = React.useState(d.WeatherDefault);
  const [output, setOutput] = React.useState("simple");


  /**
   * Fetch Weather Data API Caller
   */
  React.useEffect(() => {
    const updateInterval = callIntervalImmediately(() => {
      //function goes here
    }, 30 * 1000);

    return () => {
      clearInterval(updateInterval);
    };
  }, []);

  /**
   * API Response Logger
   */
  React.useEffect(() => {
    if (data.cod === 429) {
      console.log("Too many requests");
    } else {
      console.log(data);
    }
  }, [data]);

  return (
    <div id="weather" onClick=
      {() => {
        if (output === "simple") {
          setOutput("detailed");
        } else {
          setOutput("simple");
        }
        return output;
      }}>

    </div>
  );
}