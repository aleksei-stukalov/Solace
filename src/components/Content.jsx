import React from "react";

import settings from "../settings.json";
import ErrorHandler from "../scripts/ErrorHandler";
import TextField from "./Features/TextField";

const drawArea = (area) => {
  //  Each area has to have an anchore point. It is preset to default values,
  //  but user potentially could change it in settings.
  //  We changing anchore points simple by assigning the write class to the
  //  area HTML element. The name of the class is the same as the anchore
  //  value.
  const areaAnchor = area.anchor;
  const areaID = area.id;

  const areaContent = area.content.map((block) => {
    //  areaContent is a list of HTML elements or Components that need to be
    //  displayed inside of the Content component. area.content is a list of
    //  blocks of content that user can add/remove/edit. Depending on what
    //  type the block is we want to return an appropriate element. blockRouter
    //  is a point of reference that connects the area.content type with the
    //  HTML element.
    //  We can add new HTML elements or components by simple editing this
    //  object variable.
    const blockRouter = {
      textfield: <TextField value={block.value} styles={block.styles} />,
      plugin: <p>This is a placeholder for a plugin "{block.value}"</p>,
    };

    return blockRouter[block.type] || ErrorHandler("Content", "areaContent");
  });

  return (
    <section id={areaID} className={areaAnchor}>
      {areaContent}
    </section>
  );
};

export default function Content() {
  const areas = settings.areas;

  return <main id="content">{areas.map((area) => drawArea(area))}</main>;
}
