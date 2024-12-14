// getweatherapidata.js--
import { displayWeather } from "./weatherinfo.js";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=45.0147&lon=-109.9318&appid=ae58a08ae8c44d5d31feb88e8f786999&units=imperial`;

async function retrieveData(Url) {
    try {
        const getResponse = await fetch(Url);
        if (getResponse.ok) {
            const info = await getResponse.json();
            console.log(info);
            displayWeather(info);
        } else {
            throw Error(await getResponse.text());
        }   
    } catch(error) {
        console.log("Error fetching data:", error);
    }
}
retrieveData(apiUrl);
