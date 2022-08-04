import React from "react";

export default function DropDown({ passedObject }) {
  //  passedObject is an object with following attributes:
  //    list = []                List of elements in the dropdown menu
  //    selected = <number>      Index of the item in the list as a selected
  //                             element

  //  TODO
  // [ ] Figure out input data to this module
  // [ ] Implement children input
  // [ ] Add data property to style css variable

  //  Input Data should have:
  // Some styling (global and local). Global would be theme and such,
  // when local is going to be some stuff passed to the component, like:
  // width, type of child hover interaction.

  //  Input elements
  const elementList = passedObject.list;
  let elementSelected = passedObject.selected;

  //  Input styling
  const moduleSize = passedObject.size || "12rem";

  //  List items logic
  const drawElement = (element) => {
    return <li>{element}</li>;
  };

  return (
    <div className="module-dropdown" style={{}}>
      <button>{elementList[elementSelected]}</button>
      <ul>{elementList.map((item) => drawElement(item))}</ul>
    </div>
  );
}
