import React from "react";
import { useState } from "react";

export default function DropDown({ passedObject }) {
  //  passedObject is an object with following attributes:
  //    list: <array> ................... List of elements in the dropdown.
  //    selected: <number> .............. Index of the item in the list as a
  //                                      selected element.
  //    size: 'small'|'medium'|'large' .. determins width, height and the font
  //                                      size of the element.

  //  TODO
  // [X] Figure out input data to this module
  // [-] Implement children input (Not needed, since doing it different now)
  // [X] Add data property to style css variable

  //  Input Data should have:
  // Some styling (global and local). Global would be theme and such,
  // when local is going to be some stuff passed to the component, like:
  // width, type of child hover interaction.

  //  Input elements
  const list = passedObject.list;
  let selected = passedObject.selected;

  //  To handle styles we gonna have an object containing all of the params to
  //  reference and set up in the code.
  const styler = {
    width: {
      small: "9rem",
      medium: "12rem",
      large: "15rem",
    },
    font: {
      small: "0.9rem",
      medium: "1rem",
      large: "1.2rem",
    },
    height: {
      small: "1.5rem",
      medium: "2rem",
      large: "2.5rem",
    },
  };

  //
  const [isDropped, setDropped] = useState(false);

  //  In case no params were passed - we want application to have defaults.
  passedObject.size ??= "medium";

  const styles = {
    "--module-width": styler.width[passedObject.size],
    "--module-height": styler.height[passedObject.size],
    "--module-font": styler.font[passedObject.size],
    "--module-amount": isDropped ? list.length + "00%" : 0,
  };

  //  List items logic
  const drawElement = (element) => {
    return (
      <li>
        <button>{element}</button>
      </li>
    );
  };

  return (
    <div className="module-dropdown" style={styles}>
      <button onClick={() => setDropped(!isDropped)}>{list[selected]}</button>
      <ul>{list.map((item) => drawElement(item))}</ul>
    </div>
  );
}
