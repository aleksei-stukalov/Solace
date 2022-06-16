import settings from "../settings.json";
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
    params.set("count", "10");
    params.set("collections", "1053828");
    params.set("orientation", "landscape");

    const res = await fetch(`${url}?${params}`, { headers, cache: "no-cache" });
    const body = await res.json();
    return (img = {
      src: body.urls.raw,
      credit: {
        imageLink: body.links.html,
        location: body.location.name,
        userName: body.user.name,
        userLink: body.user.links.html,
      },
    });
  } catch (err) {
    img = null;
    console.log(err);
  }
  return img;
};

export function calculateWidth(screenWidth = 1920, pixelRatio = 1) {
  // Consider a minimum resolution too
  screenWidth = screenWidth * pixelRatio; // Find true resolution
  screenWidth = Math.max(screenWidth, 1920); // Lower limit at 1920
  screenWidth = Math.min(screenWidth, 3840); // Upper limit at 4K
  screenWidth = Math.ceil(screenWidth / 240) * 240; // Snap up to nearest 240px for improved caching
  return screenWidth;
}
