/**
 * @file Home Page React Component, Serves as a single page component. 
 * Displays all of the Components from the application
 */

import React from "react";

// Component Imports
import Clock from "../components/Clock";
import Greeting from "../components/Greeting";
import Weather from "../components/Weather";
import Background from "../components/Background";

// Stylesheet Imports
import "../stylesheets/Components.css";
import "../stylesheets/Style Classes.css";

export default function Home() {
  return (
    <div>
      <Background />
        <span id="homeTxt">
          <Greeting />
          <Clock timeFormat="24" dateFormat="textual" />
          <Weather />
        </span>
    </div>
  );
}
