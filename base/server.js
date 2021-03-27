const apiKey = "aca7b08bd68c69e670ea4c275dff7bfe";
const lang = "bg";
const units = "metric";
export const url = `http://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=${units}&lang=${lang}`;

export function generateImageUrl(icon) {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`;
}