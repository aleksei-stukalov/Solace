import { useEffect, useState } from "react";

import { fetchImage, buildLink } from "../scripts/UnsplashAPI";
/**
 * @description Background Image Component, Fetches and displays images
 * from Unsplash as background image, With user configurable forward and back arrows
 * @returns Background Image for Webpage
 */
export default function Background() {
  const [img, setImg] = useState(1);

  //TODO Rewrite this useEffect once Error handling as been implemented.
  useEffect(() => {
    if (img === 1) {
      setImg({
        src: 1,
      });
    }
  }, [img]);

  //TODO Add Back, Forward, Pause Arrows to Background Component
  //TODO Add Specified Image Param for fetching and displaying image in place of Unsplash API Image.
  //TODO Add User Credits, Image Link, Location Display
  return (
    <div
      onClick={() => {
        fetchImage().then((data) => {
          setImg(data);
        });
      }}
    >
      <img
        src={buildLink(img.src)}
        id="backgroundIMG"
        className="fullscreen"
        alt=""
      />
    </div>
  );
}
