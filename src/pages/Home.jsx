import React from "react";

import Clock from "../components/Clock";
import Greeting from "../components/Greeting";
import Weather from "../components/Weather";
import Background from "../components/Background";

import "../Components.css";
import "../Style Classes.css";

export default function Home() {
  return (
    <div>
      <Background />
        <span id="homeTxt">
          <Greeting name="Michael" />
          <Clock timeFormat="24" dateFormat="textual" />
          <Weather />
        </span>
    </div>
  );
}
