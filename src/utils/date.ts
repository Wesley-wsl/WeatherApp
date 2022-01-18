const today = new Date();
const dayName = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
const day = String(today.getDate()).padStart(2, "0");
const month = String(today.getMonth() + 1).padStart(2, "0");
const year = today.getUTCFullYear();

export const hours = today.getHours();
export const minutes = today.getMinutes();
export const dayWeek = dayName[today.getDay()];
export const date = `${day}/${month}/${year}`;
