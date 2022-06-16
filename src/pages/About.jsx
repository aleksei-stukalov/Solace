import settings from "../settings.json";
import defaultData from "../assets/default.json"
export default function About(){
    return(
        <div>
            <h1>Theme</h1>
            <li>{settings.general.theme}</li>
            <h1>Weather Settings</h1>
            <li>Language: {settings.weather.lang}</li>
            <li>Units: {settings.weather.unit}</li>
            <li>Position: ({settings.weather.latitude}, {settings.weather.longitude})</li>
        </div>
    )
}