import settings from "../settings.json";
import defaultIMG from "../assets/wallpapers/dofpurple.jpg";
// TODO Cache 10 images in advance for unsplash, to then load faster

export const fetchImage = async () => {
  let img;
  try {
    const url = "https://api.unsplash.com/photos/random";
    const params = new URLSearchParams();
    const headers = new Headers({
      method: "GET",
      Authorization: `Client-ID ${settings.APIKEYS.unsplashAPI}`,
    });

    params.set("collections", "1053828");
    params.set("orientation", "landscape");

    const res = await fetch(`${url}?${params}`, { headers, cache: "no-cache" });
    const body = await res.json();
    return img = {
      src: body.urls.raw,
      credit: {
        imageLink: body.links.html,
        location: body.location.name,
        userName: body.user.name,
        userLink: body.user.links.html,
      },
    };
  } catch (err) {
    console.log(err);
    return img = 1;
  }
};

export function buildLink(link) {
  if (link === 1 || link == null) {
    let newIMG;
    fetchImage().then((data) => {
      newIMG = data
    })
    if(newIMG === 1 || newIMG == null){
      newIMG=defaultIMG;
    }
    return newIMG;
  } else {
    const url = new URL(link);
    url.searchParams.set("q", "85");
    url.searchParams.set(
      "w",
      calculateWidth(window.innerWidth, window.devicePixelRatio)
    );
    return url;
  }
}

function calculateWidth(screenWidth = 1920, pixelRatio = 1) {
  // Consider a minimum resolution too
  screenWidth = screenWidth * pixelRatio; // Find true resolution
  screenWidth = Math.max(screenWidth, 1920); // Lower limit at 1920
  screenWidth = Math.min(screenWidth, 3840); // Upper limit at 4K
  screenWidth = Math.ceil(screenWidth / 240) * 240; // Snap up to nearest 240px for improved caching
  return screenWidth;
}
