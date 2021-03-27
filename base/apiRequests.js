import { url } from "./server.js";

export function getWeather(city, successFunction, errorFunction) {
    // ajax заявка за извличане на данни от външно API
    $.ajax({
        // адреса на API-то
        url: `${url}&q=${city}`,
        // функция, която да се изпълни при успешно извикаване
        success: successFunction,
        // функция, която се извиква при грешка
        error: errorFunction
    });
}