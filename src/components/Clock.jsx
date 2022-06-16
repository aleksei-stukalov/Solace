import { useEffect, useState } from "react";

import { callIntervalImmediately } from "../scripts/Helpers";

/**
 * @description Configurable clock that shows time and date in 12 and 24 hour format and numerical and textual date formats
 * @param timeFormat 12 | 24
 * @param dateFormat numerical | textual
 */
export default function Clock(props) {
  const timeFormat = props.timeFormat;
  const dateFormat = props.dateFormat;

  const [time, setTime] = useState(new Date());


  useEffect(() => {
    const updateInterval = callIntervalImmediately(() => {
      setTime(new Date());
    },1000);
    
    return (() => {
      clearInterval(updateInterval)
    })
  }, []);

  const clockTime = timeParse(time, timeFormat);
  const clockDate = dateParse(time, dateFormat);
  return (
    <div>
      <div id="clockTime">{clockTime}</div>
      <div id="clockDate">{clockDate}</div>
    </div>
  );
}

/**
 * @param time Value for the function to process into format specified in format param
 * @param format Format to process time param into
 * @returns Time processed in specified format
 */
function timeParse(time, format) {
  var parsedTime = null;
  if (format === "12") {
    parsedTime = time.toLocaleTimeString("en-AU", {
      hour12: true,
      hour: "2-digit",
      minute: "2-digit",
    });
  } else if (format === "24") {
    parsedTime = time.toLocaleTimeString("en-AU", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit"
    });
  } else {
    parsedTime = time.toLocaleTimeString();
  }
  if (parsedTime === null) {
    throw console.error("Time has not been parsed");
  }

  return parsedTime;
}

/**
 * @param time Value for the function to process into format specified in format param
 * @param format Format to process time param into
 * @returns Date processed in specified format
 */
function dateParse(time, format) {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  var parsedDate;
  if (format === "numerical") {
    parsedDate = time.toLocaleDateString("en-AU");
  } else if (format === "textual") {
    parsedDate =
      weekday[time.getDay()] +
      ", " +
      months[time.getMonth() - 1] +
      " " +
      time.getDate();
  } else {
    parsedDate = time.toLocaleDateString();
  }
  if (parsedDate === null) {
    throw console.error("Date has not been parsed");
  }
  return parsedDate;
}
