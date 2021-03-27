import { getWeather } from "./base/apiRequests.js";
import { generateImageUrl } from "./base/server.js";

getWeather("Lom", fillData, saySomethingIsWrong);

function fillData(data) {
    console.log(data);

    document.getElementById("weatherImage").src =  generateImageUrl(data.weather[0].icon);
    document.getElementById("cityName").innerHTML = data.name;
    document.getElementById("temp").innerHTML = data.main.temp;
    document.getElementById("feelsLike").innerHTML = data.main.feels_like;
    document.getElementById("windSpeed").innerHTML = data.wind.speed;
}

function saySomethingIsWrong() {
    alert("Нещо се обърка");
}

document.getElementById("selectCity").addEventListener("change", cityChange);

function cityChange() {
    const selectedCity = document.getElementById("selectCity").value;
    getWeather(selectedCity, fillData, saySomethingIsWrong);
};