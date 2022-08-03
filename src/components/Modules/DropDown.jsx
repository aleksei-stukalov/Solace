import React from "react";

export default function DropDown({ listItems }) {
  console.log(React.Children.forEach((i) => console.log(i)));
  return (
    <ul className="module-dropdown">
      <li>asd</li>
    </ul>
  );
}
