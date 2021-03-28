import { url } from "./server.js"; // импортваме константара url от модула server.js


// Функция, която експортваме, за да можем да импортнем и използваме в другите модули
export function getWeather(city, successFunction, errorFunction) {
    // ajax заявка за извличане на данни от външно API
    $.ajax({
        url: `${url}&q=${city}`, // адреса на API-то
        success: successFunction, // функция, която да се изпълни при успешно извикаване
        error: errorFunction // функция, която се извиква при грешка
    });
}
