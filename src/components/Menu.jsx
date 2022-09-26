import React from "react";
import { useState } from "react";

import DropDown from "./Modules/DropDown";

//  DONE
// [X] Make a layout for the menu
// [X] Rework menu css that it moves the content to the right when opened.
// [X] Think of a better styles structure

//  TODAY
// [ ] Make a useState object that holds menu settings data.

//  TODO
// [ ] Figure out how to structure the data for the settings
// [ ] Make a custom scroll but for settings element

const addonSettings = [
  {
    id: "theme",
    name: "Colour theme",
    list: ["Browser Default", "Dark Grey", "Light Cream"],
    type: "DropDown",
  },
  {
    id: "timeFormat",
    name: "24 hours time format",
    type: "Switch",
  },
  {
    id: "language",
    name: "Language",
    list: ["English"],
    type: "DropDown",
  },
  {
    id: "font",
    name: "Global font size",
    list: ["16pt", "18pt"],
    type: "DropDown",
  },
];

const settingsGroups = {
  "User Preferences": ["theme", "timeFormat", "language", "font"],
  "Screen Areas": [
    "shape",
    "topLeft",
    "bottomLeft",
    "top",
    "center",
    "bottom",
    "topRight",
    "bottomRight",
  ],
  "Appearance ": ["animation"], // need to fix my beautifier and remove space
};

const userSettings = {
  theme: 0,
  timeFormat: false,
  language: 0,
  font: 0,
};

export default function Menu() {
  const [menuVisible, toggleMenu] = useState(true);

  return (
    <nav data-toggle={menuVisible} data-theme={"light"}>
      <button onClick={() => toggleMenu(!menuVisible)}></button>
      <ul id="group-menu"></ul>
    </nav>
  );
}

{
  /* <li>
<h3>User Preferences</h3>
<ul>
  <li>
    Colour theme
    <DropDown
      passedObject={{
        list: ["Default", "Dark", "Light"],
        selected: 0,
      }}
    />
  </li>
  <li>
    Time format
    <DropDown
      passedObject={{
        list: ["12hrs", "24hrs"],
        selected: 0,
      }}
    />
  </li>
  <li>
    Language
    <DropDown
      passedObject={{
        list: ["English"],
        selected: 0,
      }}
    />
  </li>
  <li>
    Global font size{" "}
    <DropDown
      passedObject={{
        list: ["16pt", "24pt"],
        selected: 0,
      }}
    />
  </li>
</ul>
</li>
<li>
<h3>Screen Areas</h3>
<ul>
  <li>Shape</li>
  <li>Top Left</li>
  <li>Bottom Left</li>
  <li>Top Middle</li>
  <li>Center</li>
  <li>Bottom Middle</li>
  <li>Top Right</li>
  <li>Bottom Right</li>
</ul>
</li>
<li>
<h3>Appearance</h3>
<ul>
  <li>Animation</li>
  <li>Areas Animation</li>
</ul>
</li> */
}
