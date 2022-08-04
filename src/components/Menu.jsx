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

export default function Menu() {
  const [menuVisible, toggleMenu] = useState(true);
  const [menuValues, setMenuValue] = useState({});
  let menuAppearance = menuVisible == true ? "hidden" : "displayed";

  return (
    <nav className={menuAppearance}>
      <button onClick={() => toggleMenu(!menuVisible)}></button>
      <ul id="group-menu">
        <li>
          <h3>User Preferences</h3>
          <ul>
            <li>
              Colour theme
              <DropDown
                passedObject={{
                  list: ["Default", "Dark", "Light"],
                  selected: 0,
                  size: "small",
                }}
              />
            </li>
            <li>Time format</li>
            <li>Language</li>
            <li>Global font size</li>
          </ul>
        </li>
        <li>
          <h3>Screen Areas</h3>
          <ul>
            <li>Shape</li>
            {/* List items below are expendable tab with drop down params */}
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
        </li>
      </ul>
    </nav>
  );
}
