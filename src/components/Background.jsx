import React from "react";
import {fetchImage} from "../scripts/UnsplashAPI.js";
export default function Background() {
  const [img, setImg] = React.useState(
    require("../assets/wallpapers/dofpurple.jpg")
  );

  React.useEffect(() => {});

  return (
    <div
      onClick={() => {
        console.log(fetchImage())
      }}>
      <img src={img} id="backgroundIMG" alt="" />
    </div>
  );
}

// const fetchIMG = async () => {
//   let imgURL;
//   try {
//     const unsplash = await createApi({
//       accessKey: `${s.APIKEYS.unsplashAPI}`,
//     });
//     const fetchUnsplash = await unsplash.photos.getRandom({
//       collectionIds: ['1053828'],
//       orientation:"landscape"
//     });
//     imgURL = fetchUnsplash.response.urls.raw + "&q=85" + "&w=1920" + "&fit=crop" + "&fit=max";
//   } catch (err) {
//     imgURL = require("../assets/wallpapers/abstractdofpurple.jpg");
//     console.log(err, "defaulting to dof purple");
//   }
//   return imgURL;
// };
