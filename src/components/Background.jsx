import { useEffect, useState } from "react";
import { fetchImage, buildLink } from "../scripts/UnsplashAPI";

export default function Background() {
  const [img, setImg] = useState(1);

  useEffect(() => {
    if (img === 1) {
      setImg({
        src: 1,
      });
    }
  }, [img]);
  return (
    <div
      onClick={() => {
        fetchImage().then((data) => {
          setImg(data);
          console.log(data);
        });
      }}
    >
      <img src={buildLink(img.src)} id="backgroundIMG" className="fullscreen" alt="" />
    </div>
  );
}
