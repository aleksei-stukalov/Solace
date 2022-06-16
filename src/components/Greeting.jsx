import {useEffect, useState} from "react";

import settings from "../settings.json"
import { callIntervalImmediately } from "../scripts/Helpers";

/**
 * @description Greeting component to greet user depending on time of day
 */
export default function Greeting() {
  const name = settings.general.name;
  const [hour, setHour] = useState(new Date());

  // Updates Greeting Every Half an hour
  //TODO Attach Interval to Global Timer
  useEffect(() => {
    const updateInterval = callIntervalImmediately(() => {
      setHour(new Date());
    }, 60 * 30 * 1000);

    return (() => {
      clearInterval(updateInterval)
    })
  }, []);

  const greeting = greetings(hour, name);
  return <div id="greeting">{greeting}</div>;
}

/**
 *
 * @param {Date} time
 * @param {string} name
 */
function greetings(time, name) {
  const currentHour = time.getHours();
  const greetings = [
    "Good Morning",
    "Good Day",
    "Good Afternoon",
    "Good Evening",
    "Good Night",
  ];
  if (currentHour > 0 && currentHour < 8) {
    return greetings[0] + ", " + name;
  } else if (currentHour >= 8 && currentHour <= 12) {
    return greetings[1] + ", " + name;
  } else if (currentHour >= 13 && currentHour <= 16) {
    return greetings[2] + ", " + name;
  } else if (currentHour >= 17 && currentHour <= 21) {
    return greetings[3] + ", " + name;
  } else if (currentHour >= 22 && currentHour <= 23) {
    return greetings[4] + ", " + name;
  }
}
