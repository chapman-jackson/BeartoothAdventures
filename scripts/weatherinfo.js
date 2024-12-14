export function displayWeather(info) {
    console.log("Displaying weather data:", info); 
    const iconsrc = `https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`;
    let desc = info.weather[0].description;
    document.querySelector('#weather-icon').setAttribute('src', iconsrc);
    document.querySelector('#weather-icon').setAttribute('alt', desc);
    document.querySelector('#captionDesc').textContent = `${desc}`;
    document.querySelector('#temperature').innerHTML = `${info.main.temp}&deg;F`;
    document.querySelector('#wind-speed').innerHTML = `${info.wind.speed} MPH`;
    document.querySelector('#tempHigh').innerHTML = `${info.main.temp_max}&deg;F`;
    document.querySelector('#tempLow').innerHTML = `${info.main.temp_min}&deg;F`;
}

