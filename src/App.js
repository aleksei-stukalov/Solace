import React from "react";

// Loading Logos Import
// TODO Implement Loading Logo or remove from Application
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// Component Imports
import Background from "./components/Background";
import Menu from "./components/Menu";
import Content from "./components/Content";

// Stylesheet Imports
import "./stylesheets/Styles.css";
import "./stylesheets/Style Classes.css";

function App() {
  return (
    <>
      <Menu />
      <Background />
      <Content />
      {/* <span id="homeTxt">
        <Greeting />
        <Clock timeFormat="24" dateFormat="textual" />
        <Weather />
        </span> */}
    </>
  );
}

export default App;
