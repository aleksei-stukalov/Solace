import React from "react";
import { useState } from "react";

//  Today
// [X] Make a layout for the menu

//  Later
// [ ] Figure out how to structure the data for the settings
// [ ] Make a custom scroll but for settings element
// [ ] Rework menu css that it moves the content to the right when opened.
// [ ] Think of a better styles structure

export default function Menu() {
  const [hide, toggleHide] = useState(false);
  let menuAppearance = hide == true ? "hidden" : "displayed";

  return (
    <nav className={menuAppearance}>
      <button onClick={() => toggleHide(!hide)}></button>
      <ul id="menu" className={menuAppearance}>
        <li>Group A</li>
        <li>Group B</li>
        <li>Group C</li>
        <li>Group D</li>
        <li>Group E</li>
      </ul>
    </nav>
  );
}
