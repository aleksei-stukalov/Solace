import React from "react";
import { useState } from "react";

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
