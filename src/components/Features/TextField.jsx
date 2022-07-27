import { useEffect, useState } from "react";

/**
 * @description Greeting component to greet user depending on time of day
 */
export default function TextField({ value }, { styles }) {
  //  ErrorHandles needs to be rewritten in its own component
  const ErrorHandler = (passedMessage) => {
    return console.log(passedMessage);
  };

  return <p id="textfield-greeting">{value}</p>;
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
  if (currentHour >= 0 && currentHour < 8) {
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
