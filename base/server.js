/*
  Константи, които можем да използваме само в този модул (файл)
  Тях няма да можем да ги импортваме в другите модули
*/
const apiKey = "aca7b08bd68c69e670ea4c275dff7bfe";
const lang = "bg";
const units = "metric";


// Константа, която експортваме, за да можем да импортнем и използваме в другите модули
export const url = `http://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=${units}&lang=${lang}`;


// Функция, която експортваме, за да можем да импортнем и използваме в другите модули
export function generateImageUrl(icon) {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`;
}
