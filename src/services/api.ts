import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/",
});

export const apiHelpers = {
    key: process.env.REACT_APP_OPEN_WEATHER_KEY,
    lang: "pt-br",
    units: "metric",
};
