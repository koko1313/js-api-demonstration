import { getWeather } from "./base/apiRequests.js"; // импортваме функцията getWeather от модула apiRequests.js
import { generateImageUrl } from "./base/server.js"; // импортваме функцията generateImageUrl от модула server.js


/*
  Викаме функцията getWeather
  първи параметър: града, за който искаме да получим времето
  втори параметър: функция, която да се изпълни, когато API-то върне резултат
  трети параметър: функция, която да се изпълни, ако заявката към API-то НЕ успее мине успешно
 */
getWeather("Lom", fillData, saySomethingIsWrong);


/*
  Тази функция ще бъде извикана, когато API-то върне резултат
  В параметъра data ще и бъде подаден резултата от изпълнената заявка
*/
function fillData(data) {
    console.log(data); // отпечатваме резултата в конзолата, за да видим какви данни получаваме

    document.getElementById("weatherImage").src =  generateImageUrl(data.weather[0].icon);
    document.getElementById("cityName").innerHTML = data.name;
    document.getElementById("temp").innerHTML = data.main.temp;
    document.getElementById("feelsLike").innerHTML = data.main.feels_like;
    document.getElementById("windSpeed").innerHTML = data.wind.speed;
}


// Тази функция ще бъде извикана, в случай, че заявката към API-то fail-не
function saySomethingIsWrong() {
    alert("Нещо се обърка");
}


document.getElementById("selectCity").addEventListener("change", cityChange);

function cityChange() {
    const selectedCity = document.getElementById("selectCity").value;
    getWeather(selectedCity, fillData, saySomethingIsWrong);
};